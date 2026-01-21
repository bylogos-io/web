# AGENTS.md — LogOS Web (Root)

Once you read this file, proceed to follow the instructions in Reglas-IA/(Perfil.md).

This document is the **project-wide** operational and development guide for future agents working on LogOS Web.

It defines the **way of working** (philosophy), the non-negotiable guardrails, and where to find authoritative implementation details.

## Philosophy (how we work)

### Goal: modular updates
The system must be prepared for **modular updates**.

If you want to add something new, you should be able to:

- add widgets / components / sections
- add new pages or routes
- add UI themes or variants

…without refactoring working code.

### Design principles
- **Separation of concerns**
  - UI components should be separate from business logic / API calls.
  - Data fetching should use dedicated hooks or services.
- **Backwards compatibility by default**
  - Component interfaces should remain stable.
  - New props should be optional or additive.
- **Production safety over “works in dev”**
  - Prefer explicit type definitions and linting.
  - Avoid direct DOM manipulation; use React patterns.
- **Single source of truth for design**
  - Follow the established design system (Tailwind 4, Radix UI).
  - Use centralized theme tokens.
- **Configuration is always parameterized**
  - Environment variables (`NEXT_PUBLIC_*`) must be used for configuration.

### Operational guardrails
- **Do not run `git` commands** (unless explicitly instructed).
- **Do not run `rm` commands**.
- Prefer safe, reversible changes.
- Always code in English.

## Repository map (top-level)

- `src/app/`
  - Next.js App Router (pages, layouts, API routes)
- `src/components/`
  - React components (UI library, complex layouts)
- `src/hooks/`
  - Custom React hooks
- `src/lib/`
  - Utilities, API clients, and shared logic
- `public/`
  - Static assets (images, icons)
- Documentation: https://github.com/bylogos-io/docs/tree/main/web

## Architecture invariants

### Next.js App Router (React 19)
- Use Server Components by default.
- Use `"use client"` only when necessary for interactivity or hooks.

### Styles: Tailwind CSS 4
- Use utility classes for styling.
- Follow the project's color palette (Foreground, Primary, Muted, etc.).

### Types and contracts
- Frontend types must be strictly defined in TypeScript.
- Match backend API structures where applicable.

## Development workflows

### Running the project
From the root:

```bash
pnpm install
pnpm dev
```

### Dependency managers
- JavaScript/TypeScript: **pnpm** is mandatory.

## Testing expectations
- Perform visual regression checks if UI tool is available.
- Ensure no build errors with `pnpm build`.
- Check for linting issues with `pnpm lint`.

## Docs expectations
- Update local README files in `src/` subdirectories if they exist.
- Maintain consistent naming conventions for components and hooks.

---

### Service runbook: Web (Next.js)

#### Directory map (authoritative entry points)
- `src/app/layout.tsx`
  - Root layout, theme providers, global CSS.
- `src/app/page.tsx`
  - Main landing page.
- `src/lib/utils.ts`
  - Class merging (`cn`) and basic utils.

#### Environment
The project reads `.env` variables.
Relevant variables:
- `RESEND_API_KEY`: For newsletter Integration.

#### Where to add things
- New pages: `src/app/[route]/page.tsx`
- New components: `src/components/[name].tsx`
- Generic UI elements: `src/components/ui/[name].tsx`
- Logic/Utils: `src/lib/`

#### Guardrails (Web)
- Do not use inline styles if a Tailwind class is available.
- Do not break the responsive layout (ensure mobile compatibility).
- Avoid heavy third-party libraries for simple tasks.
