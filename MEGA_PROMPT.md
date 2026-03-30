# MEGA PROMPT — Phone Mast Advice: WordPress to Next.js Migration

## YOUR MISSION
Build a complete Next.js website that replaces phonemastadvice.co.uk (currently WordPress/Divi). The new site must be faster, more professional, SEO-optimised, factually correct, and designed for UK landlords aged 55-70 who own phone mast sites.

**The current WordPress site stays LIVE and UNTOUCHED.** You build the new site on a Vercel preview URL. Only after Matt Restall (the owner) approves 100% do we switch DNS.

---

## PHASE 1: SETUP

### 1.1 Create the project
```bash
cd ~/projects
pnpm create next-app@latest phonemast-nextjs --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd phonemast-nextjs
pnpm add motion @sanity/client @sanity/image-url next-sanity next-sitemap @next/third-parties
pnpm add -D @types/node
```

### 1.2 Create Sanity project
```bash
npx sanity@latest init --create-project "Phone Mast Advice" --dataset production
```
Save the project ID and deploy Sanity Studio embedded at `/studio`.

### 1.3 Create GitHub repo
```bash
git init
git remote add origin git@github.com:AdrianoVS87/phonemast-nextjs.git
git push -u origin main
```

### 1.4 Deploy to Vercel
```bash
vercel --yes
```
The preview URL (phonemast-nextjs.vercel.app) is where Matt reviews. Do NOT connect the real domain yet.

---

## PHASE 2: CONTENT MIGRATION

### 2.1 Fetch ALL content from WordPress REST API
```bash
# Auth: Basic "Matthew Restall:mWmV YVpJ swX9 Su1y qZn7 KsRY"
# Base URL: https://phonemastadvice.co.uk/wp-json/wp/v2/

# All 35 pages:
curl -s -u "Matthew Restall:mWmV YVpJ swX9 Su1y qZn7 KsRY" "https://phonemastadvice.co.uk/wp-json/wp/v2/pages?per_page=100&_fields=id,title,slug,content,parent,meta"

# All 52 posts:
curl -s -u "Matthew Restall:mWmV YVpJ swX9 Su1y qZn7 KsRY" "https://phonemastadvice.co.uk/wp-json/wp/v2/posts?per_page=100&_fields=id,title,slug,content,date,categories,meta"

# All media (images, logo, etc):
curl -s -u "Matthew Restall:mWmV YVpJ swX9 Su1y qZn7 KsRY" "https://phonemastadvice.co.uk/wp-json/wp/v2/media?per_page=100&_fields=id,title,source_url,alt_text,media_details"
```

Download ALL images including the logo. Convert logo to SVG if possible, otherwise use the PNG/WebP.

### 2.2 Strip Divi shortcodes from content
The WordPress pages contain raw Divi shortcodes (`[et_pb_section...]`). Strip ALL Divi markup and extract clean text. The 9 operator LPs, 3 location pages, and 2 new 2026 pages are already clean HTML (no Divi shortcodes).

### 2.3 Migrate blog posts to Sanity
Create Sanity schemas for blog posts with: title, slug, body (Portable Text), publishedAt, category, featuredImage, seoTitle, seoDescription, focusKeyword.

Import all 52 posts into Sanity. Matt will use Sanity Studio to publish future posts.

---

## PHASE 3: ARCHITECTURE

### 3.1 Page routes (App Router)
```
/app
  page.tsx                              -> Homepage (ISR 60s)
  /phone-mast-services
    page.tsx                            -> Services overview (SSG)
    /rent-reviews/page.tsx              -> Rent Reviews (SSG)
    /lease-renewals/page.tsx            -> Lease Renewals (SSG)
    /new-lettings/page.tsx              -> New Lettings (SSG)
    /mast-sales/page.tsx                -> Mast Sales (SSG)
    /removal-and-redevelopment/page.tsx -> Removal & Redevelopment (SSG)
    /electricity-costs-recovery/page.tsx-> Electricity Costs Recovery (SSG)
    /other-services/page.tsx            -> Other Services (SSG)
    /lease-retrievals/page.tsx          -> Lease Retrievals (SSG)
    /phone-mast-rent-2026/page.tsx      -> Phone Mast Rent 2026 (SSG)
    /phone-mast-lease-2026/page.tsx     -> Phone Mast Lease 2026 (SSG)
    /[operator]/page.tsx                -> 9 operator LPs (SSG via generateStaticParams)
  /locations
    /[location]/page.tsx                -> 3 location pages (SSG)
  /blog
    page.tsx                            -> Blog index (ISR)
    /[slug]/page.tsx                    -> Blog posts from Sanity (ISR)
  /about/page.tsx                       -> About Us (SSG)
  /team/page.tsx                        -> Team (SSG)
  /contact/page.tsx                     -> Contact Us (SSG)
  /faq/page.tsx                         -> FAQ (SSG)
  /free-lease-check/page.tsx            -> Lead gen form (SSG)
  /free-rent-estimate/page.tsx          -> Lead gen form (SSG)
  /handbook/page.tsx                    -> Handbook download (SSG)
  /privacy-policy/page.tsx              -> Legal (SSG)
  /disclaimer/page.tsx                  -> Legal (SSG)
  /cookie-policy/page.tsx               -> Legal (SSG)
  /studio/[[...tool]]/page.tsx          -> Sanity Studio (client-only)
```

### 3.2 URL Redirects
CRITICAL: ALL old WordPress URLs must 301 redirect to new URLs. Create a `next.config.ts` redirects array mapping every old slug to the new route. Broken URLs = lost SEO.

---

## PHASE 4: DESIGN SYSTEM

### 4.1 Colors
```typescript
// tailwind.config.ts
const colors = {
  navy: '#1B4F72',        // Primary — Barclays/RICS trust blue
  green: '#a4ca62',       // Accent — CTAs, buttons, highlights
  darkGreen: '#8fb854',   // Green hover state
  offWhite: '#f9f8f5',    // Section backgrounds — warm, not clinical
  text: '#1a1a2e',        // Body text — near-black, WCAG AAA
  border: '#e5e7eb',      // Subtle borders
  white: '#ffffff',       // Content backgrounds
}
```

### 4.2 Typography
```typescript
// Use next/font — zero layout shift, self-hosted
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'

const heading = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['700', '800'] })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })

// Sizes:
// H1: 48px desktop / 32px mobile
// H2: 32px desktop / 24px mobile
// H3: 24px desktop / 20px mobile
// H4: 18px desktop / 16px mobile
// Body: 18px desktop / 16px mobile (NON-NEGOTIABLE — audience is 55-70 years old)
// Line-height: 1.6-1.7
```

### 4.3 Spacing
- Max-width: 1200px
- Rhythm: 24px base unit
- Section padding: 96px top/bottom desktop, 64px mobile
- Card border-radius: 16px
- Button border-radius: 10px (rectangular CTAs), 50px (pill buttons)

### 4.4 Animations (Motion library)
- Cards on scroll: fade-up + slight scale
- Stats numbers: count-up
- Buttons hover: shine sweep + lift 3px + scale 1.03
- Page transitions: crossfade via Next.js View Transitions
- FAQ toggles: smooth expand/collapse
- **RULE: if the user notices the animation, it's too much**

---

## PHASE 5: COMPONENTS

Build these reusable components:

### Layout
- `Header` — sticky, phone number always visible, 5 nav items max, FREE RENT ESTIMATE pill button (hidden on homepage)
- `Footer` — 4 columns: services, legal, offices, contact. Social icons with brand colors.
- `Breadcrumbs` — on all inner pages

### UI
- `Hero` — full-width, background image, headline, one CTA, phone number
- `StatsBar` — "25+ Years | 1,000+ Deals" with count-up animation
- `ServiceCard` — icon, title, description, link. 3-col grid.
- `TestimonialCard` — name, county, quote, rating. With hover lift.
- `TeamMember` — photo, name, title, credentials, bio
- `FAQAccordion` — smooth expand/collapse, green hover border
- `CTASection` — navy background, green button, phone + email + WhatsApp
- `ContactForm` — name, email, phone, message. Server Action sends to info@phonemastadvice.co.uk
- `LeaseCheckForm` — extended form with property address, operator dropdown, rent, enquiry type
- `RentEstimateForm` — similar to lease check
- `OperatorDropdown` — CTIL/Cornerstone merged, On Tower (formerly Arqiva)

### SEO
- `JsonLd` — typed JSON-LD per page (ProfessionalService, FAQPage, Service, LocalBusiness)
- `PageMeta` — generates Next.js Metadata object with title (<60 chars), description (<160 chars), OG image, canonical

---

## PHASE 6: SEO — THIS IS THE #1 PRIORITY

### 6.1 Meta Tags
Every single page MUST have optimised meta tags. This is Matt's absolute top priority.

**13 core keywords to target:**
1. Phone Mast Rent
2. Phone Mast Lease
3. Phone Mast Lease Renewal
4. Vodafone Phone Mast Lease
5. O2 Phone Mast Lease
6. EE Phone Mast Lease
7. 3 Phone Mast Lease
8. Cellnex Phone Mast Lease
9. Arqiva Phone Mast Lease
10. Airwave Phone Mast Lease
11. CTIL Phone Mast Lease
12. Cornerstone Phone Mast Lease
13. Code Lease Renewal

Each keyword must appear in the title, description, and content of its dedicated page.

### 6.2 Schema Markup (JSON-LD)
Every page gets:
- `ProfessionalService` schema (company name, 3 office addresses, phone, services)
- Service pages: `Service` schema
- FAQ page + operator pages: `FAQPage` schema
- Homepage: `WebSite` schema with search action
- Blog posts: `Article` schema with author

### 6.3 Sitemap
Use `next-sitemap` to generate `/sitemap.xml` automatically. Every page, every post. No missing pages.

### 6.4 Performance Targets
- Lighthouse: >95 on every page (performance, accessibility, best practices, SEO)
- LCP: <1.5s
- CLS: 0
- INP: <100ms
- All images via `next/image` (WebP/AVIF auto, lazy load, responsive srcset)
- All fonts via `next/font` (zero CLS)

### 6.5 E-E-A-T Signals
- Author info on every blog post (name, photo, credentials)
- Team page with real photos and qualifications
- Company registration number in footer
- RICS credentials visible
- Testimonials with real names and counties
- Case citations with proper legal references

---

## PHASE 7: FACTUAL ACCURACY — ABSOLUTE REQUIREMENT

### NEVER DO (hard rules, non-negotiable)
- NEVER claim Matt "won" or "fought" the Vache Farm case. Correct: "We instigated and advised on the landmark Compton Beauchamp Estates v CTIL case"
- NEVER list CTIL and Cornerstone as separate entities. Same company. CTIL = legal name, Cornerstone = brand.
- NEVER list Arqiva as a current mobile mast operator. Sold to Cellnex July 2020. Use "On Tower (formerly Arqiva)" for the operating entity.
- NEVER call the court "Upper Land Tribunal". Correct: "Upper Tribunal (Lands Chamber)"
- NEVER use body text smaller than 18px
- NEVER use stock photography
- NEVER duplicate the page title as an H1 or H2 in the page content (Next.js page titles render as H1 automatically)
- NEVER use flashy animations or gradients (audience 55-70 interprets as "not serious")

### Verified Legislation
| Act | Key Detail |
|-----|-----------|
| Telecommunications Act 1984 | Original ECC in Schedule 2 |
| Communications Act 2003 | Created Ofcom. New Code is Schedule 3A |
| Digital Economy Act 2017 | New Code in force 28 December 2017 |
| PSTI Act 2022 | Sections 61-64 commence 7 April 2026 |
| Landlord and Tenant Act 1954 | Applies to pre-Dec 2017 leases |

### Verified Case Law
| Case | Citation |
|------|----------|
| Cornerstone v Compton Beauchamp | [2022] UKSC 18 |
| EE v Islington (valuation) | [2019] UKUT 53 (LC) |
| Dale Park (first renewal) | [2020] UKUT 0348 (LC) |
| Vache Farm (current benchmark) | [2024] UKUT 216 (LC) |
| On Tower v BT (break clauses) | [2025] EWCA Civ 844 |

### Industry Structure
| Entity | Fact |
|--------|------|
| CTIL = Cornerstone | Same entity. ~14,200 macro + ~1,400 micro sites |
| MBNL | EE + Three (NOT O2/Vodafone) |
| On Tower UK Ltd | Formerly Arqiva Services. Under Cellnex |
| Arqiva | Broadcast only since 2020. NOT mobile masts |
| Airwave | Owned by Motorola Solutions. TETRA network |

---

## PHASE 8: FORMS

### Contact Form → Server Action
Sends email to `info@phonemastadvice.co.uk` via Resend API. Fields: name, email, phone, message.

### Free Lease Check Form
Extended: name, email, phone, property address, operator (dropdown), current rent, enquiry type, message.

### Free Rent Estimate Form
Similar: name, email, phone, property address, operator, current rent, message.

### Handbook Download Form
Simple: name, email, phone.

### Operator Dropdown (shared)
```
Vodafone, O2, EE, Three (Hutchison 3G), CTIL / Cornerstone, On Tower (formerly Arqiva), Cellnex, Airwave Solutions, Wireless Infrastructure Group (WIG), Other, Not sure
```

### Anti-spam
Honeypot field + rate limiting (same pattern as current Snippet #20).

---

## PHASE 9: COMPANY DETAILS

- **Company:** The Phone Mast Advice Company Ltd (Reg: 13115582)
- **Phone:** 01691 791543
- **WhatsApp:** 447843352654 (NOT 447782412130 — that's the OLD wrong number)
- **Email:** info@phonemastadvice.co.uk
- **Offices:**
  - London: 167-169 Great Portland Road, 5th Floor, W1W 5PF
  - Bristol: 5 High Street, Westbury on Trym, BS9 3BY
  - Oswestry: Artillery Business Park, SY11 4AD
- **Founder:** Matt Restall

---

## PHASE 10: QA CHECKLIST

Before showing to Matt:
- [ ] Every page loads in <1.5s
- [ ] Lighthouse >95 on all pages
- [ ] All 13 target keywords have optimised meta tags
- [ ] JSON-LD schema renders correctly (test with Google Rich Results Test)
- [ ] All forms submit and email arrives at info@phonemastadvice.co.uk
- [ ] WhatsApp links go to 447843352654
- [ ] Phone links go to 01691 791543
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px
- [ ] WCAG AA contrast on all text
- [ ] No duplicate page titles in content
- [ ] All images use next/image (no raw <img> tags)
- [ ] All fonts use next/font (no external CSS imports)
- [ ] Sitemap generated with ALL pages
- [ ] robots.txt correct
- [ ] 301 redirects for all old WordPress URLs
- [ ] No factual errors (cross-reference against Phase 7)
- [ ] Blog posts render from Sanity
- [ ] Sanity Studio accessible at /studio
- [ ] All court citations are correct
- [ ] All operator names are current (On Tower not Arqiva for mobile)

---

## EXECUTION ORDER

1. Setup (Next.js + Sanity + Vercel + GitHub)
2. Fetch all WP content + media via API
3. Build design system (colors, fonts, components)
4. Build layout (Header, Footer, Breadcrumbs)
5. Build homepage
6. Build service pages (8)
7. Build operator LPs (9)
8. Build location pages (3)
9. Build 2026 pages (rent + lease)
10. Build forms + email
11. Build legal pages
12. Build about, team, contact, FAQ
13. Migrate blog posts to Sanity
14. Build blog index + post template
15. SEO: meta tags, JSON-LD, sitemap, robots.txt
16. Animations and polish
17. QA: Lighthouse, mobile, accessibility, factcheck
18. Matt reviews on preview URL
19. Fix Matt's feedback
20. DNS cutover (only after Matt says GO)

**DO NOT SKIP STEPS. DO NOT START STEP 20 WITHOUT MATT'S EXPLICIT APPROVAL.**

Start now. Report progress after each phase.
