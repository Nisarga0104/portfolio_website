# Nisarg Kamble — Responsible AI Portfolio

A responsive portfolio for Nisarg Kamble, positioned at the intersection of AI ethics, governance, safety, security, strategy and responsible adoption.

## Purpose

The site is designed as an editorial, recruiter-friendly portfolio for demonstrating research, case studies, practical frameworks and technology/business experience without presenting Nisarg as a traditional software developer.

## Technology

- React
- Vite
- TypeScript with TSX
- Tailwind CSS
- Lucide React
- CSS animations and Intersection Observer reveals

## Features

- Responsive one-page portfolio layout
- Editorial monochrome visual system
- Mobile navigation with keyboard-friendly controls
- Reduced-motion support
- Centralized project, framework, experience and learning content
- Semantic sections with accessible labels and focus states
- SEO title and description metadata

## Structure

- `src/components` — reusable page sections and interaction primitives
- `src/data/content.ts` — centralized portfolio content
- `src/assets/images` — portfolio imagery
- `src/App.tsx` — page composition
- `src/index.css` — design system, layout and responsive styling

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Customize

Update the arrays in `src/data/content.ts` to change project cards, frameworks, experience and learning items. Replace placeholder links in that file and in the contact section with verified LinkedIn, GitHub, email, resume and case study URLs before publishing.

The portrait is referenced from `src/assets/images/Portfolio_image.png`.

## Deploy

Build the project and deploy the generated `dist` directory to any static hosting provider that supports Vite output.
