# Performance

## Status: acceptance not yet demonstrated

The final five-run measurement of this branch was stopped by the machine running low on memory after
**7 of 100 runs** (first mobile run of seven templates). The numbers below are therefore single runs, not
medians, and they are local Lighthouse, not PageSpeed Insights. The acceptance target (median of five PSI
runs = 100 on mobile and desktop for every template, no run below 98) has **not** been shown.

To finish, on a machine with free memory:

```bash
pnpm build
pnpm lhci:mobile     # 10 templates x 5 runs, asserts the targets, reports in .lighthouseci/mobile
pnpm lhci:desktop    # same, desktop preset
```

For PSI itself: push the branch, open the Vercel preview URL, and run PSI (or `LHCI_BASE_URL=<preview> pnpm lhci:mobile`)
on the ten templates. PSI cannot test localhost, and its unauthenticated API refused requests (HTTP 429).

## Method

Lighthouse 12.6.1 (inside `@lhci/cli` 0.15.1), headless Chrome, the same mobile and desktop presets PSI uses,
on the same Windows machine for before and after. This machine is slower than PSI's servers: the audit's PSI
run of the live rent guide scored 99 on mobile; this machine scored the same live page 72. Read the numbers
as before-versus-after on one machine, not as PSI scores.

## Mobile: live site (median of 5) against this branch (single run)

| Template | Perf | A11y | BP | SEO | LCP | TBT | Speed Index |
|---|---|---|---|---|---|---|---|
| Homepage | 82 → 72 | 92 → **100** | 96 → **100** | 100 → 100 | 3.36 → 3.68 s | 409 → 624 ms | 2.37 → 2.98 s |
| Rent guide | 72 → 73 | 96 → **100** | 96 → **100** | 100 → 100 | 3.28 → 3.63 s | 685 → 657 ms | 2.49 → 2.03 s |
| Lease guide | 86 → 74 | 96 → **100** | 96 → **100** | 100 → 100 | 3.36 → 3.30 s | 276 → 776 ms | 2.74 → 1.84 s |
| Service (rent reviews) | 72 → 73 | 96 → **100** | 96 → **100** | 100 → 100 | 3.47 → 3.66 s | 805 → 646 ms | 2.58 → 1.74 s |
| Operator page → operators hub | 74 → 72 | 96 → **100** | 96 → **100** | 100 → 100 | 3.35 → 3.64 s | 702 → 700 ms | 2.64 → 2.11 s |
| Blog index | 84 → 64 | 96 → **100** | 96 → **100** | 100 → 100 | 3.66 → 4.10 s | 280 → 929 ms | 2.85 → 3.85 s |
| Blog post | 91 → 76 | 96 → **100** | 96 → **100** | 100 → 100 | 3.21 → 3.11 s | 316 → 726 ms | 2.34 → 1.86 s |
| Contact | 88 → not measured | | | | | | |
| Free rent estimate | 89 → not measured | 96 → 100* | 96 → 100* | **69 → 100*** | | | |
| Matt's profile | 90 → not measured | | | | | | |

\* From a single run of the previous build (same day, before the contrast fix): the free rent estimate is now
indexable, so its SEO score moved from 69 to 100.

**Desktop**, single runs of the previous build: homepage 98, rent guide 99, lease guide 99, with
Accessibility, Best Practices and SEO at 100 except the homepage's contrast issue, since fixed.

### How to read the mobile Performance column

Single runs on this machine swing by 15–30 points (the live baseline ranged 56–90 on the homepage across five
runs), so these rows do not show a regression or an improvement on their own. Treat them as noise until the
five-run medians are in. The stable signals are the other three categories, which moved to 100 on every
measured template.

## What changed for performance, with what was measured

| Change | Measured effect |
|---|---|
| Google tags (GTM, gtag for GA4 and Ads) load only after consent | Live rent guide, one run: 2,990 ms TBT, of which gtag/GTM long tasks were the largest; same page on this branch without consent: 760 ms. Lighthouse never consents, and neither does any visitor who declines. |
| Header, footer, FAQ, blog cards became server components; sticky bar, WhatsApp float, popup gate removed | Own client JavaScript per page: about 8 KB (consent banner, tag loader, click-ID capture). Everything else that ships is the Next.js and React runtime (about 640 KB, 191 KB gzipped, identical on every page). |
| Inline style objects and mid-body `<style>` blocks moved to classes in `globals.css` | HTML weight: rent guide 177 KB live → 90 KB; homepage 249 KB → 180 KB; blog index 534 KB → 125 KB (the old client `BlogCard` serialised every post body into the page). |
| Five static font files → two variable fonts | 2 font requests instead of 5, still self-hosted with size-adjusted fallbacks (CLS stays 0). |
| `experimental.inlineCss` | Tried and reverted: it added the stylesheet to the HTML and twice more to the RSC payload (about 108 KB per page). |
| Unused dependencies (`motion`, `@next/third-parties`, `next-sitemap`) removed | Smaller install; none shipped to the browser after the components using them were deleted. |

## What still stands between mobile and 100

Measured on the rent guide (`scripts` breakdown from Lighthouse, this branch, one run):

- **Style and layout of the first render: about 2.0 s of main-thread time** (throttled), including one
  760 ms task attributed to the document itself. This is the browser laying out the page, before any
  JavaScript, and it drives the LCP "render delay" (the LCP element is the answer paragraph, so it has no
  load time).
- **Framework script evaluation: about 1.2 s** (React DOM and the Next.js router hydrating the page).
- `legacy-javascript` (about 13 KB inside a Next.js framework chunk) and `unused-javascript` (about 27 KB in
  React DOM) are framework code and cannot be changed from the app.

Options, for the owner to choose between once PSI numbers from a preview exist:

1. **Measure on PSI first.** PSI's hardware is much faster than this machine: the live page scored 99 there.
   The branch removes the largest third-party cost, so PSI may already be at or near the target.
2. **Cut DOM further.** The header renders desktop and mobile navigation lists separately; the homepage shows
   every Sanity testimonial; several service pages still use inline styles. Each reduces layout and
   hydration work a little.
3. **Accept that App Router cannot drop its runtime.** If PSI still falls short after (2), the remaining cost
   is React hydration itself. Removing it would mean serving the guides as plain static HTML outside the App
   Router: a larger architectural change, not a tweak.

The tags stay consent-gated in every option. Keeping them is not the trade-off.
