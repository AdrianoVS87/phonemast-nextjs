import { NextRequest, NextResponse } from "next/server";

/**
 * WordPress → Next.js redirect map.
 * Source: WP page slugs + post slugs extracted from backup_2026-03-25/all_pages.json + all_posts.json
 * Runs in the edge middleware BEFORE Next.js normalizes the trailing slash,
 * so `/foo/` → destination in exactly ONE 301 hop (no double-hop via `/foo`).
 */
const REDIRECTS: Record<string, string> = {
  // === Services (apex-level WP pages → nested service routes) ===
  "services": "/phone-mast-services",
  "phone-mast-services-overview": "/phone-mast-services",
  "rent-reviews": "/phone-mast-services/rent-reviews",
  "lease-renewals": "/phone-mast-services/lease-renewals",
  "new-lettings": "/phone-mast-services/new-lettings",
  "mast-sales": "/phone-mast-services/mast-sales",
  "mast-removel-and-redevelopment": "/phone-mast-services/removal-and-redevelopment", // WP typo
  "mast-removal-and-redevelopment": "/phone-mast-services/removal-and-redevelopment",
  "other-services": "/phone-mast-services/other-services",
  "lease-retrievals": "/phone-mast-services/lease-retrievals",
  "electricity-costs-recovery": "/phone-mast-services/electricity-costs-recovery",
  "phone-mast-rent-review": "/phone-mast-services/rent-reviews",

  // === Operator aliases (old WP slugs + common abbreviations) ===
  "arqiva-phone-mast-lease": "/on-tower-arqiva-phone-mast-lease",
  "cornerstone-phone-mast-lease": "/ctil-cornerstone-phone-mast-lease",
  "ctil-phone-mast-lease": "/ctil-cornerstone-phone-mast-lease",
  "wig-phone-mast-lease": "/wireless-infrastructure-group-phone-mast-lease",

  // === WP service slug variants (Google-indexed alternative patterns) ===
  "mast-rent-reviews": "/phone-mast-services/rent-reviews",
  "phone-mast-new-lettings": "/phone-mast-services/new-lettings",
  "phone-mast-removal": "/phone-mast-services/removal-and-redevelopment",
  "phone-mast-sales": "/phone-mast-services/mast-sales",

  // === Bare keyword slugs (common Google indexed or typed-in URLs) ===
  "phone-mast-rent": "/phone-mast-rent-2026",
  "phone-mast-lease": "/phone-mast-lease-2026",
  "phone-mast-advice": "/about-us",

  // === Locations ===
  "phone-mast-advice-london": "/locations/london",
  "phone-mast-advice-bristol": "/locations/bristol",
  "phone-mast-advice-oswestry": "/locations/oswestry",

  // === WP infrastructure (feeds, login, admin, etc.) → homepage ===
  "feed": "/blog",
  "wp-admin": "/",
  "wp-login.php": "/",
  "xmlrpc.php": "/",
  "sitemap_index.xml": "/sitemap.xml",

  // === Core pages ===
  "home": "/",
  "about": "/about-us",
  "about-the-phone-mast-advice-company": "/about-us",
  "phone-mast-experts": "/team",
  "contact-us": "/contact",
  "phone-mast-landlords-handbook": "/handbook",
  "cookie-policy-uk": "/cookie-policy",

  // === Blog index + WP category/tag/pagination patterns ===
  "news": "/blog",
  "category/blog": "/blog",
  "category/news": "/blog",
  "category/uncategorized": "/blog",
  "blog/page/2": "/blog",
  "page/2": "/blog",

  // === Blog posts (52 WP posts → /blog/<slug>) ===
  "1954-act": "/blog/1954-act",
  "3gshutdown": "/blog/3gshutdown",
  "a-basic-guide-to-the-land-tribunal-and-the-mobile-phone-mast-lease-process":
    "/blog/a-basic-guide-to-the-land-tribunal-and-the-mobile-phone-mast-lease-process",
  "ai-lease-advice": "/blog/ai-lease-advice",
  "ap-wireless-ii": "/blog/ap-wireless-ii",
  "arqiva-assigns-sites-to-arqiva-services": "/blog/arqiva-assigns-sites-to-arqiva-services",
  "change-to-section-68-of-pstia-2022-and-how-it-will-impact-phone-mast-landlords":
    "/blog/change-to-section-68-of-pstia-2022-and-how-it-will-impact-phone-mast-landlords",
  "communications-code-2022": "/blog/communications-code-2022",
  "compensation-claims": "/blog/compensation-claims",
  "complexities-of-assignments-and-sharing-in-phone-mast-leases":
    "/blog/complexities-of-assignments-and-sharing-in-phone-mast-leases",
  "ctil-lost-appeal": "/blog/ctil-lost-appeal",
  "fire-risk-assessment": "/blog/fire-risk-assessment",
  "five-things-you-should-know-about-leasing-your-land-to-a-mobile-phone-mast-operator":
    "/blog/five-things-you-should-know-about-leasing-your-land-to-a-mobile-phone-mast-operator",
  "forced-lease-renewals": "/blog/forced-lease-renewals",
  "forced-phone-mast-lease-renewals": "/blog/forced-lease-renewals", // common WP alias
  "how-the-5g-rollout-will-impact-existing-phone-mast-leases-what-landlords-should-prepare-for":
    "/blog/how-the-5g-rollout-will-impact-existing-phone-mast-leases-what-landlords-should-prepare-for",
  "how-to-find-the-closest-phone-mast-to-you": "/blog/how-to-find-the-closest-phone-mast-to-you",
  "impact-of-phone-masts-on-environment": "/blog/impact-of-phone-masts-on-environment",
  "key-players-roles-in-a-phone-mast-sale": "/blog/key-players-roles-in-a-phone-mast-sale",
  "legal-safeguards": "/blog/legal-safeguards",
  "maple-house-landmark-cases": "/blog/maple-house-landmark-cases",
  "mast-sales-and-how-it-could-be-beneficial": "/blog/mast-sales-and-how-it-could-be-beneficial",
  "mastleaseagreements": "/blog/mastleaseagreements",
  "mistakes-to-avoid-as-a-phone-mast-landlord": "/blog/mistakes-to-avoid-as-a-phone-mast-landlord",
  "obsolete-phone-mast-guide": "/blog/obsolete-phone-mast-guide",
  "operator-rights-to-access-your-electricity-supply":
    "/blog/operator-rights-to-access-your-electricity-supply",
  "phone-mast-basics": "/blog/phone-mast-basics",
  "phone-mast-operator-breach-of-agreement": "/blog/phone-mast-operator-breach-of-agreement",
  "phone-mast-roof-damage": "/blog/phone-mast-roof-damage",
  "phone-mast-surveyor-understanding-this-role":
    "/blog/phone-mast-surveyor-understanding-this-role",
  "property-value": "/blog/property-value",
  "quadrant-house": "/blog/quadrant-house",
  "redevelopment-and-phone-mast-removal": "/blog/redevelopment-and-phone-mast-removal",
  "reduce-phone-mast-rents": "/blog/reduce-phone-mast-rents",
  "section-26-notices": "/blog/section-26-notices",
  "srn-mast-upgrades-landowners": "/blog/srn-mast-upgrades-landowners",
  "telecom-code-rights-vs-property-rights-what-every-phone-mast-landlord-should-know":
    "/blog/telecom-code-rights-vs-property-rights-what-every-phone-mast-landlord-should-know",
  "terminology-used-by-phone-mast-operators": "/blog/terminology-used-by-phone-mast-operators",
  "the-benefits-of-a-phone-mast": "/blog/the-benefits-of-a-phone-mast",
  "the-consequences-of-a-misplaced-phone-mast-lease":
    "/blog/the-consequences-of-a-misplaced-phone-mast-lease",
  "the-kay-park-parish-church-tribunal-decision-a-turning-point-for-mast-landlords":
    "/blog/the-kay-park-parish-church-tribunal-decision-a-turning-point-for-mast-landlords",
  "the-pippingford-case": "/blog/the-pippingford-case",
  "the-role-of-legal-counsel": "/blog/the-role-of-legal-counsel",
  "the-vodafone-three-joint-venture": "/blog/the-vodafone-three-joint-venture",
  "types-of-phone-masts": "/blog/types-of-phone-masts",
  "uk-phone-mast-coverage-challenges": "/blog/uk-phone-mast-coverage-challenges",
  "understanding-phone-mast-sale-process": "/blog/understanding-phone-mast-sale-process",
  "unpaid-electricity-costs": "/blog/unpaid-electricity-costs",
  "vache-farm-telecom-case": "/blog/vache-farm-telecom-case",
  "what-do-the-psti-act-2026-changes-mean-for-phone-mast-landlords":
    "/blog/what-do-the-psti-act-2026-changes-mean-for-phone-mast-landlords",
  "what-is-a-phone-mast-lease": "/blog/what-is-a-phone-mast-lease",
  "why-can-operators-force-a-mast": "/blog/why-can-operators-force-a-mast",
  "why-property-managers-are-turning-to-specialist-phone-mast-advisors-and-why-your-landlords-will-thank-you":
    "/blog/why-property-managers-are-turning-to-specialist-phone-mast-advisors-and-why-your-landlords-will-thank-you",
};

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Strip leading and trailing slash to get the slug
  const slug = pathname.replace(/^\/+/, "").replace(/\/+$/, "");

  if (slug && REDIRECTS[slug]) {
    const url = req.nextUrl.clone();
    url.pathname = REDIRECTS[slug];
    return NextResponse.redirect(url, 308);
  }

  // Catch-all: any WP category/*, tag/*, or date archive (YYYY/MM/*) → /blog
  if (/^(category|tag|20\d{2})\//.test(slug)) {
    const url = req.nextUrl.clone();
    url.pathname = "/blog";
    return NextResponse.redirect(url, 308);
  }

  // Catch-all: /phone-mast-services/<something> that isn't a real service subpage
  // Google indexed operator pages under /phone-mast-services/ in old WP site
  const servicesPrefix = /^phone-mast-services\/(.+)$/.exec(slug);
  if (servicesPrefix) {
    const sub = servicesPrefix[1];
    const realServicePages = [
      "rent-reviews", "lease-renewals", "new-lettings", "mast-sales",
      "removal-and-redevelopment", "electricity-costs-recovery",
      "other-services", "lease-retrievals",
    ];
    if (!realServicePages.includes(sub)) {
      const url = req.nextUrl.clone();
      // Check if the sub-slug exists as a redirect target or a root-level page
      if (REDIRECTS[sub]) {
        url.pathname = REDIRECTS[sub];
      } else {
        // Assume it's an operator page or other root-level page
        url.pathname = `/${sub}`;
      }
      return NextResponse.redirect(url, 308);
    }
  }

  // Catch-all: /locations/<old-slug> patterns (WP had /phone-mast-advice-london etc.)
  const locationsPrefix = /^locations\/phone-mast-advice-(.+)$/.exec(slug);
  if (locationsPrefix) {
    const url = req.nextUrl.clone();
    url.pathname = `/locations/${locationsPrefix[1]}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Run middleware on every request except static assets, API routes, and Next internals.
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /_next/* (Next.js internals)
     * - /api/* (API routes)
     * - /studio/* (Sanity Studio)
     * - any path with a file extension (static assets)
     */
    "/((?!_next|api|studio|.*\\..*).*)",
  ],
};
