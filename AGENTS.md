# AGENTS.md

Personal portfolio site: React 19 + Vite 8 + Tailwind CSS 3, published as a GitHub Pages project site under `/portofolio/`.

## Commands

- Vite 8 requires Node `^20.19.0 || >=22.12.0`; use npm (`package-lock.json`).
- `npm run dev` — binds `0.0.0.0`; open **http://localhost:5173/portofolio/** (`/` redirects there).
- `npm run build` — production build into `build/` (not `dist/`). This is the only verification gate.
- `npm run preview` — serve the production build.
- `npm run check` — build + `npm audit --omit=dev`; it is not a test suite.
- No test runner, linter, formatter, or typecheck is configured. Do not invent `npm test` / `npm run lint`.

## Base path and deployment

- `vite.config.js` sets `base: '/portofolio/'`; `src/index.js` sets `BrowserRouter basename='/portofolio'`. Keep them in sync.
- Runtime asset URLs must include that prefix: `/portofolio/foo.jpg` or `` `${import.meta.env.BASE_URL}foo.jpg` ``. Root-absolute `/foo.jpg` breaks on the published site.
- The `gh-pages` branch holds the built site; there is no CI or deploy workflow. `build/` is gitignored.
- `gh-pages` has no `404.html` fallback, so client-side deep links do not survive reloads.

## Entry points and project details

- `index.html` loads `src/index.js`; there is no `src/main.jsx` (the README is stale on this).
- Only `/` is a real page route. Project details are a modal: Home navigates to `/projects/:slug` with `state.backgroundLocation`, and `App.jsx` only renders that route when that state exists. Direct or reloaded `/projects/:slug` URLs render blank.
- Gallery cards come from `src/data/projectMeta.js`; detail components from `src/projectDetails/projectRegistry.js`; chatbot project text from `src/data/projectDetailsData.js`. Adding a project means updating all three with the same slug and creating a `ProjectCaseLayout` component under `src/projectDetails/`.
- Slugs are historical and do not match component names: `smart-scale` → Pendeteksi Objek, `ai-object-detection` → Timbangan Kopi, `flood-detection-system` → "Portofolio 2". Follow the registry instead of guessing from filenames.
- `PORTFOLIO_DATA.projects` and `assets.projectImages` are unused by the gallery; editing them changes nothing visually.
- Only the three slugs in `PROJECT_META` are reachable; the other project registry entries are currently unreferenced.

## AI assistant

- `src/services/cerebras.js` reads `VITE_CEREBRAS_API_KEY` (or legacy `REACT_APP_CEREBRAS_API_KEY`), plus optional `VITE_HUGGINGFACE_API_KEY` / `VITE_HUGGINGFACE_MODEL`.
- No `.env` is committed. Without keys the chat intentionally replies with an offline message, so "AI not responding" is expected in a fresh checkout.
- To add a chat/nav scroll target, add an entry to `src/data/sectionRegistry.js` and give the component a matching DOM `id`; the intent router and ChatWidget derive navigation from that registry.

## Scroll and animation

- Lenis is created once in `src/hooks/useLenis.js` and exposed as `window.lenisInstance`; Navbar, Footer, ChatWidget, and ProjectGallery call that global directly. Reuse it instead of starting a second smooth-scroll loop.
- `ProjectGallery` uses GSAP pinned horizontal scroll on desktop and native horizontal scroll below 1024px or with reduced motion. Preserve both branches when editing it.

## Repo hygiene

- `make_portofolio2_image.py`, `make_portofolio2_fix_image.py`, `temp_check.py`, and `tmp_hack_lines.txt` are tracked scratch files, not part of the build. Leave them unless explicitly asked.
- The README's folder tree and route list are outdated; trust `package.json`, `vite.config.js`, and `src/`.
