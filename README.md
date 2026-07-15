# Maison Delacroix — Premium Law Firm Website

An award-worthy, editorial, single-page website for a high-end business law firm.
Built as a production-grade Next.js application with a bespoke luxury design system.

> _"L'exigence du droit, l'élégance du conseil."_

---

## Tech stack

| Concern        | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js 15 (App Router) · React 19                |
| Language       | TypeScript (strict, `noUncheckedIndexedAccess`)   |
| Styling        | Tailwind CSS 3.4 + custom design tokens           |
| Animation      | Framer Motion                                     |
| UI primitives  | shadcn/ui pattern (Radix + CVA), hand-authored    |
| Forms          | React Hook Form + Zod (shared client/server schema) |
| Icons          | Lucide                                            |
| Fonts          | Playfair Display + Cormorant Garamond + Inter (`next/font`) |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Design system

- **Palette** — deep navy (`navy.950`), warm cream, and a restrained gold accent, with a dark-emerald testimonial band. Defined in `tailwind.config.ts` + CSS variables in `globals.css`.
- **Typography** — serif display headings paired with a modern sans body; italic gold accents carry the editorial voice.
- **Motion** — scroll reveals, staggered groups, parallax hero, count-up statistics, animated timeline, testimonial slider. All gated behind `prefers-reduced-motion`.
- **Premium details** — glass navbar with scroll-spy pill, scroll progress bar, desktop-only dual-ring custom cursor, pointer-following glow, image zoom/reveal, intro curtain, animated underlines.

## Architecture

```
src/
├── app/                 # App Router: layout, page, api, SEO routes, OG/icon
├── components/
│   ├── ui/              # Primitives (button, accordion, input, textarea, label)
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Page sections (hero, practice-areas, about, …)
│   └── shared/          # Reusable building blocks (Reveal, Container, cards, cursor…)
├── hooks/               # use-media-query, use-active-section
├── lib/                 # site config, content data, validations, utils
└── types/               # shared domain types
```

Server Components by default; Client Components only where interaction/motion
requires it. Content lives in `src/lib/data.ts` and brand/contact details in
`src/lib/site.ts` — edit those to rebrand without touching component code.

## Accessibility & SEO

- Semantic landmarks, skip-link, keyboard-operable menu/accordion/slider, ARIA labels, visible focus states, WCAG-AA contrast, full reduced-motion support.
- Metadata, Open Graph, Twitter cards, canonical URL, `sitemap.xml`, `robots.txt`, web manifest, and JSON-LD (`LegalService` + `FAQPage`).

## Going live

- The contact endpoint (`src/app/api/contact/route.ts`) validates with the shared
  Zod schema and returns success. Plug in an email/CRM provider (Resend, Postmark, …)
  where marked `TODO` to deliver messages.
- Replace the Unsplash placeholder photography with the firm's own assets and
  update `site.url` / contact details in `src/lib/site.ts`.
