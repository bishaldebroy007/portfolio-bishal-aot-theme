# Portfolio - Next.js Project

## Project Overview

This is a **personal portfolio website** built with **Next.js 16** (App Router) and bootstrapped using `create-next-app`. The project uses **React 19**, **TypeScript**, and **Tailwind CSS v4** for styling. It is a private project (not published to a registry) and is currently in its initial scaffolded state (`v0.1.0`), ready for customization into a full portfolio.

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.2.2 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19.2.4 |
| Styling | Tailwind CSS v4 |
| Font | Geist Sans + Geist Mono (via `next/font`) |
| Linting | ESLint 9 with `eslint-config-next` |
| Package Manager | pnpm (based on `pnpm-lock.yaml` and `pnpm-workspace.yaml`) |
| CSS Pipeline | PostCSS with `@tailwindcss/postcss` |

### Architecture

- **App Router** structure under `app/` directory
- **File-based routing** — `app/page.tsx` is the root route
- **Layout** defined in `app/layout.tsx` — provides root HTML, fonts, and global CSS
- **Global styles** in `app/globals.css` with Tailwind CSS v4 (`@import "tailwindcss"`)
- **CSS custom properties** for theming with automatic dark mode support via `prefers-color-scheme`
- **Path aliases** configured (`@/*` maps to project root)

### Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout component; loads Geist fonts and global CSS |
| `app/page.tsx` | Home page component (main entry point for content) |
| `app/globals.css` | Global styles, Tailwind import, theme variables, dark mode |
| `next.config.ts` | Next.js configuration (currently default/empty) |
| `tsconfig.json` | TypeScript configuration with strict mode enabled |
| `eslint.config.mjs` | ESLint flat config with Next.js Core Web Vitals and TS rules |
| `postcss.config.mjs` | PostCSS configuration for Tailwind CSS |

## Building and Running

### Development Server

```bash
pnpm dev
```

Opens the app at `http://localhost:3000` with hot reload enabled.

### Production Build

```bash
pnpm build    # Build for production
pnpm start    # Start production server
```

### Linting

```bash
pnpm lint     # Run ESLint
```

## Development Conventions

- **Strict TypeScript** — `strict: true` is enabled in `tsconfig.json`
- **ESLint** — Uses `eslint-config-next` with Core Web Vitals and TypeScript rules
- **Tailwind CSS v4** — Uses the new `@import "tailwindcss"` syntax (not the older `@tailwind` directives)
- **Font optimization** — Uses `next/font/google` for self-hosted Geist fonts with CSS variables
- **Path aliases** — Use `@/` prefix for imports (e.g., `@/components/Button`)
- **Dark mode** — Automatically activated based on system preference via `prefers-color-scheme` media query

## Important Notes

- **Next.js 16** has breaking changes compared to earlier versions. Always consult the docs in `node_modules/next/dist/docs/` before writing code.
- The project uses **pnpm** as the package manager (evidenced by `pnpm-lock.yaml` and `pnpm-workspace.yaml`).
- The `CLAUDE.md` file contains agent-specific rules for Claude AI — similar rules may apply for other AI coding assistants.
