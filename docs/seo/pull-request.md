# SEO remediation: one URL per intent, answer-first guides, verified facts, consent-gated tags

Branch `seo/remediation` from `main` (`a1b17a5`). Not deployed. **Do not merge before Matt signs off
the legal wording in `docs/seo/content-changes-for-review.md`.**

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

### Sitewide ballast (Phase 3)

- Removed the sticky call bar, the floating WhatsApp button and the scroll or exit-intent handbook popup.
- The header is server-rendered with one CTA.
- Service pages name Matt and show a review date.
- Blog cards show author and date.
- Location pages are kept, with their anonymous testimonials removed.

### Trust (Phase 4)

- Every fact (phone, email, addresses, company number) comes from `src/content/company.ts`, and a test fails
  on copies anywhere else.
- Unconfirmed claims (30+ years, since 1999, 10,000+ deals, RICS, 5/5 rating, three offices, superlatives)
  are hidden behind flags until the owner confirms them.
- One fee sentence and one service-area sentence are used everywhere.

### Technical SEO (Phase 5)

- Redirects are a tested data table (`src/seo/redirects.ts`) served by `src/proxy.ts`. Every rule, with or
  without a trailing slash, is one 308. WordPress internals answer 410.
- Metadata comes from one builder: absolute titles of 60 characters or fewer, descriptions of 155 or fewer,
  a www canonical with a trailing slash, and `og:url` equal to the canonical.
- One JSON-LD graph per page from pure builders: Organization, WebSite, BreadcrumbList, Article, Person,
  ProfilePage, Service, and FAQPage only where FAQs are visible.
- The sitemap lists only canonical, indexable pages, with hand-set review dates instead of a stale generated
  file.
- The `.htaccess` for the legacy domain is generated from the same table (see `offsite-checklist.md`).

### Performance (Phase 6)

- Google tags load only after consent.
- The header, footer, FAQ and blog cards are server components.
- Two variable fonts instead of five static files.
- No inline style blocks mid-body.
- Unused dependencies removed.
- Lighthouse CI configs for mobile and desktop.

Numbers are in `docs/seo/performance.md`.

## How it was verified

- `pnpm test`: 30 unit tests (redirects, routes and intent uniqueness, title and description rules, guide
  freeze, company facts scan).
- `pnpm check:site` against a production build: 82 sitemap URLs, 81 internal links and 134 redirect rules.
  All pass: 200s, one H1, heading order, unique titles and descriptions, self canonicals, `og:url`, one
  BreadcrumbList, no links to redirects.
- `pnpm lint`, `tsc --noEmit` and `pnpm build`: clean.
- schema.org validator: 0 errors and 0 warnings on the rent guide, homepage, a service page, a blog post and
  Matt's profile.
- Lighthouse 12.6.1: 5 runs per template per form factor on the live site (before). The branch's own five-run
  measurement was stopped by low memory after 7 runs, so the after-numbers are single runs and the
  Performance target is **not yet demonstrated** (`docs/seo/performance.md`). Accessibility, Best Practices
  and SEO measured 100 on every template that was run.

## Needs Matt's sign-off before merging

- `docs/seo/content-changes-for-review.md`: every rewritten legal sentence, with corrections quoted from the
  judgments.
- `docs/seo/needs-owner-confirmation.md`: claims and facts kept off the site until confirmed, including the
  fee wording, the service area and the WhatsApp number.

## Not done here

- `phonemastcompany.co.uk` is on separate Apache hosting. The rules are in `docs/seo/offsite-checklist.md`.
- legislation.gov.uk links are in the data but stay hidden until a person opens them, because the site
  refuses automated checks.
- PageSpeed Insights can only test a public URL, so the PSI acceptance runs need a Vercel preview of this
  branch (`docs/seo/performance.md`).
