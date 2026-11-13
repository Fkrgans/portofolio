import { useEffect, useRef, useState } from "react";
import { useGsapReducedMotion } from "../utils/gsapAnimate";

const ASCII_WIDTH = 32;
const ASCII_ROWS = 4;
const ASCII_DURATION = 1800;
const READY_HOLD = 450;
const EXIT_DURATION = 700;
const REDUCED_EXIT_DURATION = 200;

const ASCII_FONT = '"JetBrains Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

function getStatus(progress) {
    if (progress >= 100) return "READY";
    if (progress >= 70) return "COMPILING";
    if (progress >= 35) return "LOADING ASSETS";
    return "INITIALIZING";
}

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const reduceMotion = useGsapReducedMotion();

    const onCompleteRef = useRef(onComplete);
    const reduceMotionRef = useRef(reduceMotion);
    const holdTimerRef = useRef(null);
    const exitTimerRef = useRef(null);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        reduceMotionRef.current = reduceMotion;
    }, [reduceMotion]);

    // Deterministic boot counter: no random jumps, no interval drift.
    useEffect(() => {
        let frame = null;
        let start = null;
        let last = -1;

        const step = (timestamp) => {
            if (start === null) start = timestamp;

            const elapsed = timestamp - start;
            const next = Math.min(100, Math.floor((elapsed / ASCII_DURATION) * 100));

            if (next !== last) {
                last = next;
                setProgress(next);
            }

            if (elapsed < ASCII_DURATION) {
                frame = requestAnimationFrame(step);
            }
        };

        frame = requestAnimationFrame(step);

        return () => {
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    // Hold the finished state briefly, then hand control back to Home.
    useEffect(() => {
        if (progress < 100) return undefined;

        const exitDuration = reduceMotionRef.current
            ? REDUCED_EXIT_DURATION
            : EXIT_DURATION;

        holdTimerRef.current = window.setTimeout(() => {
            setIsExiting(true);

            exitTimerRef.current = window.setTimeout(() => {
                onCompleteRef.current?.();
            }, exitDuration);
        }, READY_HOLD);

        return () => {
            window.clearTimeout(holdTimerRef.current);
            window.clearTimeout(exitTimerRef.current);
        };
    }, [progress]);

    const status = getStatus(progress);
    const isComplete = progress >= 100;
    const filled = Math.floor((progress / 100) * ASCII_WIDTH);

    // Keep the leading cell black so the lime bar has a visible cursor edge.
    const fillCount = isComplete ? filled : Math.max(0, filled - 1);
    const hasEdge = !isComplete && filled > 0;
    const emptyCount = Math.max(0, ASCII_WIDTH - filled);

    const exitClass = reduceMotion
        ? (isExiting ? "opacity-0" : "opacity-100")
        : (isExiting ? "-translate-y-full" : "translate-y-0");

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-[#FAF9F6] p-5 font-mono text-black sm:p-6 md:p-10 ${reduceMotion
                ? "transition-opacity duration-200"
                : "transition-transform duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                } ${exitClass}`}
            style={{ willChange: reduceMotion ? "opacity" : "transform" }}
            aria-busy="true"
        >
            {/* Faint technical grid, kept subtle so the white stays clean. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.55]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(10,10,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "linear-gradient(to bottom, black, transparent 92%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent 92%)",
                }}
            />

            {/* Top bar */}
            <div className="relative z-10 flex items-start justify-between gap-4 text-[9px] uppercase tracking-[0.22em] text-black/55 sm:text-[10px] md:text-xs">
                <span className="font-bold text-black/75">FKR-DEV</span>
                <span>©2026</span>
            </div>

            {/* Center readout */}
            <div className={`relative z-10 mx-auto flex w-full max-w-[520px] flex-col items-center gap-7 transition-opacity duration-300 sm:gap-8 ${isExiting && !reduceMotion ? "opacity-0" : "opacity-100"}`}>
                <div className="w-full text-center">
                    <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-black/45 sm:text-[10px]">
                        Boot Sequence // 01
                    </p>

                    <div className="flex min-h-[2.75rem] items-center justify-center">
                        <p className="text-sm font-bold uppercase tracking-[0.26em] text-black sm:text-base md:text-lg">
                            <span aria-hidden="true">&gt; </span>
                            {status}
                            <span aria-hidden="true" className="ml-0.5 inline-block w-[0.6em] tracking-normal text-lime-600 motion-safe:animate-pulse">_</span>
                        </p>
                    </div>
                </div>

                {/* ASCII progress box */}
                <div
                    className="w-full"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                    aria-label="Portfolio loading progress"
                >
                    <div
                        aria-hidden="true"
                        className="mx-auto w-fit select-none text-[10px] text-black/70 sm:text-xs md:text-base"
                        style={{ fontFamily: ASCII_FONT, lineHeight: 1.15, letterSpacing: 0 }}
                    >
                        <div>┌{"─".repeat(ASCII_WIDTH)}┐</div>
                        {Array.from({ length: ASCII_ROWS }).map((_, row) => (
                            <div key={row}>
                                <span>│</span>
                                {fillCount > 0 && (
                                    <span className="bg-lime-500 text-transparent">{"█".repeat(fillCount)}</span>
                                )}
                                {hasEdge && <span className="bg-black text-transparent">█</span>}
                                <span className="text-black/20">{"·".repeat(emptyCount)}</span>
                                <span>│</span>
                            </div>
                        ))}
                        <div>└{"─".repeat(ASCII_WIDTH)}┘</div>
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-4">
                        <div className="text-[9px] uppercase tracking-[0.14em] text-black/55 sm:text-[10px]">
                            <p>
                                &gt;&gt; SYS.MEM.{isComplete ? "READY" : "ALLOCATING"}{" "}
                                <span className="text-black/80">[{String(progress).padStart(3, "0")}%]</span>
                            </p>
                            <p className="mt-1">
                                &gt;&gt; {isComplete ? "BOOT SEQUENCE COMPLETE." : "BOOT SEQUENCE IN PROGRESS..."}
                            </p>
                        </div>

                        <span className="shrink-0 text-2xl font-black tabular-nums leading-none tracking-tight text-black sm:text-3xl md:text-4xl">
                            {String(progress).padStart(3, "0")}
                            <span className="ml-0.5 text-sm font-bold text-lime-600 sm:text-base">%</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 flex items-end justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-black/55 sm:text-[10px] md:text-xs">
                <span className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 shrink-0 ${isComplete ? "bg-lime-500" : "bg-black/25"} ${!reduceMotion ? "motion-safe:animate-pulse" : ""}`} />
                    System Status: {isComplete ? "ONLINE" : "BOOTING"}
                </span>
                <span className="text-right">{isComplete ? "READY" : "PLEASE WAIT"}</span>
            </div>

            {/* Lime edge that sweeps up with the panel. */}
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-lime-400" />

            <p className="sr-only" aria-live="polite">{status}</p>
        </div>
    );
};

export default Preloader;
