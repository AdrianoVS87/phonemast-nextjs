/**
 * Search intent and SEO text for every blog post. Post bodies live in Sanity (and
 * src/lib/local-posts.ts); this file only decides the query each post answers and, where the post's
 * own title or excerpt is too long, the shorter title tag or description to use instead.
 * Overrides are written from the post's own excerpt and say nothing the post does not.
 *
 * tests/routes.test.ts checks that no post shares a primary query with another post or a page, and
 * that every resulting title and description fits the length rules.
 */
import { TITLE_MAX, DESCRIPTION_MAX } from "./metadata.ts";

export interface BlogSeo {
  readonly primaryQuery: string;
  /** Title tag when "{post title} | Phone Mast Advice" would exceed 60 characters. */
  readonly seoTitle?: string;
  /** Description when the excerpt cannot be cut to whole sentences within 155 characters. */
  readonly description?: string;
}

export const BLOG_SEO: Record<string, BlogSeo> = {
  "1954-act": { primaryQuery: "1954 act phone mast rent cuts", seoTitle: "1954 Act Rent Cuts for Phone Mast Landlords" },
  "3gshutdown": { primaryQuery: "3g shutdown phone mast", seoTitle: "UK 3G Shutdown: What Mast Landlords Need to Know" },
  "a-basic-guide-to-the-land-tribunal-and-the-mobile-phone-mast-lease-process": {
    primaryQuery: "phone mast tribunal process",
    seoTitle: "The Tribunals and the Phone Mast Lease Process",
    description: "How the First-tier Tribunal and Upper Tribunal handle phone mast renewals and Code rights applications, and what landowners can expect at each stage.",
  },
  "ai-lease-advice": { primaryQuery: "ai phone mast lease advice" },
  "ap-wireless-ii": { primaryQuery: "ap wireless tribunal ruling" },
  "arqiva-assigns-sites-to-arqiva-services": { primaryQuery: "arqiva assigns sites" },
  "change-to-section-68-of-pstia-2022-and-how-it-will-impact-phone-mast-landlords": {
    primaryQuery: "psti act section 68 interim payments",
    seoTitle: "PSTI Act Section 68: Payments While a Case Is Decided",
  },
  "communications-code-2022": { primaryQuery: "electronic communications code 2022 reforms", seoTitle: "The 2022 Reforms to the Electronic Communications Code" },
  "compensation-claims": {
    primaryQuery: "phone mast compensation claim",
    description: "Phone mast compensation claims explained: the types of loss and damage you can claim under the Electronic Communications Code, and how to make the claim.",
  },
  "complexities-of-assignments-and-sharing-in-phone-mast-leases": {
    primaryQuery: "phone mast lease assignment sharing",
    description: "How assignment and site-sharing clauses work in phone mast leases, how the Code limits them, and what landlords can still protect.",
  },
  "compton-beauchamp-supreme-court-phone-mast-case": { primaryQuery: "compton beauchamp supreme court", seoTitle: "Compton Beauchamp: The Supreme Court Phone Mast Case" },
  "ctil-lost-appeal": { primaryQuery: "ctil appeal lost" },
  "ee-hutchison-clocktower-landowners-1954-act": {
    primaryQuery: "clocktower case 1954 act",
    seoTitle: "Clocktower Case: A 1954 Act Win for Mast Landowners",
    description: "The Clocktower decision: why operators cannot always use the Electronic Communications Code to escape protected 1954 Act telecoms leases.",
  },
  "farmer-mast-rent-halved-fees-what-landlords-can-do": { primaryQuery: "farmer mast rent halved bbc", seoTitle: "Mast Rent Halved and £5,000 in Fees: The BBC Story" },
  "fire-risk-assessment": { primaryQuery: "phone mast fire risk assessment" },
  "five-things-you-should-know-about-leasing-your-land-to-a-mobile-phone-mast-operator": { primaryQuery: "leasing land for a phone mast" },
  "forced-lease-renewals": {
    primaryQuery: "forced phone mast lease renewal",
    description: "Operators are serving Part 4 and Part 5 notices to force phone mast lease renewals. What the notices mean and how landlords should respond.",
  },
  "how-the-5g-rollout-will-impact-existing-phone-mast-leases-what-landlords-should-prepare-for": { primaryQuery: "5g phone mast lease" },
  "how-to-find-the-closest-phone-mast-to-you": { primaryQuery: "find closest phone mast" },
  "impact-of-phone-masts-on-environment": { primaryQuery: "phone mast environmental impact" },
  "key-players-roles-in-a-phone-mast-sale": { primaryQuery: "phone mast sale parties" },
  "maple-house-landmark-cases": {
    primaryQuery: "maple house case",
    description: "The Maple House decision in the Upper Tribunal and what it means for landlords with phone mast leases.",
  },
  "mast-sales-and-how-it-could-be-beneficial": { primaryQuery: "benefits of selling a phone mast" },
  "obsolete-phone-mast-guide": {
    primaryQuery: "obsolete phone mast",
    description: "An old mast on your land that nobody uses? How obsolete phone masts are decommissioned and what landlords can ask the operator to remove.",
  },
  "operator-rights-to-access-your-electricity-supply": {
    primaryQuery: "operator rights electricity supply",
    description: "The powers the Electronic Communications Code gives operators over your electricity supply, and what landlords can still require.",
  },
  "phone-mast-basics": {
    primaryQuery: "what is a phone mast",
    description: "What a phone mast is, how it works, the main types, and the planning, health and property questions landlords most often ask about them.",
  },
  "phone-mast-operator-breach-of-agreement": { primaryQuery: "phone mast operator breach", seoTitle: "Phone Mast Operator Breach: Your Rights and Notices" },
  "phone-mast-renewal-letter": { primaryQuery: "phone mast renewal letter", seoTitle: "Received a Phone Mast Renewal Letter?" },
  "phone-mast-roof-damage": {
    primaryQuery: "phone mast roof damage",
    description: "Rooftop phone masts can damage roofs. Who is liable, how repairs are handled, and what your lease should say about it.",
  },
  "phone-mast-site-sharing-extra-rent": { primaryQuery: "phone mast site sharing extra rent" },
  "phone-mast-surveyor-understanding-this-role": { primaryQuery: "phone mast surveyor" },
  "property-value": { primaryQuery: "phone mast property value" },
  "psti-act-2026-landlord-rights": { primaryQuery: "psti act landlord rights" },
  "quadrant-house": { primaryQuery: "threadgold house case" },
  "redevelopment-and-phone-mast-removal": { primaryQuery: "redevelop land with phone mast" },
  "section-26-notices": {
    primaryQuery: "section 26 notice cases",
    seoTitle: "Section 26 Notices: What the Courts Have Decided",
    description: "Why operators serve Section 26 notices on phone mast leases, what Ashloch, Compton Beauchamp and Clocktower decided, and five common misunderstandings.",
  },
  "srn-mast-upgrades-landowners": {
    primaryQuery: "shared rural network mast upgrades",
    seoTitle: "Shared Rural Network Mast Upgrades: Landowner Guide",
    description: "The Shared Rural Network is upgrading rural masts to improve 4G coverage. What it means for landowners and the questions to ask the operator.",
  },
  "telecom-code-rights-vs-property-rights-what-every-phone-mast-landlord-should-know": { primaryQuery: "telecom code rights vs property rights" },
  "terminology-used-by-phone-mast-operators": {
    primaryQuery: "phone mast terminology",
    description: "Plain-English definitions of the terms phone mast operators use in letters, leases and notices, so landlords know what is being asked of them.",
  },
  "the-benefits-of-a-phone-mast": { primaryQuery: "benefits of hosting a phone mast" },
  "the-consequences-of-a-misplaced-phone-mast-lease": {
    primaryQuery: "misplaced phone mast lease",
    description: "Lost track of the lease for the mast on your land? The risks that creates for your rent and rights, and how to put it right.",
  },
  "the-kay-park-parish-church-tribunal-decision-a-turning-point-for-mast-landlords": {
    primaryQuery: "kay park parish church tribunal",
    seoTitle: "Kay Park Parish Church: The Tribunal Decision",
    description: "On Tower UK Ltd v the General Trustees of the Church of Scotland (Kay Park Parish Church): what the Lands Tribunal for Scotland decided.",
  },
  "the-pippingford-case": {
    primaryQuery: "pippingford case",
    description: "EE and Hutchison 3G v Morriss (Pippingford), County Court, January 2022: what the case decided about a telecoms lease and rent.",
  },
  "the-role-of-legal-counsel": { primaryQuery: "legal counsel phone mast negotiation" },
  "the-vodafone-three-joint-venture": { primaryQuery: "vodafone three merger mast landlords" },
  "types-of-phone-masts": {
    primaryQuery: "types of phone masts",
    description: "The types of phone mast, from lattice towers to rooftop installations, with what each means for landlords considering a telecoms lease.",
  },
  "uk-phone-mast-coverage-challenges": {
    primaryQuery: "uk phone mast coverage",
    description: "Why mobile coverage is still unreliable in parts of the UK, and what the coverage challenges mean for landlords with phone mast sites.",
  },
  "understanding-phone-mast-sale-process": {
    primaryQuery: "phone mast sale process",
    description: "How selling a phone mast lease or freehold works: the steps, your rights, the tax points and how to get the best value from a sale.",
  },
  "unpaid-electricity-costs": { primaryQuery: "unpaid phone mast electricity", seoTitle: "Unpaid Phone Mast Electricity Costs" },
  "vache-farm-telecom-case": { primaryQuery: "vache farm case" },
  "vodafonethree-mast-site-consolidation-landlords": {
    primaryQuery: "vodafonethree site consolidation",
    seoTitle: "VodafoneThree Site Consolidation: What It Means for You",
    description: "VodafoneThree is consolidating mast sites into one network. What that means for landlords whose Vodafone or Three site may be decommissioned.",
  },
  "what-do-the-psti-act-2026-changes-mean-for-phone-mast-landlords": { primaryQuery: "psti act 2026 changes" },
  "why-can-operators-force-a-mast": { primaryQuery: "can operators force a mast on my land" },
  "why-property-managers-are-turning-to-specialist-phone-mast-advisors-and-why-your-landlords-will-thank-you": {
    primaryQuery: "phone mast advice for property managers",
    seoTitle: "Phone Mast Advice for Property Managers",
  },
};

const BRAND_SUFFIX = " | Phone Mast Advice";

export function blogTitleTag(slug: string, postTitle: string): string {
  const override = BLOG_SEO[slug]?.seoTitle;
  if (override) return override.length + BRAND_SUFFIX.length <= TITLE_MAX ? `${override}${BRAND_SUFFIX}` : override;
  const withBrand = `${postTitle}${BRAND_SUFFIX}`;
  return withBrand.length <= TITLE_MAX ? withBrand : postTitle;
}

/** The excerpt cut to whole sentences within 155 characters, unless an override exists. */
export function blogDescription(slug: string, excerpt: string): string {
  const override = BLOG_SEO[slug]?.description;
  if (override) return override;
  let out = "";
  for (const sentence of excerpt.trim().split(/(?<=[.!?])\s+/)) {
    const candidate = `${out} ${sentence}`.trim();
    if (candidate.length > DESCRIPTION_MAX) break;
    out = candidate;
  }
  return out;
}
