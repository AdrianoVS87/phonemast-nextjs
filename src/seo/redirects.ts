/**
 * Every redirect the site serves, as data, plus one pure function that decides what a request gets.
 * src/proxy.ts calls `resolveRequest`; tests/redirects.test.ts checks every rule is a single
 * permanent hop to a live page (never another redirect, never the homepage by default).
 *
 * Keys are paths without leading or trailing slashes; values are destination paths.
 */
import { APEX_HOST, SITE_HOST, normalisePath } from "./site.ts";

export const OPERATORS_HUB = "/phone-mast-operators/";

/** Operator pages merged into the operators hub on 24 Nov 2026 (docs/seo/intent-map.md). */
export const OPERATOR_SECTIONS: Record<string, string> = {
  "vodafone-phone-mast-lease": "vodafone",
  "o2-phone-mast-lease": "o2",
  "ee-phone-mast-lease": "ee",
  "three-phone-mast-lease": "three",
  "ctil-cornerstone-phone-mast-lease": "ctil-cornerstone",
  "on-tower-arqiva-phone-mast-lease": "on-tower",
  "cellnex-phone-mast-lease": "cellnex",
  "airwave-phone-mast-lease": "airwave",
  "wireless-infrastructure-group-phone-mast-lease": "wireless-infrastructure-group",
};

const operatorSection = (slug: string): string => `${OPERATORS_HUB}#${OPERATOR_SECTIONS[slug]}`;

/** Blog posts merged into a guide (docs/seo/intent-map.md). Removed from the blog in src/lib/local-posts.ts. */
export const MERGED_POSTS: Record<string, string> = {
  "what-is-a-phone-mast-lease": "/phone-mast-lease/",
  mastleaseagreements: "/phone-mast-lease/",
  "reduce-phone-mast-rents": "/phone-mast-rent/",
  "mistakes-to-avoid-as-a-phone-mast-landlord": "/phone-mast-lease/",
  "legal-safeguards": "/phone-mast-lease/",
};

/** Blog posts that still live under /blog/; old WordPress served them from the root. */
const ROOT_BLOG_SLUGS = [
  "1954-act", "3gshutdown", "a-basic-guide-to-the-land-tribunal-and-the-mobile-phone-mast-lease-process",
  "ai-lease-advice", "ap-wireless-ii", "arqiva-assigns-sites-to-arqiva-services",
  "change-to-section-68-of-pstia-2022-and-how-it-will-impact-phone-mast-landlords", "communications-code-2022",
  "compensation-claims", "complexities-of-assignments-and-sharing-in-phone-mast-leases", "ctil-lost-appeal",
  "fire-risk-assessment", "five-things-you-should-know-about-leasing-your-land-to-a-mobile-phone-mast-operator",
  "forced-lease-renewals", "how-the-5g-rollout-will-impact-existing-phone-mast-leases-what-landlords-should-prepare-for",
  "how-to-find-the-closest-phone-mast-to-you", "impact-of-phone-masts-on-environment", "key-players-roles-in-a-phone-mast-sale",
  "maple-house-landmark-cases", "mast-sales-and-how-it-could-be-beneficial", "obsolete-phone-mast-guide",
  "operator-rights-to-access-your-electricity-supply", "phone-mast-basics", "phone-mast-operator-breach-of-agreement",
  "phone-mast-roof-damage", "phone-mast-surveyor-understanding-this-role", "property-value", "quadrant-house",
  "redevelopment-and-phone-mast-removal", "section-26-notices", "srn-mast-upgrades-landowners",
  "telecom-code-rights-vs-property-rights-what-every-phone-mast-landlord-should-know",
  "terminology-used-by-phone-mast-operators", "the-benefits-of-a-phone-mast", "the-consequences-of-a-misplaced-phone-mast-lease",
  "the-kay-park-parish-church-tribunal-decision-a-turning-point-for-mast-landlords", "the-pippingford-case",
  "the-role-of-legal-counsel", "the-vodafone-three-joint-venture", "types-of-phone-masts", "uk-phone-mast-coverage-challenges",
  "understanding-phone-mast-sale-process", "unpaid-electricity-costs", "vache-farm-telecom-case",
  "what-do-the-psti-act-2026-changes-mean-for-phone-mast-landlords", "why-can-operators-force-a-mast",
  "why-property-managers-are-turning-to-specialist-phone-mast-advisors-and-why-your-landlords-will-thank-you",
] as const;

/** Hand-written rules (WordPress-era slugs, aliases, typos). Values may point at another rule; `resolve` follows them. */
const RULES: Record<string, string> = {
  // Services: old WordPress parents and aliases
  "our-services": "/phone-mast-services/",
  "our-services/rent-reviews": "/phone-mast-services/rent-reviews/",
  "our-services/lease-renewals": "/phone-mast-services/lease-renewals/",
  "our-services/new-lettings": "/phone-mast-services/new-lettings/",
  "our-services/mast-sales": "/phone-mast-services/mast-sales/",
  "our-services/other-services": "/phone-mast-services/other-services/",
  "our-services/lease-retrievals": "/phone-mast-services/lease-retrievals/",
  "our-services/electricity-costs-recovery": "/phone-mast-services/electricity-costs-recovery/",
  "our-services/removal-and-redevelopment": "/phone-mast-services/removal-and-redevelopment/",
  "our-services/mast-removal-and-redevelopment": "/phone-mast-services/removal-and-redevelopment/",
  "our-services/mast-removel-and-redevelopment": "/phone-mast-services/removal-and-redevelopment/", // WordPress typo
  "what-we-do": "/phone-mast-services/",
  services: "/phone-mast-services/",
  "phone-mast-services-overview": "/phone-mast-services/",
  "rent-reviews": "/phone-mast-services/rent-reviews/",
  "lease-renewals": "/phone-mast-services/lease-renewals/",
  "new-lettings": "/phone-mast-services/new-lettings/",
  "mast-sales": "/phone-mast-services/mast-sales/",
  "mast-removel-and-redevelopment": "/phone-mast-services/removal-and-redevelopment/", // WordPress typo
  "mast-removal-and-redevelopment": "/phone-mast-services/removal-and-redevelopment/",
  "other-services": "/phone-mast-services/other-services/",
  "lease-retrievals": "/phone-mast-services/lease-retrievals/",
  "electricity-costs-recovery": "/phone-mast-services/electricity-costs-recovery/",
  "phone-mast-rent-review": "/phone-mast-services/rent-reviews/",
  "mast-rent-reviews": "/phone-mast-services/rent-reviews/",
  "phone-mast-new-lettings": "/phone-mast-services/new-lettings/",
  "phone-mast-removal": "/phone-mast-services/removal-and-redevelopment/",
  "phone-mast-sales": "/phone-mast-services/mast-sales/",
  "phone-mast-lease-renewal": "/phone-mast-services/lease-renewals/",
  "phone-mast-lease-renewals": "/phone-mast-services/lease-renewals/",
  "lease-renewal": "/phone-mast-services/lease-renewals/",
  "rent-review": "/phone-mast-services/rent-reviews/",
  "mast-rent-review": "/phone-mast-services/rent-reviews/",
  "electricity-costs": "/phone-mast-services/electricity-costs-recovery/",
  "phone-mast": "/phone-mast-services/",

  // Operator aliases, now sections of the operators hub
  "arqiva-phone-mast-lease": operatorSection("on-tower-arqiva-phone-mast-lease"),
  "cornerstone-phone-mast-lease": operatorSection("ctil-cornerstone-phone-mast-lease"),
  "ctil-phone-mast-lease": operatorSection("ctil-cornerstone-phone-mast-lease"),
  "wig-phone-mast-lease": operatorSection("wireless-infrastructure-group-phone-mast-lease"),

  // The two guides moved from year-stamped URLs on 19 Oct 2026
  "phone-mast-rent-2026": "/phone-mast-rent/",
  "phone-mast-lease-2026": "/phone-mast-lease/",
  "what-is-a-phone-mast": "/phone-mast-lease/", // crawled 15 Sep 2026, nearest page
  "phone-mast-advice": "/about-us/",

  // Locations
  "phone-mast-advice-london": "/locations/london/",
  "phone-mast-advice-bristol": "/locations/bristol/",
  "phone-mast-advice-oswestry": "/locations/oswestry/",

  // WordPress feeds and maps
  feed: "/blog/",
  "sitemap_index.xml": "/sitemap.xml",
  "index.php": "/",
  home: "/",

  // Core pages
  about: "/about-us/",
  "about-the-phone-mast-advice-company": "/about-us/",
  "about-phone-mast-advice-company": "/about-us/",
  "phone-mast-experts": "/team/",
  "contact-us": "/contact/",
  "phone-mast-landlords-handbook": "/handbook/",
  "the-ultimate-handbook-for-landlords": "/handbook/",
  "cookie-policy-uk": "/cookie-policy/",

  // Old WordPress post slugs that changed
  "understanding-the-role-of-surveyors-in-phone-mast-lease-negotiations": "/blog/phone-mast-surveyor-understanding-this-role/",
  "understanding-operator-rights-to-access-your-electricity-supply": "/blog/operator-rights-to-access-your-electricity-supply/",
  "important-changes-ahead-government-proposes-further-rent-cuts-for-phone-mast-landlords-under-the-1954-act": "/blog/1954-act/",
  "forced-phone-mast-lease-renewals": "/blog/forced-lease-renewals/",

  // Blog index and WordPress archive pages
  news: "/blog/",
  "category/blog": "/blog/",
  "category/news": "/blog/",
  "category/uncategorized": "/blog/",
  "blog/page/2": "/blog/",
  "page/2": "/blog/",
};

/** Spam pages injected into the old WordPress site, and WordPress internals with no equivalent. 410 Gone. */
const GONE_EXACT = new Set<string>([
  "free-game-casino-bonuses",
  "the-safest-online-casino-site-a-comprehensive-overview-to-choosing-a-secure-betting-platform",
  "free-online-penny-slot-machine-an-overview-to-playing-and-winning",
  "wp-admin",
  "wp-login.php",
  "xmlrpc.php",
  "wp-json",
]);
const GONE_PREFIXES = ["wp-content/", "wp-includes/", "wp-admin/", "wp-json/"];

/** The real service sub-pages; anything else under /phone-mast-services/ was an old WordPress child. */
export const SERVICE_SLUGS = [
  "rent-reviews", "lease-renewals", "new-lettings", "mast-sales",
  "removal-and-redevelopment", "electricity-costs-recovery", "other-services", "lease-retrievals",
] as const;

function buildTable(): Record<string, string> {
  const table: Record<string, string> = { ...RULES };
  for (const slug of Object.keys(OPERATOR_SECTIONS)) table[slug] = operatorSection(slug);
  for (const [slug, target] of Object.entries(MERGED_POSTS)) {
    table[slug] = target;
    table[`blog/${slug}`] = target;
  }
  for (const slug of ROOT_BLOG_SLUGS) table[slug] = `/blog/${slug}/`;
  return table;
}

export const REDIRECTS: Readonly<Record<string, string>> = buildTable();

const toKey = (pathname: string): string => pathname.replace(/^\/+/, "").replace(/\/+$/, "");

/** Follow the table to the last hop so every rule answers in one redirect. */
function finalTarget(target: string, table: Readonly<Record<string, string>>): string {
  let current = target;
  for (let i = 0; i < 10; i++) {
    const [pathPart, hash = ""] = current.split("#");
    const next = table[toKey(pathPart)];
    if (!next || toKey(next.split("#")[0]) === toKey(pathPart)) return current;
    current = hash && !next.includes("#") ? `${next}#${hash}` : next;
  }
  throw new Error(`Redirect loop starting at ${target}`);
}

function withSlash(target: string): string {
  const [pathPart, hash] = target.split("#");
  const path = /\.[a-z0-9]+$/i.test(pathPart) ? pathPart : normalisePath(pathPart);
  return hash ? `${path}#${hash}` : path;
}

/** Where a same-site path should go, or `null` if it is not a redirect. */
export function redirectTarget(pathname: string): string | null {
  const key = toKey(pathname);
  const direct = REDIRECTS[key];
  if (direct) return withSlash(finalTarget(direct, REDIRECTS));

  // WordPress category, tag and date archives
  if (/^(category|tag|20\d{2})\//.test(key)) return "/blog/";

  // Old WordPress children such as /phone-mast-services/vodafone-phone-mast-lease/
  const servicesChild = /^phone-mast-services\/(.+)$/.exec(key);
  if (servicesChild && !(SERVICE_SLUGS as readonly string[]).includes(servicesChild[1])) {
    const sub = servicesChild[1];
    return withSlash(finalTarget(REDIRECTS[sub] ?? `/${sub}`, REDIRECTS));
  }

  // /locations/phone-mast-advice-london → /locations/london/
  const location = /^locations\/phone-mast-advice-(.+)$/.exec(key);
  if (location) return `/locations/${location[1]}/`;

  return null;
}

export function isGone(pathname: string): boolean {
  const key = toKey(pathname);
  return GONE_EXACT.has(key) || GONE_PREFIXES.some((prefix) => `${key}/`.startsWith(prefix));
}

export type RequestDecision =
  | { readonly kind: "redirect"; readonly status: 308; readonly location: string }
  | { readonly kind: "gone" }
  | { readonly kind: "pass" };

/**
 * What the proxy should do with a request. `location` is absolute when the host changes, and a
 * path otherwise. Query strings are preserved by the caller.
 */
export function resolveRequest(host: string, pathname: string): RequestDecision {
  if (isGone(pathname)) return { kind: "gone" };
  const target = redirectTarget(pathname);
  if (host === APEX_HOST) {
    return { kind: "redirect", status: 308, location: `https://${SITE_HOST}${target ?? withSlash(pathname || "/")}` };
  }
  if (target && target.split("#")[0] !== normalisePath(pathname)) return { kind: "redirect", status: 308, location: target };
  return { kind: "pass" };
}

/**
 * phonemastcompany.co.uk is served by Apache on separate hosting, not by this app. This map feeds
 * scripts/generate-legacy-htaccess.mjs, which writes the rules to paste into that host's .htaccess.
 * Paths come from the Wayback Machine index of the old site (24 Nov 2026). Unmapped paths fall
 * back to the homepage there; injected spam (`ihao/`) answers 410.
 */
export const LEGACY_DOMAIN = {
  hosts: ["phonemastcompany.co.uk", "www.phonemastcompany.co.uk"],
  gonePrefixes: ["ihao/"],
  map: {
    "index.html": "/",
    "index.php": "/",
    "about-the-phone-mast-company": "/about-us/",
    about: "/about-us/",
    "aboutus.html": "/about-us/",
    "aboutus.php": "/about-us/",
    contact: "/contact/",
    "contactus.php": "/contact/",
    "contact_form.php": "/contact/",
    "enquiry_form.php": "/contact/",
    blog: "/blog/",
    news: "/blog/",
    "news.html": "/blog/",
    "news.php": "/blog/",
    "a-blow-for-ctil-as-they-lose-their-appeal": "/blog/ctil-lost-appeal/",
    "arqiva-assign-sites-to-arqiva-services": "/blog/arqiva-assigns-sites-to-arqiva-services/",
    "government-are-now-trying-to-dramatically-reduce-phone-mast-rents": "/phone-mast-rent/",
    "operators-serve-notices-to-force-lease-renewals": "/blog/forced-lease-renewals/",
    "phone-mast-operators-issue-section-26-notices": "/section-26-notice/",
    "recent-changes-and-implications-of-the-digital-economy-act-2017": "/electronic-communications-code/",
    "the-long-awaited-changes-to-the-electronic-communication-code": "/electronic-communications-code/",
    "lease_agreements.html": "/phone-mast-lease/",
    "lease_agreements.php": "/phone-mast-lease/",
    "mast_sales.html": "/phone-mast-services/mast-sales/",
    "mast_sales.php": "/phone-mast-services/mast-sales/",
    "mast_removals.html": "/phone-mast-services/removal-and-redevelopment/",
    "mast_removals.php": "/phone-mast-services/removal-and-redevelopment/",
    "rent_reviews.html": "/phone-mast-services/rent-reviews/",
    "rent_reviews.php": "/phone-mast-services/rent-reviews/",
    "rent_estimation.html": "/free-rent-estimate/",
    "rent_estimation.php": "/free-rent-estimate/",
    "rent_protection.php": "/phone-mast-rent/",
    "mast_upgrades.html": "/phone-mast-services/other-services/",
    "mast_upgrades.php": "/phone-mast-services/other-services/",
    "site_audit.php": "/phone-mast-services/other-services/",
    "mast_management_portfolios.html": "/phone-mast-services/other-services/",
    "mast_management_portfolios.php": "/phone-mast-services/other-services/",
    "site_shares.html": "/blog/complexities-of-assignments-and-sharing-in-phone-mast-leases/",
    "site_shares.php": "/blog/complexities-of-assignments-and-sharing-in-phone-mast-leases/",
    "assignments.php": "/blog/complexities-of-assignments-and-sharing-in-phone-mast-leases/",
    "networks_consolidation.html": "/blog/vodafonethree-mast-site-consolidation-landlords/",
    "networks_consolidation.php": "/blog/vodafonethree-mast-site-consolidation-landlords/",
    "new_agreements_and_contracts.php": "/phone-mast-services/new-lettings/",
    services: "/phone-mast-services/",
    "services.html": "/phone-mast-services/",
    "services.php": "/phone-mast-services/",
    "phone-mast-rental-services": "/phone-mast-services/",
    "our-clients": "/about-us/",
    "our_clients.html": "/about-us/",
    "our_clients.php": "/about-us/",
    testimonials: "/about-us/",
    "testimonials.html": "/about-us/",
    "testimonials.php": "/about-us/",
    "faq.php": "/faq/",
  } as Record<string, string>,
  /** Archive patterns on the old WordPress blog. */
  prefixMap: { "category/": "/blog/", "tag/": "/blog/", "author/": "/blog/" } as Record<string, string>,
};

/** Where a legacy-domain path should land on this site (used by the .htaccess generator and its test). */
export function legacyDomainTarget(pathname: string): string | null {
  const key = toKey(pathname.split("?")[0]);
  if (LEGACY_DOMAIN.gonePrefixes.some((p) => `${key}/`.startsWith(p))) return null;
  if (key === "") return "/";
  const mapped = LEGACY_DOMAIN.map[key];
  if (mapped) return mapped;
  const prefix = Object.keys(LEGACY_DOMAIN.prefixMap).find((p) => `${key}/`.startsWith(p));
  return prefix ? LEGACY_DOMAIN.prefixMap[prefix] : "/";
}
