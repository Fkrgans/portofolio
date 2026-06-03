import { generateSystemPrompt, buildScopedContext } from './aiContext';

const CEREBRAS_API_KEY = (
    import.meta.env.VITE_CEREBRAS_API_KEY ||
    import.meta.env.REACT_APP_CEREBRAS_API_KEY ||
    ''
).trim();

const HUGGINGFACE_API_KEY = (
    import.meta.env.VITE_HUGGINGFACE_API_KEY ||
    ''
).trim();

const HUGGINGFACE_MODEL = import.meta.env.VITE_HUGGINGFACE_MODEL || 'gpt2';
const CEREBRAS_CHAT_COMPLETIONS_URL = 'https://api.cerebras.ai/v1/chat/completions';

async function queryHuggingFace(prompt) {
    const response = await fetch(`https://api-inference.huggingface.co/models/${HUGGINGFACE_MODEL}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputs: prompt,
            options: {
                wait_for_model: true,
                use_cache: false,
            },
        }),
    });

    if (!response.ok) {
        const error = new Error(`Hugging Face error: ${response.status}`);
        error.status = response.status;
        throw error;
    }

    const data = await response.json();
    const text = typeof data === 'string'
        ? data
        : data?.generated_text || data?.[0]?.generated_text || data?.error || '';

    if (!text) {
        const error = new Error('Hugging Face returned no text');
        error.status = response.status;
        throw error;
    }

    return text;
}

// Error classification for granular UI feedback
const classifyError = (error) => {
    const msg = error?.message?.toLowerCase() || '';
    const status = error?.status || error?.statusCode || 0;

    if ((typeof navigator !== 'undefined' && !navigator.onLine) || msg.includes('network') || msg.includes('fetch') || msg.includes('failed to fetch') || msg.includes('econnrefused')) {
        return { type: 'network', message: 'Connection lost. Check your internet and try again.' };
    }
    if (status === 429 || msg.includes('rate limit') || msg.includes('too many')) {
        return { type: 'rate_limit', message: 'Too many requests. Please wait a moment.' };
    }
    if (status >= 500 || msg.includes('server') || msg.includes('internal')) {
        return { type: 'server', message: 'Server is temporarily unavailable. Try again shortly.' };
    }
    if (status === 401 || status === 403 || msg.includes('auth') || msg.includes('api key')) {
        return { type: 'auth', message: 'Authentication error. Contact the site owner.' };
    }
    return { type: 'unknown', message: 'Something went wrong. Please try again.' };
};

async function* parseOpenAICompatibleStream(response) {
    const reader = response.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';

        for (const event of events) {
            const dataLines = event
                .split('\n')
                .filter((line) => line.startsWith('data:'))
                .map((line) => line.slice(5).trim());

            for (const data of dataLines) {
                if (!data || data === '[DONE]') continue;

                try {
                    const parsed = JSON.parse(data);
                    const content = parsed.choices?.[0]?.delta?.content;
                    if (content) yield content;
                } catch (error) {
                    // Ignore partial/non-JSON SSE control frames.
                }
            }
        }
    }

    const trailing = buffer.trim();
    if (trailing.startsWith('data:')) {
        const data = trailing.slice(5).trim();
        if (data && data !== '[DONE]') {
            try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) yield content;
            } catch (error) {
                // Ignore trailing parser errors.
            }
        }
    }
}

/**
 * Stream chat completions from Cerebras.
 * Yields text chunks as they arrive.
 * @param {Array} messages - Chat messages (already limited by caller)
 * @returns {AsyncGenerator<string>} - Yields text content chunks
 */
const OFFLINE_RESPONSE = 'FKR Bot is running in offline mode. Without an AI API key or when the API is unreachable, I can still answer basic portfolio questions and show general info about the site.';

export async function* streamCerebras(messages) {
    const systemPrompt = generateSystemPrompt();
    const latestUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || '';
    const scopedContext = buildScopedContext(latestUserMessage);

    const conversation = [
        { role: "system", content: systemPrompt },
        ...(scopedContext ? [{ role: 'system', content: scopedContext }] : []),
        ...messages
    ];

    const prompt = conversation.map((m) => {
        const prefix = m.role === 'assistant' ? 'Assistant' : m.role === 'system' ? 'System' : 'User';
        return `${prefix}: ${m.content}`;
    }).join('\n') + '\nAssistant:';

    if (!CEREBRAS_API_KEY && !HUGGINGFACE_API_KEY) {
        yield OFFLINE_RESPONSE;
        return;
    }

    if (HUGGINGFACE_API_KEY) {
        try {
            const result = await queryHuggingFace(prompt);
            yield result;
            return;
        } catch (error) {
            console.warn('Hugging Face request failed, falling back to Cerebras or offline mode.', error);
            if (!CEREBRAS_API_KEY) {
                yield OFFLINE_RESPONSE;
                return;
            }
        }
    }

    if (!CEREBRAS_API_KEY) {
        yield OFFLINE_RESPONSE;
        return;
    }

    try {
        const response = await fetch(CEREBRAS_CHAT_COMPLETIONS_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CEREBRAS_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: conversation,
                model: "gpt-oss-120b",
                max_tokens: 1024,
                temperature: 0.35,
                stream: true,
            }),
        });

        if (!response.ok) {
            const error = new Error(`Cerebras API error: ${response.status}`);
            error.status = response.status;
            throw error;
        }

        for await (const content of parseOpenAICompatibleStream(response)) {
            yield content;
        }
    } catch (error) {
        console.warn('Cerebras request failed, falling back to offline mode.', error);
        yield OFFLINE_RESPONSE;
    }
}
