# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.

## Viewport-First Learning

- Prefer one lesson stage per useful viewport whenever legibility and depth are preserved.
- Scroll is an intentional exception for long explanations, cases, large tables, guided screenshots, mind maps, reviews, and exams.
- Never shrink typography or compress spacing aggressively just to avoid scroll.
- On desktop, keep stage progress and previous/continue navigation stable while only the central learning area scrolls when necessary.
- On small or short screens, allow natural document scroll and keep navigation accessible.
- Changing stages must reset the stage reading position to the top.

## Titanium Lesson Player V2

- A lesson stage is a pedagogical unit; a frame is a screen-sized presentation unit inside that stage.
- Use semantic pagination: split content at meaningful boundaries (concept, example, comparison, decision, practice), never at arbitrary pixel or word counts.
- Prefer one frame per useful viewport. If a frame genuinely needs more space, allow internal scroll instead of shrinking typography.
- Long structured fields are automatically chunked into frames; interactive actions remain on their own final frame whenever possible.
- Aula 00 and standard lessons must use the same viewport-first player behavior.
- Every frame/stage change must reset both window and lesson viewport to the top after render and move focus to the new frame root.
- On desktop, progress and previous/next navigation stay stable while only the central frame may scroll.
- On short/mobile screens, natural document scroll is allowed.
- Development mode should warn when a frame substantially exceeds the useful viewport so content can be re-authored before publication.

## Titanium Teaching Standard

- The player never decides pedagogical breaks by height when an authored semantic frame exists.
- A frame is a complete learning unit, not an arbitrary fragment of text.
- Never create a new frame only to display one impact sentence.
- Prefer a complete screen with one central idea, 2-4 short paragraphs, an example/visual when useful, and a clear conclusion or action.
- Small scroll is acceptable when it preserves meaning; semantic coherence is more important than zero scroll.
- Use three teaching modes intentionally: EXPLAIN (`APRENDA`), FOCUS (`PONTO-CHAVE`), and APPLY (`AGORA É COM VOCÊ`).
- Every lesson should normally contain: opening relevance, objectives, teaching, example, application, common errors, synthesis, mind map, official materials, and assessment when applicable.
- Authoring pipeline: pedagogical objective -> professor script -> examples/cases -> interactions -> mind map -> assessment -> materials -> interface.
- The Aula 00 V2 is the reference lesson for future Titanium lesson authoring.
