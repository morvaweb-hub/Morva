# MORVA — Luxury Digital Studio

A production-grade, bilingual (EN/AR with RTL) marketing & studio site built with Next.js 15, TypeScript, Tailwind, Framer Motion, react-three-fiber, Lenis, and next-intl.

## Quick start

```bash
cd morva
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/en`. Switch to Arabic from the nav (`EN · عربي`).

## Stack

- **Next.js 15 App Router** — RSC, route groups, static params for case studies
- **TypeScript**, strict mode
- **Tailwind CSS** — custom dark + gold design tokens (`tailwind.config.ts`)
- **next-intl** — EN/AR locales with RTL via `dir` on the wrapper
- **Framer Motion** — page-level transitions, headline reveals, scroll-linked parallax
- **react-three-fiber + three.js** — WebGL gold orb in the hero with a custom GLSL shader
- **Lenis** — buttery smooth scroll, respects `prefers-reduced-motion`

## Architecture

```
src/
  app/
    layout.tsx                         # html/body shell + font variables
    [locale]/
      layout.tsx                       # intl provider, dir, Nav/Footer/Scroll/Noise/Cursor
      page.tsx                         # Home
      services/                        # full services page
      portfolio/                       # filterable grid
      case-studies/                    # list + [slug] detail
      about/                           # story, vision, mission, values, team
      ai-solutions/                    # AI offer page
      blog/                            # editorial index
      careers/                         # culture + open positions
      contact/                         # form + studio info
  components/
    layout/   (Nav, Footer, SmoothScroll, NoiseOverlay, CursorGlow, LanguageSwitcher)
    ui/       (MagneticButton, Reveal, AnimatedText, SectionLabel, Marquee)
    home/     (Hero + HeroCanvas, Intro, ServicesOverview, FeaturedWork, WhyMorva, Process, Testimonials, FAQ, ContactCTA, ClientMarquee)
    sections/ (PageHero, PortfolioGrid, ContactForm)
  i18n/       (routing, request)
  messages/   (en.json, ar.json — full copy for every page)
  lib/        (fonts, projects)
  middleware.ts
```

## Design system

- **Palette** — `ink` (deep blacks `#050505 → #2a2a2a`) and `gold` (`#fbf2dc → #7a561f`), ivory `#f5efe1`
- **Typography** — Fraunces (display serif), Inter (body sans), JetBrains Mono (labels), Tajawal (Arabic)
- **Motion** — 0.9–1.2s reveal curves on `[0.22, 1, 0.36, 1]`, marquee, WebGL displaced sphere, magnetic buttons
- **Atmosphere** — SVG grain overlay (mix-blend overlay), gold radial auras, hairline borders

## Performance

- Hero WebGL canvas is **client-only + code-split** (`dynamic(..., { ssr: false })`) so it doesn't ship for the SSR HTML
- Fonts are subset + `display: swap` via `next/font/google`
- All scroll motion is GPU-accelerated transform/opacity, and Lenis is gated by `prefers-reduced-motion`
- Images use `next/image` with AVIF/WebP

## Bilingual (EN + AR / RTL)

- Routes are `[/en, /ar]`; middleware enforces locale-prefixed URLs
- The `[locale]/layout` sets `dir="rtl"` for Arabic — all logical Tailwind utilities (`ms-/me-`, `start-/end-`) and `rtl:` variants are used where directionality matters
- Both languages have full, hand-written copy in `src/messages/`

## Extending

- **Add a project** → edit `src/lib/projects.ts` and a case-study route is generated automatically.
- **New page** → drop a new folder under `src/app/[locale]/` and import `PageHero`.
- **Theme** → tweak tokens in `tailwind.config.ts` and `globals.css`.
- **CMS** → swap `projects.ts` / `POSTS` arrays for Sanity/Contentful/Payload fetches in the page server components — no client changes needed.

## License

© MORVA Studio
