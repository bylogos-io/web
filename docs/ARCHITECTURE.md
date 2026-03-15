# Architecture Overview

## Project Structure
- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/services`: Business logic and external API integrations.
- `src/types`: TypeScript type definitions and interfaces.
- `src/data`: Static data and configuration.
- `src/theme`: MUI theme configuration.

## Technologies
- **Framework**: Next.js (App Router)
- **UI Library**: Material UI (MUI)
- **Styling**: CSS Modules / Emotion
- **Animations**: Framer Motion
- **Package Manager**: pnpm (configured in `package.json`)
- **Runtime**: Bun (preferred for local development)

## Development Workflow
1. Use `bun install` for local dependency management.
2. Use `pnpm install` specifically to update `pnpm-lock.yaml` for CI compatibility.
3. Run `npm run dev` or `bun run dev` for local development.
