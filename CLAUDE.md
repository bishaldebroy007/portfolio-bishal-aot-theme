# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # Start dev server at localhost:3000
pnpm build      # Production build
pnpm start      # Serve production build
pnpm lint       # ESLint (flat config, eslint-config-next with Core Web Vitals + TypeScript)
```

No test framework is configured.

## Architecture

Single-page portfolio website with an **Attack on Titan** visual theme. Next.js 16 App Router with one route (`app/page.tsx`) that composes eight section components in order:

`Navigation → Hero → About → Skills → Experience → Projects → Contact → Footer`

All section components live in `components/` as default exports. Every component is a client component (`"use client"`) because they use Framer Motion animations and React state.

### Theming

Custom color palette defined as CSS custom properties in `app/globals.css`, exposed to Tailwind via `@theme inline` (Tailwind CSS v4 syntax). Key color tokens:

- `aot-green` / `aot-green-dim` — primary accent (teal/cyan)
- `aot-red` / `aot-red-dark` — secondary accent
- `aot-cream` — text color
- `aot-dark-wall` / `aot-steel` / `aot-cape` / `aot-smoke` — background/surface tones

Utility classes in `globals.css`: `.gradient-text`, `.gradient-text-red`, `.glass-card`, `.wall-texture`, plus custom animation keyframes (`animate-float`, `animate-glow-pulse`, `animate-slash`, etc.).

### Animation Pattern

Components use a consistent pattern: `useInView` for scroll-triggered entrance animations, `useEffect` to hydrate random particle positions (avoiding SSR mismatch), and Framer Motion's `motion.*` components for hover/tap interactions and staggered reveals.

### Key Conventions

- **Imports**: Use `@/` path alias (maps to project root)
- **Package manager**: pnpm
- **Tailwind v4**: Uses `@import "tailwindcss"` (not `@tailwind` directives) and `@theme inline` for custom tokens
- **Icons**: `react-icons` library
- **No data fetching**: All content is hardcoded in component files (projects, certificates, skills, experience data)
