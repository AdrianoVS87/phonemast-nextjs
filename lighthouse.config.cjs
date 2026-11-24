/**
 * Lighthouse CI for the template set, mobile and desktop.
 *   pnpm build && pnpm lhci:mobile
 *   pnpm build && pnpm lhci:desktop
 * lighthouserc.mobile.cjs and lighthouserc.desktop.cjs call makeConfig(). Reports go to .lighthouseci/ only.
 *
 * Acceptance (docs/seo/performance.md): for every template, the median of 5 runs scores 100 for
 * Performance, Accessibility, Best Practices and SEO, and no single run scores below 98 for
 * Performance. Mobile lab budgets: TBT <= 50 ms, Speed Index <= 1.5 s, LCP <= 1.2 s, FCP <= 1.0 s, CLS 0.
 */
const base = process.env.LHCI_BASE_URL || "http://localhost:3100";

const TEMPLATES = [
  "/",
  "/phone-mast-rent/",
  "/phone-mast-lease/",
  "/phone-mast-services/rent-reviews/",
  "/phone-mast-operators/",
  "/blog/",
  "/blog/section-26-notices/",
  "/contact/",
  "/free-rent-estimate/",
  "/team/matt-restall/",
];

const categories = {
  "categories:accessibility": ["error", { minScore: 1, aggregationMethod: "median" }],
  "categories:best-practices": ["error", { minScore: 1, aggregationMethod: "median" }],
  "categories:seo": ["error", { minScore: 1, aggregationMethod: "median" }],
};

const mobileBudgets = {
  "total-blocking-time": ["error", { maxNumericValue: 50, aggregationMethod: "median" }],
  "speed-index": ["error", { maxNumericValue: 1500, aggregationMethod: "median" }],
  "largest-contentful-paint": ["error", { maxNumericValue: 1200, aggregationMethod: "median" }],
  "first-contentful-paint": ["error", { maxNumericValue: 1000, aggregationMethod: "median" }],
  "cumulative-layout-shift": ["error", { maxNumericValue: 0, aggregationMethod: "median" }],
};

module.exports = function makeConfig(preset) {
  return { ci: {
    collect: {
      url: TEMPLATES.map((p) => `${base}${p}`),
      numberOfRuns: 5,
      ...(process.env.LHCI_BASE_URL ? {} : { startServerCommand: "pnpm start -p 3100", startServerReadyPattern: "Ready in" }),
      settings: {
        ...(preset === "desktop" ? { preset: "desktop" } : {}),
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
        chromeFlags: "--headless=new --no-first-run",
      },
    },
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: ".*",
          assertions: {
            "categories:performance": ["error", { minScore: 1, aggregationMethod: "median" }],
            ...categories,
            ...(preset === "mobile" ? mobileBudgets : {}),
          },
        },
        {
          matchingUrlPattern: ".*",
          assertions: { "categories:performance": ["error", { minScore: 0.98, aggregationMethod: "pessimistic" }] },
        },
      ],
    },
    upload: { target: "filesystem", outputDir: `.lighthouseci/${preset}` },
  } };
};
