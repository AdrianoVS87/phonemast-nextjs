# Phone Mast Advice — Next.js Migration

## Project
WordPress/Divi site → Next.js 15.3 + Sanity v3 + Vercel.
UK phone mast lease advisory company.
Client: Matthew Restall, The Phone Mast Advice Company Ltd.
Target: UK landlords aged 55-70.

## Stack
- Next.js 15.3.x (App Router, Server Components, Partial Prerendering)
- React 19.x, TypeScript 5.8
- Tailwind CSS 4.x (Oxide engine)
- Motion 12.x (formerly Framer Motion)
- Sanity Studio v3 (embedded at /studio)
- Vercel hosting, Cloudflare DNS-only
- pnpm as package manager

## Commands
- `pnpm dev` — dev server (port 3000)
- `pnpm build` — production build
- `pnpm lint` — ESLint + Prettier
- `npx sanity dev` — Sanity Studio local
- `vercel --prod` — deploy to production

## Design System
- Primary: #042b4d (deep navy; header, footer #04223c, dark bands #082f54) and #0669af (brand blue, links/hover)
- Hero: tonal blue gradient #063f74 → #07518f → #197ac0 (the only gradient allowed; from the 5 Nov 2026 design package)
- Accent: #b6f414 (lime — CTAs, buttons, icons on navy; hover #c6ff2c; text on lime #09243e). Never lime text on white: use #3d8a17
- Background: #f3f7fb (cool off-white sections), stats band #eff5fa→#e8f0f8, #ffffff (content)
- Rollback of the Nov 2026 redesign: git tag pre-redesign-2026-11-05; see backup_2026-09-15/RESTORE.md
- Text: #1a1a2e (near-black)
- Headings: Plus Jakarta Sans, 700-800 weight, 32-48px desktop
- Body: Inter, 400 weight, 18px minimum (55+ audience, non-negotiable)
- Line-height: 1.6-1.7
- Max-width: 1200px, 24px spacing rhythm
- Border-radius: 12-16px cards, 50px pills, 10px buttons
- Animations: subtle scroll reveals, count-up stats, shine sweep buttons — if the user notices the animation, it's too much

## Architecture
```
/app
  page.tsx — homepage (ISR 60s)
  /services/[slug]/page.tsx — 8 service pages (SSG)
  /operators/[slug]/page.tsx — 9 operator landing pages (SSG)
  /locations/[slug]/page.tsx — 3 location pages (SSG)
  /blog/[slug]/page.tsx — blog posts (ISR, from Sanity)
  /contact/page.tsx
  /free-lease-check/page.tsx
  /free-rent-estimate/page.tsx
  /studio/[[...tool]]/page.tsx — Sanity Studio
/components — reusable, typed
/lib/sanity.ts — Sanity client + GROQ queries
/content — static page data (migrated from WP)
```

## IMPORTANT — NEVER DO
- NEVER claim Matt "won" or "fought" the Vache Farm case — say "instigated and advised on Compton Beauchamp Estates v CTIL"
- NEVER list CTIL and Cornerstone as separate entities — same company (CTIL = legal name, Cornerstone = brand)
- NEVER list Arqiva as a current mobile mast operator — sold to Cellnex 2020, now "On Tower (formerly Arqiva)"
- NEVER call the court "Upper Land Tribunal" — correct: "Upper Tribunal (Lands Chamber)"
- NEVER use stock photography — real UK countryside and team photos only
- NEVER use body text smaller than 18px — target audience is 55-70 years old
- NEVER use flashy animations or gradients — audience interprets as "not serious"

## SEO Requirements
- Every page: unique <title>, <meta description>, OG image, canonical URL
- JSON-LD schema per page: ProfessionalService (all), FAQPage (FAQ + operators), Service (services)
- Target keywords: "phone mast rent", "phone mast lease", "phone mast advice"
- generateStaticParams for all static routes
- next-sitemap for XML sitemap
- Lighthouse >95 on every page

## Quality Gates
- `pnpm build` must succeed with zero errors
- `pnpm lint` must pass
- All images via next/image (WebP/AVIF auto, lazy load)
- All fonts via next/font (zero CLS)
- Mobile-first responsive (test at 375px, 768px, 1024px, 1440px)
- WCAG AA contrast minimum on all text
- Every interactive element: min 44x44px touch target

## Company Details
- The Phone Mast Advice Company Ltd (Reg: 13115582)
- Phone: 01691 791543
- WhatsApp: 447782412130
- Email: info@phonemastadvice.co.uk
- Offices: London (W1W 5PF), Bristol (BS9 3BY), Oswestry (SY11 4AD)
- Founder: Matt Restall
