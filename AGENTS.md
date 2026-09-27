# Titanium — Product & Engineering Guide

## Product

Titanium is a private premium learning environment for two students, focused on Google Ads, acquisition, performance and strategy. It is not a commercial SaaS and should not look or behave like one.

The product objective is mastery: students should progress from fundamentals toward diagnosis, strategy and acquisition architecture (N0–N6).

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- Local persistence through `learningRepository`
- No backend, auth service, paid AI API or external grading dependency unless explicitly introduced later

Core commands:

```bash
pnpm dev
pnpm typecheck
pnpm build
```

## Architecture

- `src/data/` — curriculum and authored lesson data
- `src/types/` — learning and progress contracts
- `src/components/lesson/` — lesson players and lesson-level UI
- `src/components/lesson-engine/` — reusable learning interactions
- `src/components/exam/` — exams and error-map UI
- `src/storage/` — profile-scoped persistence
- `src/pages/` — route-level screens
- `public/lessons/` — lesson images and authentic interface captures
- `public/materials/` — official downloadable/review materials

Lessons are data. The player renders the authored pedagogy; the player must not invent pedagogical sequencing.

## Profiles & persistence

- Arthur and Rafael are separate local student profiles.
- Academic progress must remain isolated per profile.
- `/desempenho` belongs inside the user menu.
- Aula 00 must be completed before Module 01 becomes available.

## Visual direction

- Premium, dark, cinematic, editorial learning environment.
- Black/graphite base, white/silver type, restrained gold/bronze accents.
- Avoid neon, generic SaaS dashboards, excessive glassmorphism and decorative gradients.
- No sidebar.
- Typography and whitespace must remain comfortable; never shrink text merely to force content into one viewport.

## Viewport-first learning

- Prefer one complete learning unit per useful viewport when meaning and legibility are preserved.
- Small scroll is acceptable when it protects semantic coherence.
- Long explanations, cases, tables, screenshots and exams may scroll deliberately.
- On desktop, keep lesson progress and previous/next navigation stable while the central learning area scrolls only when needed.
- Every page/frame change resets window and lesson viewport to the top after render and moves focus to the new frame root.
- On short/mobile screens, natural document scroll is allowed.

## Teaching modes

Use three modes intentionally:

- EXPLAIN → `APRENDA`
- FOCUS → `PONTO-CHAVE`
- APPLY → `AGORA É COM VOCÊ`

A frame is a complete learning unit, not a sentence fragment. Never create a new page only to display an impact phrase.

Typical lesson narrative:

1. Why this matters
2. Learning objective
3. Explanation
4. Visual/example
5. Closed interaction
6. Application/diagnosis
7. Common errors
8. Synthesis
9. Mind map
10. Assessment

## Closed-question standard

- Do not author open-ended questions in lessons, diagnostics, reviews, labs or exams.
- Every authored question uses exactly four alternatives with stable ids `a`, `b`, `c`, `d`.
- Every alternative should have meaningful feedback.
- Closed questions may test recall, interpretation, calculation, diagnosis, prioritization, strategy and error recognition.
- Avoid easy questions whose answer can be guessed from wording alone.
- Ordinary completion must not depend on AI or manual correction.
- Performance history should preserve selected alternatives, correctness/recommendation, feedback, attempts, scores and active study time.

## Mastery

- Lesson and module mastery threshold: 9.0/10 when an exam applies.
- Completion is never based on consumption alone.
- Error maps should point the student back to the concept or stage that needs reconstruction.
- Initial Diagnostic has 20 A–D questions, 2 per competency, 0.5 point each, with no pass/fail gate.

## Visual-first standard

Use images whenever they reduce abstraction.

- Google Ads operational instruction should use authentic, current screenshots of the real interface.
- Screenshots may use zoom, highlights, hotspots and “Faça comigo” guidance.
- Never use an AI-generated mock interface while presenting it as a real Google Ads screenshot.
- Generated diagrams and explanatory images are allowed when clearly presented as explanatory visuals.
- Every image must have useful alt text and may include caption/source context.
- Detailed images should support enlargement.

## Official lesson materials

Each finished lesson has two mandatory core assets:

1. **Guia + Notas da Aula** — one combined PDF for study and revision.
2. **Mapa Mental** — a real image asset (PNG/JPG/WebP/SVG), not a PDF.

Do not create a separate Titanium Notes PDF.

Additional assets such as checklists, calculators, cases, templates or cheat sheets are optional and should exist only when useful.

## Authoring pipeline

Do not code a final lesson before the teaching design exists.

```text
pedagogical objective
→ professor script
→ examples/cases
→ authentic screenshots / explanatory images
→ closed A-D interactions
→ mind map
→ assessment
→ combined Guide + Notes PDF
→ interface implementation
```

Aula 00 V3 plus Titanium Lesson Model V4 is the current reference for future Titanium lesson authoring.


## Contextual glossary

- No unexplained acronym or specialized term should appear before being taught or linked to the Titanium Glossary.
- Central glossary source: `src/data/glossary.ts`.
- Use inline glossary rendering instead of duplicating tooltip definitions inside lesson content.
- Glossary terms open only by explicit activation: click/tap or keyboard activation (Enter/Space). Hover and focus alone must never open the glossary. `Esc` or clicking outside closes the explanation.
- Explanations may include original term, Portuguese translation, definition, formula, example and caution.
- Apply glossary rendering to teaching copy, headings, scenarios, question prompts, tables and feedback where it does not create nested interactive controls.
- Do not put an interactive glossary trigger inside an answer button; the prompt or surrounding explanation should carry the definition instead.
- Keep glossary density intentional. Prioritize acronyms, English platform terms and concepts that can block comprehension.

## Code quality

- Keep lesson content in data files instead of embedding copy in UI components.
- Preserve reusable engine components.
- Use accessible buttons, focus management, labels and alt text.
- Keep TypeScript strict and run `pnpm typecheck` plus `pnpm build` before commit.
- Do not reintroduce Figma Make runtime dependencies.

## Diagnostic quality

- The Aula 00 diagnostic introduction appears once before the first question, not above every question.
- Diagnostic distractors must be plausible, similarly detailed, and designed around realistic misconceptions.
- In the 20-question initial diagnostic, correct answers should be balanced across A, B, C and D.
- Avoid making the correct answer visually obvious because it is substantially longer or more qualified than the distractors.

## Visual evidence standard

- Operational Google Ads teaching should use authentic, current interface screenshots whenever the interface materially helps understanding.
- Interface screenshots must include a source label and capture date and remain zoomable.
- Generated explanatory visuals are welcome for concepts, diagrams and mind maps, but must never impersonate a real Google Ads screenshot.
- Prefer a sequence of focused screenshots over one overloaded screenshot when teaching a multi-step workflow.
## Progress control

- `/controle` is the official Progress Control Room and is accessible from the user avatar menu.
- Progress mutations always affect only the active student profile.
- "Open from start" is non-destructive and must preserve scores, answers, completion and time.
- Lesson/module/exam resets archive the prior snapshot in `resetHistory` before clearing current progress.
- Resetting the Aula 00 diagnostic re-locks Module 01 until a new diagnostic is submitted.
- Resetting Aula 00 re-locks Module 01 but does not silently delete Module 01 learning data.
- Full profile reset is the only action that deletes the reset archive and requires typed-name confirmation.
- Destructive progress actions must never be triggered without explicit user confirmation.

## Zero Assumption learning

- The course runs from beginner to specialist. Never write as if the student already knows professional vocabulary that Titanium has not taught.
- Teach the phenomenon before the professional label whenever possible.
- The progression is: phenomenon -> name -> meaning -> example -> application -> relation -> diagnosis -> decision.
- A glossary definition never counts as formal teaching.
- Do not combine concepts in a diagnostic scenario before each required concept has been introduced and practiced.
- Aula 00 teaches the learning system and must not use CTR, CPC, CPA, CVR, ROAS or similar metrics as instructional prerequisites.
- The Initial Diagnostic is a baseline measurement exception; advanced terms may appear there, but the diagnostic must not reveal glossary definitions inside the questions.
- Aula 01 introduces only traffic foundations. Professional metrics begin later according to `docs/Titanium_Concept_Dependency_Map_V1.md`.
- Before shipping lesson content, run `node scripts/check-concept-order.mjs`.

## Module 01 foundation sequence

1. O que realmente é tráfego pago
2. Como funciona a publicidade digital
3. Da impressão ao resultado
4. As métricas fundamentais
5. Como as métricas se conectam
6. Titanium Lab 01
