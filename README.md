# Maan Events — Cinematic Event Infrastructure Website

> **Where Everything Begins.**
> India's premier end-to-end event infrastructure company. Government functions,
> corporate launches, music festivals — everything in-house, nothing outsourced.

A production-grade, cinematic marketing website built with a luxury feel and
enterprise-grade tooling.

---

## Tech Stack

| Layer        | Tech                                    |
| ------------ | --------------------------------------- |
| Framework    | **Next.js 14** (App Router, SSR/SSG)    |
| Language     | **TypeScript** — strict mode            |
| Styling      | **Tailwind CSS** (custom design tokens) |
| Animation    | **Framer Motion** (scroll-linked)       |
| CMS          | **Sanity** (headless, embedded Studio)  |
| Typography   | Playfair Display + Inter (next/font)    |
| Deployment   | Vercel-ready                            |

---

## Features

- **Cinematic hero** — video background, parallax, staggered headline reveal, animated stat counters with glassmorphism cards overlapping the next section.
- **Custom cursor** — saffron ring + white dot with difference-blend, lag-interpolated, disables on touch.
- **10 fully built sections** — Hero, About, Services, Infrastructure (3×3 grid with radial saffron glow + noise), Portfolio (masonry gallery with hover reveal), Clients (infinite CSS marquee), Testimonials, Why Maan (faded 01/02/03 background numerals), Contact (animated form), Footer.
- **Scroll-triggered animations** — every section uses Framer Motion `whileInView` with staggered children.
- **Sanity CMS integration** — edit content live at `/studio` with a scoped Studio, safe fallbacks so the site renders beautifully before any content is entered.
- **Fully responsive** — mobile-first, tested breakpoints at 600 / 768 / 1024 / 1440.
- **Accessibility** — semantic HTML5, ARIA labels, visible focus rings, `prefers-reduced-motion` support.
- **Performance** — next/font for zero-CLS typography, parallel data fetching, incremental revalidation, image optimization ready.

---

## Getting Started

### 1. Install

```bash
npm install
```

### 2. Configure Sanity (optional)

The site ships with rich fallback content, so it runs out of the box. To enable the CMS:

1. Create a free Sanity project at <https://www.sanity.io/manage>.
2. Copy `.env.local.example` → `.env.local` and fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Visit `/studio` in dev to start creating content.

### 3. Run dev

```bash
npm run dev
```

Then open **<http://localhost:3000>**.
Studio: **<http://localhost:3000/studio>**

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, cursor
│   ├── page.tsx                # Homepage (parallel Sanity fetch + render)
│   ├── globals.css             # Tailwind layers + design tokens + utilities
│   ├── not-found.tsx
│   └── studio/[[...tool]]/     # Embedded Sanity Studio at /studio
├── components/
│   ├── layout/                 # Nav, Footer, Logo, CustomCursor, SmoothScroll
│   ├── sections/               # Hero, About, Services, Infrastructure, Portfolio, Clients, Why, Contact
│   └── ui/                     # Button, Reveal, Counter, Placeholder
├── lib/
│   ├── utils.ts                # cn(), SITE config, whatsappUrl()
│   ├── motion.ts               # Framer Motion variants + easings
│   └── content.ts              # Fallback / demo content
├── sanity/
│   ├── env.ts                  # Env var resolution
│   ├── client.ts               # Safe Sanity client w/ fallback
│   ├── queries.ts              # GROQ queries
│   ├── structure.ts            # Studio desk structure
│   └── schemas/                # siteSettings, hero, service, infrastructure, project, testimonial, client
├── types/index.ts              # Shared TS types
├── tailwind.config.ts          # Brand palette + keyframes + fonts
├── sanity.config.ts            # Studio config
├── next.config.mjs
└── tsconfig.json
```

---

## Brand System

| Token         | Value     | Purpose                         |
| ------------- | --------- | ------------------------------- |
| `saffron`     | `#E8730A` | Primary accent                  |
| `saffron-soft`| `#FF8B2A` | Hover / highlight               |
| `crimson`     | `#C0111F` | Secondary accent (red)          |
| `gold`        | `#C9A84C` | Eyebrow labels, quote marks     |
| `ink`         | `#0A0A0A` | Primary surface                 |
| `ink-100`     | `#181818` | Card surface                    |
| `bone`        | `#F5F0E8` | Primary text                    |
| `muted`       | `#888`    | Secondary text                  |

Typography: **Playfair Display** (display) + **Inter** (body), via `next/font`.

---

## Content Model (Sanity)

- `siteSettings` — global site metadata, contact info, socials (singleton)
- `hero` — hero eyebrow, titles, subtitle, CTAs, video, stats (singleton)
- `service` — event category cards
- `infrastructure` — 3×3 grid items
- `project` — portfolio entries with aspect + category
- `testimonial` — featured quotes
- `client` — client logo strip

All are pre-ordered by a numeric `order` field where relevant.

---

## Scripts

| Script           | Description                |
| ---------------- | -------------------------- |
| `npm run dev`    | Start dev server           |
| `npm run build`  | Production build           |
| `npm run start`  | Serve production build     |
| `npm run lint`   | ESLint (next/core-web-vitals) |
| `npm run typecheck` | TypeScript check        |

---

## Credits

Designed & engineered by **Henosis Digital** for Maan Events, Hyderabad.
