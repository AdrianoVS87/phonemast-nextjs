# Performance

## Status

| Target | Result | Shown? |
|---|---|---|
| Desktop Performance 100, every template | **100 on all 10 templates**, every run (local Lighthouse, PSI desktop preset) | Locally, yes. PSI not run (see below). |
| Mobile Performance 100, every template | **90–96** median (local Lighthouse, PSI mobile preset) | **No.** The remaining gap is one metric, LCP, explained below. |
| Accessibility, Best Practices, SEO 100 | **100 on all 10 templates**, mobile and desktop, every run | Locally, yes. |
| Mobile budgets: TBT ≤ 50 ms, SI ≤ 1.5 s, LCP ≤ 1.2 s, FCP ≤ 1.0 s, CLS 0 | TBT 52–130 ms, SI 1.07–1.09 s, LCP 2.69–3.31 s, FCP 1.07–1.09 s, CLS 0 | SI and CLS met; FCP and TBT close; LCP not met. |

**PageSpeed Insights could not be run.** Its API refuses requests without an API key (HTTP 429), and the
Vercel preview of this branch is behind Vercel Authentication, so Google's servers cannot load it. Running
PSI needs one of: a PSI API key, a Vercel "Protection Bypass for Automation" secret, or deployment protection
switched off for previews. Each is a project security or credentials decision, so none was made here.

## Method

Lighthouse 12.6.1 (inside `@lhci/cli` 0.15.1), headless Chrome, the PSI mobile and desktop presets
(simulated throttling), against a local production build (`pnpm build && pnpm start -p 3100`) on the same
Windows machine.

- **After** (24 Nov 2026, final build `68e5d7c`): 3 mobile runs and 2 desktop runs per template, medians.
- **Before**: the live site measured the same way, 5 runs per template (`baseline.md`).
- An earlier five-run measurement of the branch was stopped by low memory after 7 runs. The final runs
  were done in short foreground batches with nothing else running.

To repeat with the CI assertions (5 runs, medians and per-run floor):

```bash
pnpm build
pnpm lhci:mobile     # 10 templates x 5 runs, reports in .lighthouseci/mobile
pnpm lhci:desktop
LHCI_BASE_URL=<reachable preview URL> pnpm lhci:mobile   # against a deployment instead of localhost
```

## Mobile: live site → this branch (medians)

| Template | Perf (range after) | A11y | BP | SEO | LCP | TBT | Speed Index |
|---|---|---|---|---|---|---|---|
| Homepage | 82 → **90** (89–91) | 92 → 100 | 96 → 100 | 100 → 100 | 3.36 → 3.31 s | 409 → 130 ms | 2.37 → 1.09 s |
| Rent guide | 72 → **94** (94–95) | 96 → 100 | 96 → 100 | 100 → 100 | 3.28 → 3.03 s | 685 → 66 ms | 2.49 → 1.07 s |
| Lease guide | 86 → **94** (93–94) | 96 → 100 | 96 → 100 | 100 → 100 | 3.36 → 3.01 s | 276 → 59 ms | 2.74 → 1.07 s |
| Service (rent reviews) | 72 → **94** (94–94) | 96 → 100 | 96 → 100 | 100 → 100 | 3.47 → 3.00 s | 805 → 54 ms | 2.58 → 1.08 s |
| Operator page → operators hub | 74 → **94** (94–94) | 96 → 100 | 96 → 100 | 100 → 100 | 3.35 → 3.02 s | 702 → 58 ms | 2.64 → 1.07 s |
| Blog index | 84 → **96** (95–96) | 96 → 100 | 96 → 100 | 100 → 100 | 3.66 → 2.77 s | 280 → 66 ms | 2.85 → 1.07 s |
| Blog post | 91 → **95** (95–96) | 96 → 100 | 96 → 100 | 100 → 100 | 3.21 → 2.79 s | 316 → 66 ms | 2.34 → 1.08 s |
| Contact | 88 → **96** (94–96) | 96 → 100 | 96 → 100 | 100 → 100 | 3.36 → 2.69 s | 158 → 62 ms | 3.87 → 1.07 s |
| Free rent estimate | 89 → **96** (96–96) | 96 → 100 | 96 → 100 | 69 → 100 | 3.36 → 2.69 s | 187 → 62 ms | 2.46 → 1.07 s |
| Matt's profile | 90 → **96** (96–96) | 96 → 100 | 96 → 100 | 100 → 100 | 3.28 → 2.70 s | 195 → 52 ms | 2.42 → 1.07 s |

## Desktop: live site → this branch (medians)

| Template | Perf | A11y | BP | SEO | LCP | TBT | Speed Index |
|---|---|---|---|---|---|---|---|
| Homepage | 100 → **100** | 92 → 100 | 96 → 100 | 100 → 100 | 0.78 → 0.74 s | 0 → 0 ms | 0.73 → 0.51 s |
| Rent guide | 100 → **100** | 96 → 100 | 96 → 100 | 100 → 100 | 0.78 → 0.66 s | 3 → 0 ms | 0.61 → 0.35 s |
| Lease guide | 100 → **100** | 96 → 100 | 96 → 100 | 100 → 100 | 0.79 → 0.65 s | 14 → 0 ms | 0.65 → 0.35 s |
| Service (rent reviews) | 100 → **100** | 96 → 100 | 96 → 100 | 100 → 100 | 0.78 → 0.66 s | 0 → 0 ms | 0.53 → 0.34 s |
| Operator page → operators hub | 100 → **100** | 96 → 100 | 96 → 100 | 100 → 100 | 0.78 → 0.65 s | 10 → 0 ms | 0.63 → 0.33 s |
| Blog index | 100 → **100** | 96 → 100 | 96 → 100 | 100 → 100 | 0.63 → 0.66 s | 0 → 0 ms | 0.63 → 0.33 s |
| Blog post | 100 → **100** | 96 → 100 | 96 → 100 | 100 → 100 | 0.78 → 0.66 s | 5 → 0 ms | 0.62 → 0.33 s |
| Contact | 97 → **100** | 96 → 100 | 100 → 100 | 100 → 100 | 0.74 → 0.64 s | 137 → 0 ms | 0.87 → 0.35 s |
| Free rent estimate | 99 → **100** | 96 → 100 | 100 → 100 | 69 → 100 | 0.83 → 0.64 s | 69 → 0 ms | 0.96 → 0.40 s |
| Matt's profile | 100 → **100** | 96 → 100 | 96 → 100 | 100 → 100 | 0.77 → 0.64 s | 0 → 0 ms | 0.43 → 0.32 s |

## What changed, and what each change did

| Change | Measured effect |
|---|---|
| Google tags (GTM, gtag for GA4 and Ads) load only after consent | Rent guide mobile TBT 685 → 66 ms (median). Lighthouse never consents, and neither does any visitor who declines, so this is what they get. |
| Header, footer, FAQ, blog cards became server components; sticky bar, WhatsApp float and popup gate removed | Own client JavaScript per page is about 8 KB (consent banner, tag loader, click-ID capture). The rest is the Next.js and React runtime (about 640 KB, 191 KB gzipped, the same on every page). |
| Inline style objects and mid-body `<style>` blocks moved to classes | HTML: rent guide 177 → 89 KB; homepage 249 → 150 KB (292 → 96 inline styles); blog index 534 → 124 KB. |
| Testimonial and service cards use classes; five star elements per testimonial became one | Homepage 185 → 150 KB of HTML, 812 → 751 elements. |
| Five static font files → two variable fonts; the heading font no longer preloaded | Two font requests instead of five, and only the 48 KB body font competes with the stylesheet before first paint. Size-adjusted fallbacks keep CLS at 0. |
| `fetchPriority="high"` on the homepage hero image | Clears Lighthouse's LCP-discovery check; the image is 32 KB AVIF. |
| `experimental.inlineCss` | Tried and reverted: it put the stylesheet in the HTML and twice more in the RSC payload (about 108 KB per page). |
| Unused dependencies (`motion`, `@next/third-parties`, `next-sitemap`) removed | Nothing shipped to the browser from them after their components were deleted. |

## Why mobile stops at 90–96: LCP

On mobile, FCP (1.07 s), Speed Index (1.07 s), CLS (0) and TBT (52–130 ms) are at or close to budget.
LCP (2.7–3.3 s) is the one metric losing points.

The page itself paints its largest element at the same moment as the first content. On the rent guide,
Lighthouse's unthrottled trace has **first paint, FCP and LCP all at 297 ms**: the LCP element is the
answer paragraph, which needs nothing downloaded. The 3.0 s comes from how Lighthouse simulates a slow
phone. On localhost, every file arrives within milliseconds, so the browser runs the framework's JavaScript
(React hydration, about 450 ms of script on this machine before the 4× slowdown) *before* that first
paint. The simulation then counts all of it as work the LCP waited for. Two checks:

- With the web fonts blocked, LCP stays at 2.9 s, so fonts are not the cause.
- With real throttling instead of simulation (`--throttling-method=devtools`), the rent guide's LCP equals
  its FCP (2.2 s and 2.2 s).

Over a real network, as PSI loads a deployed page, the scripts usually arrive after the first paint, so
PSI's LCP for these pages may be much closer to their FCP. That is why the PSI run on a reachable
preview is the deciding measurement.

If PSI still shows mobile below 100, what is left is the React and Next.js runtime itself. Matt chose
(24 Nov 2026) to trim the pages but not to change the architecture. Removing hydration from the guides
would mean serving them as static HTML outside the App Router, which he ruled out.

The tags stay consent-gated in every case; they are not part of the trade-off.
