/**
 * Every page that is not a blog post: one search intent per URL (docs/seo/intent-map.md), its
 * title and description, and the date its substance was last reviewed.
 *
 * `lastReviewed` changes only when a person reviews and changes the substance of the page. It feeds
 * the visible "Last reviewed" line, Article.dateModified and the sitemap's <lastmod>; nothing sets
 * it at build time.
 *
 * tests/routes.test.ts enforces: unique primary queries, unique titles and descriptions, titles of
 * 60 characters or fewer, descriptions of 155 or fewer, and no year in a guide title.
 */
import type { PageSeo } from "./metadata.ts";
import { COMPANY } from "../content/company.ts";

export type RouteKind = "home" | "guide" | "service" | "hub" | "location" | "profile" | "company" | "contact" | "form" | "index" | "policy";

export interface RouteEntry extends PageSeo {
  readonly kind: RouteKind;
  /** The one query this URL is optimised for. No two URLs share one. */
  readonly primaryQuery: string;
  /** ISO date of the last substantive review. Omit for pages with no reviewable substance. */
  readonly lastReviewed?: string;
  readonly published?: string;
  /** Key into PEOPLE (src/content/people.ts) for the named reviewer shown on the page. */
  readonly reviewer?: "mattRestall";
}

const route = (entry: RouteEntry): RouteEntry => entry;

export const ROUTES = {
  home: route({
    path: "/",
    lastReviewed: "2026-11-24",
    kind: "home",
    primaryQuery: "phone mast advice",
    title: "Phone Mast Advice | Independent Help for Mast Landlords",
    description: `Specialist surveyors who act only for landlords with a phone mast. Free review of your agreement or the operator's letter. Call ${COMPANY.phone.display}.`,
  }),
  rentGuide: route({
    path: "/phone-mast-rent/",
    kind: "guide",
    primaryQuery: "phone mast rent",
    title: "Phone Mast Rent: Tribunal Figures and What to Claim",
    description: "What phone masts pay: published Tribunal figures by site type, how the rent is valued, and the fees and costs you can claim on top of it.",
    published: "2026-03-30",
    lastReviewed: "2026-11-24",
    reviewer: "mattRestall",
    type: "article",
  }),
  leaseGuide: route({
    path: "/phone-mast-lease/",
    kind: "guide",
    primaryQuery: "phone mast lease",
    title: "Phone Mast Lease: Plain-English Guide for Landowners",
    description: "What a phone mast lease is, how long it runs, what it pays, whether you can refuse or end it, and the operator rights that override its terms.",
    published: "2026-03-30",
    lastReviewed: "2026-11-24",
    reviewer: "mattRestall",
    type: "article",
  }),
  operators: route({
    path: "/phone-mast-operators/",
    kind: "hub",
    primaryQuery: "phone mast operators",
    title: "Phone Mast Operators: Who Your Lease Is With",
    description: "Vodafone, O2, EE, Three, CTIL, On Tower, Cellnex, Airwave and WIG: which company holds your mast lease and who is likely to write to you.",
    lastReviewed: "2026-11-24",
    reviewer: "mattRestall",
  }),
  services: route({
    path: "/phone-mast-services/",
    lastReviewed: "2026-09-15",
    kind: "hub",
    primaryQuery: "phone mast services",
    title: "Services for Phone Mast Landlords | Phone Mast Advice",
    description: "Rent reviews, lease renewals, new lettings, mast sales, removals and electricity cost recovery, handled for landlords and site owners.",
  }),
  rentReviews: route({
    path: "/phone-mast-services/rent-reviews/",
    kind: "service",
    primaryQuery: "phone mast rent review",
    title: "Phone Mast Rent Review Service | Phone Mast Advice",
    description: "We run your phone mast rent review: check the operator's figure, gather evidence, negotiate the rent and terms, and recover our fees where possible.",
    lastReviewed: "2026-11-24",
    reviewer: "mattRestall",
  }),
  leaseRenewals: route({
    path: "/phone-mast-services/lease-renewals/",
    lastReviewed: "2026-10-19",
    kind: "service",
    primaryQuery: "phone mast lease renewal",
    title: "Phone Mast Lease Renewal Service | Phone Mast Advice",
    description: "Hands-on help when an operator wants to renew your phone mast lease: notices, deadlines, the new rent and terms, and the Tribunal if it comes to it.",
    reviewer: "mattRestall",
  }),
  newLettings: route({
    path: "/phone-mast-services/new-lettings/",
    lastReviewed: "2026-10-19",
    kind: "service",
    primaryQuery: "new phone mast on my land",
    title: "New Phone Mast on Your Land? Letting Advice",
    description: "An operator wants to put a new mast on your land or roof. What to agree, what to refuse, and how we negotiate the letting for you.",
    reviewer: "mattRestall",
  }),
  mastSales: route({
    path: "/phone-mast-services/mast-sales/",
    lastReviewed: "2026-10-19",
    kind: "service",
    primaryQuery: "sell phone mast site",
    title: "Selling Your Mast Site Income | Phone Mast Advice",
    description: "Thinking of selling the income from a phone mast site for a lump sum? How sales work, who buys, and how we test an offer before you accept.",
    reviewer: "mattRestall",
  }),
  removal: route({
    path: "/phone-mast-services/removal-and-redevelopment/",
    lastReviewed: "2026-10-19",
    kind: "service",
    primaryQuery: "phone mast removal redevelopment",
    title: "Removing a Phone Mast to Redevelop | Phone Mast Advice",
    description: "Want a mast off your land so you can redevelop? The notices, grounds and timescales, and how we take the process forward for you.",
    reviewer: "mattRestall",
  }),
  electricity: route({
    path: "/phone-mast-services/electricity-costs-recovery/",
    lastReviewed: "2026-10-19",
    kind: "service",
    primaryQuery: "phone mast electricity costs",
    title: "Recover Phone Mast Electricity Costs | Phone Mast Advice",
    description: "If a mast runs off your electricity supply, you can recover what it uses. How the operator's share is worked out and how we claim it.",
    reviewer: "mattRestall",
  }),
  otherServices: route({
    path: "/phone-mast-services/other-services/",
    lastReviewed: "2026-10-19",
    kind: "service",
    primaryQuery: "phone mast wayleave",
    title: "Wayleaves, Lift and Shift, Site Audits | Phone Mast Advice",
    description: "Wayleaves, lift and shift, breaches, upgrade requests and site audits for phone mast landlords, handled by specialist surveyors.",
    reviewer: "mattRestall",
  }),
  leaseRetrievals: route({
    path: "/phone-mast-services/lease-retrievals/",
    lastReviewed: "2026-10-19",
    kind: "service",
    primaryQuery: "lost phone mast lease",
    title: "Lost Your Phone Mast Lease? Lease Retrieval",
    description: "Can't find the lease for the mast on your land? We help trace the documents, clarify the records and search the archives so nothing is missed.",
    reviewer: "mattRestall",
  }),
  solicitors: route({
    path: "/phone-mast-solicitors/",
    lastReviewed: "2026-10-19",
    kind: "guide",
    primaryQuery: "phone mast solicitor",
    title: "Phone Mast Solicitor or Surveyor: Who You Need",
    description: "When a phone mast matter needs a solicitor, when it needs a specialist surveyor, who pays their fees, and how the two work together.",
    reviewer: "mattRestall",
  }),
  code: route({
    path: "/electronic-communications-code/",
    lastReviewed: "2026-10-19",
    kind: "guide",
    primaryQuery: "electronic communications code",
    title: "Electronic Communications Code: Guide for Landowners",
    description: "The Electronic Communications Code in plain English: the rights it gives operators, how payment is assessed, and how Code agreements end.",
    reviewer: "mattRestall",
  }),
  section26: route({
    path: "/section-26-notice/",
    lastReviewed: "2026-10-19",
    kind: "guide",
    primaryQuery: "section 26 notice phone mast",
    title: "Section 26 Notice on a Phone Mast Lease",
    description: "An operator has served a Section 26 request on your phone mast lease. What it means, the deadlines that start running, and what to do next.",
    reviewer: "mattRestall",
  }),
  faq: route({
    path: "/faq/",
    lastReviewed: "2026-10-19",
    kind: "company",
    primaryQuery: "phone mast questions",
    title: "Phone Mast Questions Answered | Phone Mast Advice",
    description: "Short answers to the questions landlords ask us most about phone mast rent, leases, renewals, operators and our fees.",
  }),
  handbook: route({
    path: "/handbook/",
    lastReviewed: "2026-10-19",
    kind: "form",
    primaryQuery: "phone mast landlord handbook",
    title: "Free Phone Mast Handbook for Landlords | Phone Mast Advice",
    description: "Download our free handbook for landlords with a phone mast: the Code, rent, renewals and the questions to ask before you sign anything.",
  }),
  about: route({
    path: "/about-us/",
    lastReviewed: "2026-10-19",
    kind: "company",
    primaryQuery: "the phone mast advice company",
    title: "About The Phone Mast Advice Company",
    description: "Who we are and how we work: specialist surveyors acting only for landlords and site owners with phone masts, never for operators.",
  }),
  team: route({
    path: "/team/",
    lastReviewed: "2026-10-19",
    kind: "company",
    primaryQuery: "phone mast advice team",
    title: "Our Team | Phone Mast Advice",
    description: "Meet the people who review your agreement, negotiate with the operator and keep you informed, led by founder Matt Restall.",
  }),
  mattRestall: route({
    path: "/team/matt-restall/",
    lastReviewed: "2026-10-19",
    kind: "profile",
    primaryQuery: "matt restall",
    title: "Matt Restall, Founder | Phone Mast Advice",
    description: "Matt Restall founded The Phone Mast Advice Company and reviews its guides. His work, the cases he was involved in, and how to contact him.",
    type: "profile",
  }),
  contact: route({
    path: "/contact/",
    lastReviewed: "2026-09-15",
    kind: "contact",
    primaryQuery: "contact phone mast advice",
    title: "Contact Us | Phone Mast Advice",
    description: `Call ${COMPANY.phone.display}, email ${COMPANY.email} or send us your question. We reply to every enquiry from a landlord or site owner.`,
  }),
  blog: route({
    path: "/blog/",
    lastReviewed: "2026-11-24",
    kind: "index",
    primaryQuery: "phone mast news",
    title: "Phone Mast News and Case Notes | Phone Mast Advice",
    description: "Case notes, law changes and operator news for landlords with a phone mast, written and reviewed by our specialist surveyors.",
  }),
  freeRentEstimate: route({
    path: "/free-rent-estimate/",
    lastReviewed: "2026-09-15",
    kind: "form",
    primaryQuery: "phone mast rent estimate",
    title: "Free Phone Mast Rent Estimate | Phone Mast Advice",
    description: "Tell us about your site and we will estimate what the mast should pay, free and without obligation, compared with published Tribunal figures.",
  }),
  freeLeaseCheck: route({
    path: "/free-lease-check/",
    lastReviewed: "2026-09-15",
    kind: "form",
    primaryQuery: "phone mast lease check",
    title: "Free Phone Mast Lease Check | Phone Mast Advice",
    description: "Send us your lease or the operator's letter and we will tell you, free, which rules apply, what the deadlines are and what to do next.",
  }),
  london: route({
    path: "/locations/london/",
    lastReviewed: "2026-09-15",
    kind: "location",
    primaryQuery: "phone mast advice london",
    title: "Phone Mast Advice in London | Phone Mast Advice",
    description: "Phone mast advice for London landlords and rooftop owners from our office on Great Portland Street, W1W 5PF.",
  }),
  bristol: route({
    path: "/locations/bristol/",
    lastReviewed: "2026-09-15",
    kind: "location",
    primaryQuery: "phone mast advice bristol",
    title: "Phone Mast Advice in Bristol | Phone Mast Advice",
    description: "Phone mast advice for landlords and site owners from our Bristol office at 5 High Street, Westbury on Trym, BS9 3BY.",
  }),
  oswestry: route({
    path: "/locations/oswestry/",
    lastReviewed: "2026-09-15",
    kind: "location",
    primaryQuery: "phone mast advice oswestry",
    title: "Phone Mast Advice in Oswestry | Phone Mast Advice",
    description: "Phone mast advice for landowners and site owners from our Oswestry office at Artillery Business Park, SY11 4AD.",
  }),
  privacy: route({ path: "/privacy-policy/", kind: "policy", primaryQuery: "phone mast advice privacy policy", title: "Privacy Policy | Phone Mast Advice", description: "How The Phone Mast Advice Company Ltd collects, uses and protects your personal data, and the rights you have over it.", noIndex: true }),
  cookies: route({ path: "/cookie-policy/", kind: "policy", primaryQuery: "phone mast advice cookie policy", title: "Cookie Policy | Phone Mast Advice", description: "The cookies this website uses, what each one does, and how to change your choices at any time.", noIndex: true }),
  disclaimer: route({ path: "/disclaimer/", kind: "policy", primaryQuery: "phone mast advice disclaimer", title: "Disclaimer | Phone Mast Advice", description: "The terms on which the information on this website is provided. It is general guidance, not advice on your site.", noIndex: true }),
} as const satisfies Record<string, RouteEntry>;

export type RouteId = keyof typeof ROUTES;

export const ALL_ROUTES: readonly RouteEntry[] = Object.values(ROUTES);

export function routeByPath(path: string): RouteEntry | undefined {
  return ALL_ROUTES.find((r) => r.path === path);
}
