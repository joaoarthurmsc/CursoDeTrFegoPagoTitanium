# Titanium

Private educational platform for the Curso de Tráfego Pago Titanium.

## Product

Titanium is a progressive learning environment focused on:

- Google Ads
- Paid acquisition
- Performance
- Measurement
- Diagnosis
- Business economics
- Strategy

The application is currently intended for two students.

It is not a SaaS product and should not be redesigned as one.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- localStorage persistence

There is currently:

- no backend
- no authentication
- no paid API
- no AI API

Do not introduce these unless explicitly requested.

## Architecture

Primary directories:

- `src/app` — application bootstrap and routing
- `src/components` — reusable UI and learning components
- `src/pages` — route-level pages
- `src/data` — course and lesson content
- `src/storage` — learning persistence
- `src/types` — shared TypeScript contracts

## Core architectural rule

Course content must be separated from presentation.

Future lessons should primarily be represented as data consumed by the Lesson Journey Engine.

Do not create a new React page for every lesson.

Preferred model:

Lesson data
+
Lesson Journey Engine
=
Rendered lesson

## Learning model

A lesson progresses through pedagogical stages such as:

- context
- learn
- think
- decide
- visual
- practice
- audit
- mindmap
- review
- exam

Students cannot skip future stages during the first journey.

Previously unlocked stages may be revisited.

After passing a lesson, the full journey becomes available for review.

## Mastery

Normal lessons require a minimum exam score of:

9.0 / 10

Finishing lesson content does not complete the lesson.

Content completed + exam below 9.0 = Review Required.

A lesson is completed only after demonstrated mastery.

## Persistence

Use `learningRepository` as the persistence boundary.

UI components should not access `localStorage` directly.

Preserve compatibility with existing stored progress unless a migration is deliberately implemented.

## Visual direction

Preserve the approved Titanium visual identity:

- premium dark
- black / graphite
- white / silver
- restrained gold / bronze
- cinematic
- calm
- editorial
- high readability

Avoid:

- neon
- excessive glassmorphism
- generic SaaS dashboards
- excessive cards
- decorative AI-looking imagery
- unnecessary visual redesigns

## Navigation

There is no sidebar.

Navigation should remain contextual and minimal.

## Development

Install:

```bash
pnpm install