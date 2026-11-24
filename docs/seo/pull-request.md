# SEO remediation: one URL per intent, answer-first guides, verified facts, consent-gated tags

Branch `seo/remediation` from `main` (`a1b17a5`). Draft: not merged, not deployed to production.
Matt approved the legal wording as written and answered the open questions on 24 November 2026 (recorded
in `docs/seo/content-changes-for-review.md` and `docs/seo/needs-owner-confirmation.md`).

## What changed and why

### One URL per search intent (Phase 1)

- `/phone-mast-rent/` and `/phone-mast-lease/` are now the only pages optimised for "phone mast rent" and
  "phone mast lease".
- Every URL has one primary query in `src/seo/routes.ts` and `src/seo/blog-seo.ts`. A test fails if two URLs
  share one, and `docs/seo/intent-map.md` is generated from that data.
- The nine near-identical operator pages are merged into `/phone-mast-operators/`. Each old URL 308s to its
  section, and only stable company facts were kept.
- The rent reviews page now answers service intent (what we do, how, fees) and links to the rent guide.
- The homepage title and H1 carry the brand and the proposition, not the two head terms.
- Three blog posts that duplicated guide sections now 308 to the guide. The Section 26 post is narrowed
  to case law.

### The two money pages (Phase 2)

- Both guides are rewritten answer-first: a two-to-three sentence answer, key facts, plain-English sections
  in the order landlords ask, then a labelled legal section.
- Rent figures come from one data file (`src/content/legal.ts`), and the lease guide now quotes them too.
- Every case is named once and links to its judgment on the National Archives; each link was opened and
  checked.
- The figures table now attributes £3,850 (Lands Tribunal for Scotland) and £5,000 (*London & Quadrant*)
  correctly.
- Original titles and H1s, no year. FAQs that repeated sections are removed. Three CTAs per guide.
- Title, H1, slug and opening answer are locked by `tests/guide-freeze.test.ts`.
- Fact-check at Matt's request: every statement the old site made without a source was checked against the
  judgment or the company's own publication. *Vache Farm*'s redevelopment break and the *Firoka* decision are
  back, correctly attributed; *On Tower v BT* is final (the Supreme Court refused permission on 27 November
  2025); *Potting Shed* now states what the Court of Appeal decided; *Marks & Spencer* has its Tribunal
  reference and a link; the operators hub has current CTIL ownership and site numbers and Airwave's owner,
  each with its source. The "1,000 cases" figure had no source and stays off (`content-changes-for-review.md`
  section 8).

### Sitewide ballast (Phase 3)

- Removed the sticky call bar, the floating WhatsApp button and the scroll or exit-intent handbook popup
  (Matt: leave it off).
- The header is server-rendered with one CTA.
- Service pages name Matt and show a review date. Blog cards show author and date.

### Trust (Phase 4)

- Every fact (phone, email, registration, claims) comes from `src/content/company.ts`, and a test fails on
  copies anywhere else, including office addresses.
- Claims Matt confirmed are shown: over 30 years' experience in the phone mast industry (his career),
  10,000+ deals, Andrew Chinn MRICS, 4.8 out of 5 on Google from 12 reviews (as the listing shows; text with a
  link, no review markup), "Verified client" on testimonials, client types (individual landowners to
  supermarket chains and local authorities) and Mark Dernes's experience.
- Matt's profile has his career since 2000 and his universities, taken from his LinkedIn at his request, with
  his own line on starting out on the operators' side.
- Claims he did not confirm stay off: "since 1999", "first firm in the UK", "most significant ruling".
  The Compton Beauchamp case is described in his chosen wording, with the citation linked.
- One fee sentence (his wording) and one service-area sentence (the whole UK) are used everywhere.
- No offices: the office addresses and the London, Bristol and Oswestry pages are gone, and their URLs 308
  to `/contact/`. The only address left is the registered office, as the legal disclosure line. The
  privacy policy had named the London address as the registered office; it now matches Companies House.
- The Google Ads click ID is stored only after advertising consent (PECR).

### Technical SEO (Phase 5)

- Redirects are a tested data table (`src/seo/redirects.ts`) served by `src/proxy.ts`. Every rule, with or
  without a trailing slash, is one 308. WordPress internals answer 410.
- Metadata comes from one builder: absolute titles of 60 characters or fewer, descriptions of 155 or fewer,
  a www canonical with a trailing slash, and `og:url` equal to the canonical.
- One JSON-LD graph per page from pure builders on every page, including lease renewals, FAQ, handbook and
  team: Organization (no PostalAddress), WebSite, BreadcrumbList, Article, Person, ProfilePage, Service,
  Book, and FAQPage only where FAQs are visible.
- The sitemap lists only canonical, indexable pages, with hand-set review dates.
- The `.htaccess` for the legacy domain is generated from the same table (see `offsite-checklist.md`).

### Performance (Phase 6)

- Google tags load only after consent.
- The header, footer, FAQ and blog cards are server components; cards and the hero use classes instead of
  inline styles; two variable fonts, only the body font preloaded; the hero image has `fetchPriority="high"`.
- Unused dependencies removed. Lighthouse CI configs for mobile and desktop.

## How it was verified

- `pnpm test`: 32 unit tests (redirects, routes and intent uniqueness, title and description rules, guide
  freeze, company facts scan including addresses, Matt's Compton wording against the case record).
- `pnpm check:site` against a production build: 79 sitemap URLs, 81 internal links and 138 redirect rules.
  All pass: 200s, one H1, heading order, unique titles and descriptions, self canonicals, `og:url`, one
  BreadcrumbList, no links to redirects.
- `pnpm lint`, `tsc --noEmit` and `pnpm build`: clean.
- Accessibility: Lighthouse on all 79 sitemap URLs plus the three policy pages: 100 on every page. The sweep
  found two failures outside the measured templates (links in running text without an underline on service
  pages, and lime text on white on the team page); both are fixed.
- schema.org validator: 0 errors and 0 warnings on the rent guide, homepage, a service page, a blog post and
  Matt's profile (before the last structured-data changes; the new pages use the same builders).
- Lighthouse 12.6.1 locally, PSI presets (`docs/seo/performance.md`):
  - Desktop Performance 100 on all 10 templates.
  - Accessibility, Best Practices and SEO 100 everywhere.
  - Mobile Performance 90–96 (live site, same machine: 72–91).

## Not done here

- **PageSpeed Insights acceptance (mobile 100) is not shown.** The Vercel preview is behind Vercel
  Authentication. Adriano chose a Protection Bypass for Automation secret: once it exists,
  `LHCI_BASE_URL=<preview> VERCEL_AUTOMATION_BYPASS_SECRET=... pnpm lhci:mobile` measures the real deployment
  (the secret is read from the environment, never committed). If mobile is still below 100, the remaining
  cost is the React and Next.js runtime (see `performance.md`).
- legislation.gov.uk links in `LEGISLATION` stay hidden until a person opens them (the site refuses
  automated checks).
- Off-site: `phonemastcompany.co.uk` `.htaccess`, old directory listings and Search Console steps are in
  `docs/seo/offsite-checklist.md`. Matt chose to keep the London address on the Google listing.
- Still open: Matt's roles before 2000 (evidence for "over 30 years"), and Adriano opening the
  legislation.gov.uk links by hand (`needs-owner-confirmation.md`).
- Matt should read `content-changes-for-review.md` section 8 (the fact-check corrections) before the merge.

https://claude.ai/code/session_017RAqMEsVtzthTV3aov9v13
