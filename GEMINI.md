# Project Overview
This is a personal portfolio website for Bishal Deb Roy, a Junior Software Engineer. The site is built with modern web technologies, focusing on accessibility, optimization, and a unique, interactive aesthetic inspired by *Attack on Titan* (AoT).

# Technologies
- **Framework:** Next.js (16.2.2)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via @tailwindcss/postcss)
- **Animations:** Framer Motion
- **Icons:** React Icons
- **State Management:** React Context (used for ThemeProvider)

# Development Commands
- `pnpm dev`: Start the development server.
- `pnpm build`: Build the project for production.
- `pnpm start`: Start the production server.
- `pnpm lint`: Run ESLint to check code quality.

# Development Conventions
- **Structure:** Follows the Next.js App Router pattern (`app/` directory).
- **Components:** Functional components are located in the `components/` directory.
- **Styling:** Global styles are defined in `app/globals.css`. Component styling relies on Tailwind CSS.
- **Animations:** Extensive use of `framer-motion` for UI transitions and interactive elements (e.g., CodeRain, GlitchText).
- **Theme:** A `ThemeProvider` is used to manage site theming.
