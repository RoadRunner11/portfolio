# Portfolio — Fodilu Akorede

## Project Overview
Personal developer portfolio site. Single-page, dark-theme, deployed on Vercel.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (mono) — loaded via `next/font/google`

## Architecture
- All content/data lives in `lib/data.ts` — edit there for content changes
- Each page section is a standalone client component in `components/`
- Single page app composed in `app/page.tsx`
- Design system tokens (colors, fonts, animations) defined in `tailwind.config.ts`

## Key Design Decisions
- **Accent color**: Electric sky blue (`#0EA5E9`) — no purple gradients
- **Background**: Deep navy-black (`#0A0F1C`)
- **Dark mode only** — no light mode toggle
- **Glass-morphism cards** (`glass-card` class) for project cards and UI surfaces
- **Mouse-tracking glow** effect on hero section

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

## File Structure
```
app/layout.tsx        — Root layout, fonts, SEO metadata
app/page.tsx          — Main page composing all sections
app/globals.css       — Tailwind directives, custom utilities
components/*.tsx      — Section components (Hero, About, Projects, Experience, TechStack, Contact, Navigation)
lib/data.ts           — All portfolio content (personal info, projects, experience, tech stack)
tailwind.config.ts    — Theme customization
```

## Conventions
- Components are client components (`"use client"`) when they use Framer Motion or interactivity
- CSS utility classes: `section-container`, `section-heading`, `section-subheading`, `glass-card`, `tech-pill` (defined in globals.css)
- Animations use Framer Motion `whileInView` for scroll-triggered reveals
