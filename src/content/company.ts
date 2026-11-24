/**
 * Company facts: the single source of truth for who the firm is, how to reach it and what it may
 * claim. Pages, components and structured data read from here; tests/company-facts.test.ts fails
 * if a phone number, address or marketing claim is hard-coded anywhere else.
 *
 * Claims carry `confirmed`. Only confirmed claims are rendered (see `confirmedClaim`). Matt answered
 * every open question on 24 Nov 2026; the answers are recorded in docs/seo/needs-owner-confirmation.md.
 */
import { CASES } from "./legal.ts";

export interface PostalAddress {
  readonly label: string;
  readonly streetAddress: string;
  readonly locality: string;
  readonly postalCode: string;
  readonly country: "GB";
}

export interface Claim {
  /** Exact wording that may appear on the site once confirmed. */
  readonly text: string;
  readonly confirmed: boolean;
  /** Where the confirmation came from, or why the claim stays off the site. */
  readonly evidence: string;
  /** Short form for the homepage figures bar. */
  readonly stat?: { readonly value: string; readonly label: string };
  /** Where a reader can check the claim. */
  readonly href?: string;
}

export const COMPANY = {
  legalName: "The Phone Mast Advice Company Ltd",
  brandName: "Phone Mast Advice",
  /** Companies House, checked 24 Nov 2026. */
  registrationNumber: "13115582",
  incorporatedOn: "2021-01-06",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/13115582",
  registeredIn: "England and Wales",
  /**
   * The registered office as Companies House shows it. Matt (24 Nov 2026): there are no offices that
   * clients visit, so this is the only address on the site, shown as a legal line because the Companies
   * (Trading Disclosures) Regulations 2008 require it, and never called an office.
   */
  registeredOffice: {
    label: "Registered office",
    streetAddress: "The Bristol Office, 2nd Floor, 5 High Street, Westbury on Trym",
    locality: "Bristol",
    postalCode: "BS9 3BY",
    country: "GB",
  } satisfies PostalAddress,
  phone: { display: "01691 791543", href: "tel:+441691791543", international: "+44 1691 791543" },
  email: "info@phonemastadvice.co.uk",
  /** Confirmed by Matt, 24 Nov 2026. */
  whatsapp: { href: "https://wa.me/447843352654", display: "07843 352654" },
  founder: {
    name: "Matt Restall",
    jobTitle: "Founder and Director",
    profilePath: "/team/matt-restall/",
    linkedIn: "https://www.linkedin.com/in/matthew-restall-7a64669b/",
    image: "/images/team/Matt-Restall.jpg",
    /** Confirmed by Matt, 24 Nov 2026. */
    qualifications: [
      { name: "HND Building Studies", category: "diploma" },
      { name: "BSc (Hons) Valuation Surveying", category: "degree" },
    ],
  },
  /** Confirmed by Matt, 24 Nov 2026. Shown as text with a link, never as Review or AggregateRating markup. */
  googleReviews: { rating: 5, count: 12, url: "https://maps.app.goo.gl/3YtwqUoH7pkJ6MEu8" },
  /** Confirmed by Matt, 24 Nov 2026. */
  ricsMember: { name: "Andrew Chinn", designation: "MRICS" },
  /** Company social profiles for Organization.sameAs. None confirmed yet. */
  sameAs: [] as readonly string[],
  /** Structured-data form of STATEMENTS.serviceArea; keep the two in step. */
  areaServed: ["United Kingdom"],
  logo: "/images/logo.svg",
} as const;

/** The disclosure line required on the website: registration, number and registered office. */
export function registrationLine(): string {
  const o = COMPANY.registeredOffice;
  return `Registered in ${COMPANY.registeredIn}, company number ${COMPANY.registrationNumber}. Registered office: ${o.streetAddress}, ${o.locality} ${o.postalCode}.`;
}

const compton = CASES.comptonBeauchamp;

/**
 * Matt's chosen wording for the Compton Beauchamp case (24 Nov 2026, version 1). Rendered with the
 * citation linked by <ComptonStatement />; `text` is the plain form for places without links.
 */
export const COMPTON_STATEMENT = {
  heading: "The firm behind the Compton Beauchamp case",
  lead: "We instigated and oversaw",
  caseName: compton.brief,
  citation: compton.citation,
  holding:
    "in which the Supreme Court confirmed that operators with leases protected by the Landlord and Tenant Act 1954 must renew under that Act.",
  get text(): string {
    return `${this.lead} ${this.caseName} ${this.citation}, ${this.holding}`;
  },
} as const;

/**
 * One sentence per topic, used everywhere the topic comes up. Changing a sentence here changes
 * it sitewide; that is the point.
 */
export const STATEMENTS = {
  /** The firm's core positioning, repeated across the site before this change. */
  independence: "We act only for landlords and site owners, never for operators.",
  comptonBeauchamp: COMPTON_STATEMENT.text,
  /** Matt's wording, 24 Nov 2026. Replaces both "performance basis where possible" and "no-win, no-fee". */
  fees: "Our fees are incentivised and tied to the results we achieve for you. We seek a contribution from the operator wherever the law allows, but we are never solely dependent on it, so our advice always remains entirely independent in your interest.",
  freeReview: "Every instruction starts with a free, no-obligation review of your agreement or the operator's letter.",
  /** Confirmed by Matt, 24 Nov 2026: instructions are taken across the whole UK. */
  serviceArea: "We advise landlords and landowners across the United Kingdom.",
} as const;

/** Marketing claims found on the site in November 2026, with Matt's answers of 24 Nov 2026. */
export const CLAIMS = {
  experienceYears: {
    text: "Matt Restall has advised landlords on phone masts for over 30 years",
    confirmed: true,
    evidence: "Matt, 24 Nov 2026: the experience is Matt's own career, not the company's (incorporated 6 January 2021).",
    stat: { value: "30+", label: "years of Matt's experience advising landlords" },
  },
  since1999: {
    text: "Acting for landlords since 1999",
    confirmed: false,
    evidence: "Not confirmed: Matt described the experience as his career and gave no start year.",
  },
  dealsCompleted: {
    text: "10,000+ mast deals completed",
    confirmed: true,
    evidence: "Matt, 24 Nov 2026: accurate and he stands behind it.",
    stat: { value: "10,000+", label: "mast deals completed" },
  },
  ricsSurveyors: {
    text: `Our Head Surveyor, ${COMPANY.ricsMember.name} ${COMPANY.ricsMember.designation}, is a member of the Royal Institution of Chartered Surveyors`,
    confirmed: true,
    evidence: "Matt, 24 Nov 2026: Andrew Chinn is MRICS. No membership number was given, so the RICS register is not linked.",
  },
  googleRating: {
    text: `Rated ${COMPANY.googleReviews.rating}/5 on Google from ${COMPANY.googleReviews.count} reviews`,
    confirmed: true,
    evidence: "Matt, 24 Nov 2026: profile link and review count supplied.",
    stat: { value: `${COMPANY.googleReviews.rating}/5`, label: `on Google, from ${COMPANY.googleReviews.count} reviews` },
    href: COMPANY.googleReviews.url,
  },
  threeOffices: {
    text: "Offices in London, Bristol and Oswestry",
    confirmed: false,
    evidence: "Dropped. Matt, 24 Nov 2026: there are no offices where clients meet the team.",
  },
  verifiedTestimonials: {
    text: "Verified client",
    confirmed: true,
    evidence: "Matt, 24 Nov 2026: every testimonial is from a real client who agreed to be quoted.",
  },
  firstFirm: {
    text: "The first firm in the UK to have successfully fought back against operators and new legislation",
    confirmed: false,
    evidence: "Dropped. Replaced by Matt's Compton Beauchamp wording (COMPTON_STATEMENT).",
  },
  mostSignificantRuling: {
    text: "The most significant UK telecoms ruling since the Telecommunications Act 1984",
    confirmed: false,
    evidence: "Dropped. Replaced by Matt's Compton Beauchamp wording (COMPTON_STATEMENT).",
  },
} as const satisfies Record<string, Claim>;

export type ClaimId = keyof typeof CLAIMS;

/** The claim if the owner has confirmed it, otherwise `null`, so templates render nothing. */
export function confirmedClaimRecord(id: ClaimId): Claim | null {
  const claim: Claim = CLAIMS[id];
  return claim.confirmed ? claim : null;
}

/** The claim's text if the owner has confirmed it, otherwise `null`. */
export function confirmedClaim(id: ClaimId): string | null {
  return confirmedClaimRecord(id)?.text ?? null;
}
