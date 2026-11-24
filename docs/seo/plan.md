# SEO remediation plan

Branch `seo/remediation`, cut from `origin/main` at `a1b17a5` (24 Nov 2026, after the 5 Nov homepage redesign).
Discovery only: nothing in this file changed the site. Each later phase is a separate set of commits.

The branch `feature/phase2-followups` (policies, operator-letter page, tap tracking) is not on `main` and is not
included here. It touches `privacy-policy`, `cookie-policy`, `ConsentBanner` and `Footer`, so whichever branch merges
second will need a rebase.

## 1. How the site is built

| Area | What the repo actually does |
|---|---|
| Framework | Next.js **16.2.1** (Turbopack), React 19.2, TypeScript 5.9 strict, Tailwind CSS 4. `CLAUDE.md` still says 15.3. |
| Router | App Router only (`src/app`). |
| Rendering | Every route is prerendered. Static: all guides, services, operators, locations, contact, forms, profile. ISR (60 s): `/`, `/blog`, `/blog/[slug]`, `/sitemap.xml`. Dynamic: `/api/ads-lead`, `/studio`. |
| Hosting and CDN | Vercel (production branch `main`). DNS at Cloudflare, DNS-only. Apex `phonemastadvice.co.uk` is redirected to `www` by Vercel's domain settings (308). |
| Redirects | `src/middleware.ts` (a 170-entry map, 410 for three spam slugs, pattern catch-alls) and `vercel.json` (`/index.php`, `/wp-content/*`, `/wp-includes/*` to `/`). Next 16 has renamed `middleware` to `proxy` and warns on every build. |
| Metadata | Inline `metadata` objects in each `page.tsx`; a helper in `src/components/PageMeta.tsx` used by a few pages; root defaults in `src/app/layout.tsx`. Titles mix `title.absolute` and the `%s \| Phone Mast Advice` template. |
| Sitemap | `src/app/sitemap.ts` with hand-kept slug lists; `lastmod` read from `src/lib/page-dates.ts`, a generated file last regenerated on 19 Oct 2026. |
| Robots | `src/app/robots.ts` (allows all, blocks `/studio/` and `/api/`). |
| Structured data | Inline `<script type="application/ld+json">` objects in each page, plus `src/components/JsonLd.tsx` and the BreadcrumbList inside `src/components/Breadcrumbs.tsx`. No shared builders, no tests. |
| Fonts | `next/font/google`: Plus Jakarta Sans 700/800 and Inter 400/500/600, all preloaded (5 files), plus stray `preconnect` tags to Google Fonts origins that are never used. |
| GTM and analytics | `src/app/layout.tsx` loads GTM `GTM-5TJVB9W9` (`afterInteractive`) and gtag.js for GA4 `G-LJ69QZHDKD` (`lazyOnload`) on every page **before consent**, relying on Consent Mode v2 defaults set to `denied`. |
| Consent | `src/components/consent/ConsentBanner.tsx` (client component, server-rendered visible, hidden before paint for returning visitors) and `ConsentDefault.tsx` (inline Consent Mode defaults). |
| Content | Hard-coded JSX with inline style objects in each `page.tsx`. Operators: one 770-line data object in `src/app/[operator]/page.tsx`. Locations: data object in `src/app/locations/[location]/page.tsx`. Blog: 56 posts in Sanity (project `fn50r1sg`, public dataset), with local overrides, additions and removals in `src/lib/local-posts.ts`; 57 live posts. Testimonials: Sanity, with a hard-coded fallback on the homepage. `src/content/blog/*.mdx` (56 files) is no longer read by anything. |
| Global UI on every page | Header (with CTA), Footer, `StickyCtaBar` (fixed bar on phones, after 400 px of scroll), `WhatsAppButton` (fixed round button), `HandbookPopupGate` (exit-intent and 45 % scroll popup), `ConsentBanner`, `ClickIdCapture`. |
| Tests | No test runner. Four behavioural checks in `scripts/*.check.mjs`, run with `node --experimental-strip-types`. No CI. |

## 2. Audit findings, checked

Legend: **Confirmed**, **Partly** (true but different in detail), **Wrong**.

### Phase 1, one URL per intent

| Finding | Verdict | Evidence | Fix |
|---|---|---|---|
| "phone mast lease" targeted by the guide, nine operator pages, the homepage H1 and the mast sales page | **Confirmed** | Live titles and H1s: every operator page is "{Operator} Phone Mast Lease ..."; homepage H1 "Phone Mast Lease & Rent Advice for UK Landlords"; mast sales H1 "Sell Your Phone Mast Lease: ..." | Intent map; operator titles and H1s to operator intent (Phase 3 hub); homepage title and H1 to brand and proposition; mast sales to sale intent |
| "phone mast rent" targeted by the guide (about 12 uses) and `/phone-mast-services/rent-reviews/` (about 12) | **Confirmed** | Main-content counts: guide 16, rent reviews 15 | Rent reviews retargeted to the service (what we do, process, fees); explanations removed and linked to the guide |
| Competitor has one page per topic | **Confirmed** | phonemastpeople.com sitemap: 27 URLs, one per service, 8 blog posts | n/a |
| 57 blog posts overlap the guides | **Confirmed (count)** | Build lists 57 `/blog/[slug]` paths. Overlap audit is in `intent-map.md` | Merge and 308, or narrow, post by post |

### Phase 2, the two money pages

| Finding | Verdict | Evidence | Fix |
|---|---|---|---|
| Lease guide about 2,500 words, treatise-like, no rent figure | **Confirmed** | 3,174 words in `<main>`; nine Code paragraphs, seven cases; no £ figure for rent | Answer-first rewrite; summary rent figures from the shared data file |
| Lease title 76 characters and close to the competitor's "Phone Mast Lease: What Every UK Landlord Needs to Know" (23 Feb 2026) | **Confirmed** | Ours: "Phone Mast Lease: What UK Landlords Need to Know in 2026 \| Phone Mast Advice" (76) | New original title, H1 and outline |
| H2s in the same order as the competitor's | **Partly** | The competitor runs: what it is, how long, how much rent, what it covers, renewals, can you refuse, mistakes. Ours shares "what it is" first and "mistakes" last, with "how long" in between, but has seven other sections in between | New outline that does not follow theirs |
| FAQ repeats the sections above | **Confirmed** | All six lease FAQs and five of six rent FAQs restate a section | Keep only questions not answered above |
| No outbound links to sources | **Confirmed** | Zero external links in either guide's main content | legislation.gov.uk for Acts; official judgment sources for cases, each verified |
| Rent title 82 characters, description about 180 | **Partly** | 80 and 179 characters | Title 60 or fewer, description 155 or fewer |
| Rent figures only in the second sentence of the summary | **Confirmed** | The "In short" box opens with the valuation basis | Figures in the first sentence |
| `#extras` anchor looks broken | **Partly** | The target `id="extras"` exists, but `scroll-margin-top` is only set inside `.blog-content`, so the sticky header covers the heading after the jump | Global scroll offset for in-page anchors |
| Same case named differently | **Confirmed** | Compton Beauchamp appears as "Cornerstone Telecommunications Infrastructure Ltd v Compton Beauchamp Estates Ltd", "Cornerstone v Compton Beauchamp", "Compton Beauchamp Estates v CTIL" and "*Compton Beauchamp*"; Vache Farm as "EE Ltd & Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd (Vache Farm)" and "Vache Farm [2024] UKUT 216 (LC)" | One case data file, one display name per case |
| "Free Rent Estimate" about 5 times | **Confirmed** | Hero, body link, final card, CTA band, plus the header button and sticky bar | Three on the page: above the fold, mid-page, end |
| Year in title and H1, `lastmod` 2026-09-15 everywhere | **Confirmed** | 69 of 91 sitemap URLs carry a 15 Sep 2026 `lastmod`; the homepage changed on 5 Nov but still says 15 Sep because `page-dates.ts` is regenerated by hand | Reviewed dates live in content data and change only with the substance |

### Phase 3, ballast

| Finding | Verdict | Evidence | Fix |
|---|---|---|---|
| Operator pages 1,200-1,400 words, mostly generic | **Confirmed** | 1,162-1,264 words; ten FAQs each, mostly the same answers with the name swapped | Merge into one operators hub, 308 each page to its section (default (b): the repo holds no operator-specific evidence beyond entity names) |
| About 25 CTAs per operator page | **Partly** | 10-13 CTA mentions in `<main>`; about 20 once the header, sticky bar, WhatsApp button and footer are added | Sitewide CTA budget |
| Ten FAQ answers end with the same pitch | **Confirmed** | e.g. "specialist advice is essential", "contact us immediately" | Removed with the hub |
| Titles up to about 90 characters | **Confirmed** | Vodafone 87, WIG 82, CTIL 81 | Title rules and tests |
| Service pages "Reviewed by the Phone Mast Advice team" with no person | **Confirmed** | Six service pages plus `/phone-mast-solicitors/` | Named reviewer component (owner to confirm who reviews which page) |
| Blog index shows no author per post | **Confirmed** | `BlogCard` renders date and category only | Author and date on every card |
| Three location pages | **Confirmed** | London, Bristol, Oswestry; 346-361 words each, the same template | Kept; doubts listed for the owner (are they staffed offices?) |

### Phase 4, trust

| Finding | Verdict | Evidence | Fix |
|---|---|---|---|
| "30+ years", "since 1999", "10,000+ deals", "RICS Registered Surveyors", "3 UK offices" | **Confirmed** | `about-us`, `team`, `handbook`, `StatsBar`, `TrustSignals`, blog author box, root `description` | Company facts module; unconfirmed claims behind flags and listed for the owner. Companies House (checked 24 Nov 2026): The Phone Mast Advice Company Ltd, 13115582, incorporated 6 January 2021, registered office in Bristol; The Phone Mast Company Ltd, 06941156, incorporated 23 June 2009. Neither date supports "since 1999" or "30+ years" as a company claim, so the basis (presumably Matt's own career) has to be confirmed and worded as such |
| Matt's profile lists no qualification or membership | **Confirmed** | `/team/matt-restall/` | Profile restructured; only verified credentials shown |
| "Rated 5/5 on Google" with no count or link | **Confirmed** | `TrustSignals.tsx` | Removed until a count and profile URL are confirmed |
| Testimonial says "no-win, no-fee" while the FAQ says "performance basis where possible" | **Partly** | "No-win, no-fee basis for most instructions" is in the **operator template** (all nine pages), not a testimonial; the homepage FAQ says "performance basis where possible" | One approved fee sentence |
| Unsourced superlatives | **Confirmed** | "the first firm in the UK to have successfully fought back ..." (homepage), "the most significant UK telecoms ruling since the Telecommunications Act 1984" (operator template), "the famous court case" (a testimonial, which stays: it is the client's words) | Removed from templates until sourced |
| "UK-wide" and "nationwide" versus "across England and Wales" | **Confirmed** | 46 "UK/nationwide" mentions, 28 "England and Wales" | One service-area statement |

### Phase 5, technical

| Finding | Verdict | Evidence | Fix |
|---|---|---|---|
| `phonemastcompany.co.uk` answers 302 to the homepage for every path | **Partly** | It answers **301**, not 302, but every path still lands on the homepage, through **four hops**: `http://www.phonemastcompany.co.uk/contact/` → `https://www.phonemastcompany.co.uk/contact/` → `http://phonemastadvice.co.uk/` → `https://phonemastadvice.co.uk/` → `https://www.phonemastadvice.co.uk/`. The domain is served by Apache on 185.151.30.171 (shared hosting), not by Vercel | Outside the repo: exact `.htaccess` in `offsite-checklist.md` |
| Old WordPress URLs and non-www to www single-hop | **Confirmed working** | `/what-is-a-phone-mast-lease/`, `/contact-us/`, `/about-the-phone-mast-advice-company/` and `https://phonemastadvice.co.uk/*` each answer one 308. `http://phonemastadvice.co.uk/` takes two hops (HTTP to HTTPS on the apex first), which is Vercel's fixed order | Table and tests to keep it that way; HSTS preload noted for the HTTP case |
| Share links point at the non-www homepage | **Partly** | No share links exist in the code. Rent, lease, about, services and profile pages have **no `og:url`**, so shares fall back to whatever the sharer guesses | `og:url` = canonical on every page |
| Breadcrumb item pointing at the homepage | **Fixed already** | Commit `0e7e0aa` (2 Nov). Live pages checked: the last crumb has no `item`. But blog, contact and free rent estimate emit **two** BreadcrumbLists | One breadcrumb builder per page |
| Homepage hero image has empty alt | **To verify in Phase 5** | | |
| Accessibility 96 | **To measure** | Baseline in `baseline.md` | |
| Organization with sameAs and contactPoint, WebSite, Article, Person, Service | **Partly** | Person and Article exist; no Organization `sameAs` or `contactPoint`; the homepage emits three LocalBusiness nodes and a WebSite SearchAction pointing at `/blog?q=`, which the blog does not support | Pure builders, one graph per page |

### Phase 6, performance

| Finding | Verdict | Evidence |
|---|---|---|
| Unused JavaScript (about 375 KiB), legacy JS, long tasks | **Confirmed** | Every page ships about 670 KB of JavaScript (200 KB gzipped) in 11-12 chunks, for pages that are almost entirely static text |
| DOM size | **Confirmed** | HTML weighs 87-534 KB per page (blog index 534 KB); the RSC payload repeats the whole page |
| Third parties | **Confirmed** | GTM and gtag load on every page view before any consent |
| Render-blocking requests | **Confirmed** | One render-blocking stylesheet (23 KB) plus five preloaded font files |

## 3. Order of work

1. **SEO infrastructure first** (small, testable, used by every later phase): `src/content/company.ts` (facts), `src/content/cases.ts` and `src/content/rent-figures.ts` (shared legal data), `src/seo/` (metadata builder, JSON-LD builders, breadcrumb builder, routes and intent registry, redirects table, review dates), Node test runner (`node --test`, matching the existing `scripts/*.check.mjs` convention, so no new test dependency).
2. **Phase 1**: intent map, rent reviews retarget, homepage title and H1, internal links, blog overlap decisions.
3. **Phase 2**: both guides rewritten answer-first from the shared data, sources linked and verified, freeze tests.
4. **Phase 3**: operators hub and 308s, CTA budget, named reviewer, blog author and date.
5. **Phase 4**: facts module wired everywhere, flags for unconfirmed claims, fee and service-area sentences, profile.
6. **Phase 5**: proxy rename, redirect table and tests, canonicals and `og:url`, title and heading tests, sitemap, JSON-LD graph, alt text, contrast, off-site checklist.
7. **Phase 6**: consent-gated tags, client-component diet, fonts, CSS, Lighthouse CI with mobile and desktop configs, before and after in `performance.md`.

Legal wording: any sentence that states law, a Tribunal figure or a case outcome and is rewritten is listed in
`content-changes-for-review.md`. Anything that cannot be verified goes to `needs-owner-confirmation.md` and stays off the site.
