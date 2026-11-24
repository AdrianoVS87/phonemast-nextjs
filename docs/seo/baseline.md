# Baseline, live site, 24 Nov 2026

## Method

- **What was measured:** the live site, https://www.phonemastadvice.co.uk, before any change on this branch (production `main` at `a1b17a5`).
- **Tool:** Lighthouse 12.6.1 CLI (the version inside `@lhci/cli` 0.15.1), headless Chrome, with the same presets PageSpeed Insights uses:
  - mobile: the default emulated Moto G Power, simulated slow 4G and 4× CPU slowdown;
  - desktop: `--preset=desktop`.
- **Runs:** 5 per template per form factor, 100 in total, none failed. Tables show the median, with the range of Performance scores in brackets.
- **Why not PageSpeed Insights:** the PSI API refused every unauthenticated request (HTTP 429), and a PSI key needs a Google Cloud project the owner would have to create. The audit's own PSI figure for the rent guide (mobile Performance 99) is far better than the local mobile run (72). Local Lighthouse measures the page on this machine's CPU, so its mobile numbers are harsher than PSI's.
- **How to compare:** before and after are measured on the same machine with the same settings (`docs/seo/performance.md`), so the comparison holds. PSI acceptance needs a public preview URL of the branch; see `performance.md`.

## Mobile

| Template | URL | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI |
|---|---|---|---|---|---|---|---|---|---|---|
| Homepage | `/` | 82 (56–90) | 92 | 96 | 100 | 1.59 s | 3.36 s | 409 ms | 0 | 2.37 s |
| Rent guide | `/phone-mast-rent/` | 72 (71–86) | 96 | 96 | 100 | 1.00 s | 3.28 s | 685 ms | 0 | 2.49 s |
| Lease guide | `/phone-mast-lease/` | 86 (58–90) | 96 | 96 | 100 | 1.31 s | 3.36 s | 276 ms | 0 | 2.74 s |
| Service | `/phone-mast-services/rent-reviews/` | 72 (56–90) | 96 | 96 | 100 | 1.14 s | 3.47 s | 805 ms | 0 | 2.58 s |
| Operator | `/vodafone-phone-mast-lease/` | 74 (68–91) | 96 | 96 | 100 | 1.25 s | 3.35 s | 702 ms | 0 | 2.64 s |
| Blog index | `/blog/` | 84 (77–93) | 96 | 96 | 100 | 1.57 s | 3.66 s | 280 ms | 0 | 2.85 s |
| Blog post | `/blog/section-26-notices/` | 91 (84–92) | 96 | 96 | 100 | 1.12 s | 3.21 s | 316 ms | 0 | 2.34 s |
| Contact | `/contact/` | 88 (59–90) | 96 | 96 | 100 | 1.27 s | 3.36 s | 158 ms | 0 | 3.87 s |
| Free rent estimate | `/free-rent-estimate/` | 89 (81–91) | 96 | 96 | **69** | 1.23 s | 3.36 s | 187 ms | 0 | 2.46 s |
| Matt's profile | `/team/matt-restall/` | 90 (73–92) | 96 | 96 | 100 | 1.00 s | 3.28 s | 195 ms | 0 | 2.42 s |

## Desktop

| Template | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI |
|---|---|---|---|---|---|---|---|---|---|
| Homepage | 100 (99–100) | 92 | 96 | 100 | 0.38 s | 0.78 s | 0 ms | 0 | 0.73 s |
| Rent guide | 100 (99–100) | 96 | 96 | 100 | 0.36 s | 0.78 s | 3 ms | 0 | 0.61 s |
| Lease guide | 100 (89–100) | 96 | 96 | 100 | 0.37 s | 0.79 s | 14 ms | 0 | 0.65 s |
| Service | 100 (100–100) | 96 | 96 | 100 | 0.33 s | 0.78 s | 0 ms | 0 | 0.53 s |
| Operator | 100 (92–100) | 96 | 96 | 100 | 0.36 s | 0.78 s | 10 ms | 0 | 0.63 s |
| Blog index | 100 (99–100) | 96 | 96 | 100 | 0.40 s | 0.63 s | 0 ms | 0 | 0.63 s |
| Blog post | 100 (98–100) | 96 | 96 | 100 | 0.34 s | 0.78 s | 5 ms | 0 | 0.62 s |
| Contact | 97 (82–100) | 96 | 100 | 100 | 0.56 s | 0.74 s | 137 ms | 0 | 0.87 s |
| Free rent estimate | 99 (96–100) | 96 | 100 | **69** | 0.55 s | 0.83 s | 69 ms | 0 | 0.96 s |
| Matt's profile | 100 (99–100) | 96 | 96 | 100 | 0.31 s | 0.77 s | 0 ms | 0 | 0.43 s |

## Audits failing on every run

| Audit | Where | What it means here |
|---|---|---|
| `total-blocking-time`, `interactive`, `max-potential-fid` | mobile | 400–800 ms of main-thread work: hydration of 670 KB of JavaScript per page (React, the router, the header, consent banner, sticky bar, popup and form code) plus GTM and gtag |
| `largest-contentful-paint` | mobile, desktop | 3.2–3.7 s on mobile on every template, so the cause is shared, not the page |
| `legacy-javascript` | all | Polyfills and transpiled syntax for old browsers |
| `unused-javascript` | 83 of 100 runs | Client code loaded on pages that never run it |
| `render-blocking-insight`, `network-dependency-tree-insight` | all | One render-blocking stylesheet, five preloaded fonts, third-party chains |
| `dom-size-insight` | all | Large DOM and RSC payload (HTML of 87–534 KB) |
| `errors-in-console` | 80 of 100 runs | Best Practices capped at 96 |
| `color-contrast`, `label-content-name-mismatch` | all | Accessibility capped at 92–96 |
| `is-crawlable` | free rent estimate | The page was `noindex`, so SEO scored 69 |

## Reading

Desktop is already at or near 100 on Performance. Mobile is the work: total blocking time and the shared
3.3 s LCP. Accessibility (contrast, accessible names) and Best Practices (console errors) fail everywhere,
so the fixes belong in shared components, not page by page.
