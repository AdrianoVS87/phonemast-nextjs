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

export interface SocialProfile {
  readonly network: "Facebook" | "Instagram" | "X";
  readonly handle: string;
  readonly url: string;
}

/**
 * The firm's own social accounts, linked in the footer and listed in Organization.sameAs. Confirmed
 * 26 Nov 2026: all three are connected to the firm's Buffer account. The Instagram handle is due to
 * change to @phonemastadvice; update it here when it does.
 */
export const SOCIAL_PROFILES = [
  { network: "Facebook", handle: "phonemastadvice", url: "https://www.facebook.com/phonemastadvice" },
  { network: "Instagram", handle: "thephonemastadvicecompany", url: "https://www.instagram.com/thephonemastadvicecompany/" },
  { network: "X", handle: "phonemastadvice", url: "https://x.com/phonemastadvice" },
] as const satisfies readonly SocialProfile[];

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
    /** Named by Matt on 24 Nov 2026; institutions and years from his LinkedIn profile, read the same day. */
    qualifications: [
      { name: "BSc (Hons) Valuation Surveying", category: "degree", institution: "University of Staffordshire", years: "1998 to 2000" },
      { name: "HND Building Studies", category: "diploma", institution: "Liverpool John Moores University", years: "" },
    ],
    /**
     * From Matt's LinkedIn profile, read on 24 Nov 2026 at his request. LinkedIn lists nothing before 2000;
     * Matt says his experience goes back further (see CLAIMS.experienceYears), so the list is headed
     * "since 2000". The 2002 role is worded as Matt corrected it.
     */
    career: [
      { years: "2021 to present", role: "Founder and Managing Director", organisation: "The Phone Mast Advice Company Ltd" },
      { years: "2009 to present", role: "Director", organisation: "The Phone Mast Company Ltd" },
      { years: "2004 to 2009", role: "Director", organisation: "CRT Property Consultants, Chester" },
      {
        years: "2002 to 2004",
        role: "Asset Manager, UK National Site Share Manager of NTL and Crown Castle",
        organisation: "on behalf of Airwave / O2 UK Limited",
      },
      { years: "2000 to 2002", role: "Acquisition Surveyor", organisation: "Kingfisher Estates (Pentland), Manchester" },
    ],
    /** Matt's chosen wording, 24 Nov 2026. */
    careerSummary:
      "Matt began his career on the operators' side, acquiring and managing mast sites, so he knows how operators and their agents work. Since 2004 he has worked for property owners.",
    /** Matt's chosen wording, 24 Nov 2026 (the factual version, without the superlative). */
    reach:
      "Matt has represented landlords across the UK, from individual rural landowners to large corporate property portfolios, and keeps a database of comparable phone mast deals.",
  },
  /**
   * Rating and count as shown on the Google Maps listing on 24 Nov 2026 (4.8 from 12 reviews; Matt had
   * said 5/5). Matt asked for the rating alone, without the count, next to the Google G; the count stays
   * here for the record. Never Review or AggregateRating markup. Update when the listing changes.
   */
  googleReviews: { rating: 4.8, count: 12, url: "https://maps.app.goo.gl/3YtwqUoH7pkJ6MEu8" },
  /** Confirmed by Matt, 24 Nov 2026. */
  ricsMember: { name: "Andrew Chinn", designation: "MRICS" },
  /** Company social profiles for Organization.sameAs, from SOCIAL_PROFILES. */
  sameAs: SOCIAL_PROFILES.map((p) => p.url) as readonly string[],
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
    text: "Matt Restall has over 30 years' experience in the phone mast industry",
    confirmed: true,
    evidence:
      "Matt, 24 Nov 2026, asked twice: over 30 years is right and it is his own career, not the company's (incorporated 6 January 2021). His LinkedIn lists roles from April 2000 only, on the operators' side until 2004, so the wording covers the industry as a whole rather than advising landlords. The pre-2000 roles are an open question in docs/seo/needs-owner-confirmation.md.",
    stat: { value: "30+", label: "years of Matt's experience in the phone mast industry" },
  },
  combinedExperience: {
    text: "Specialist Telecom Surveyors & Mobile Phone Mast Agents | Over 41 Years of Combined Industry Experience",
    confirmed: true,
    evidence:
      "Owner's wording (24 Nov 2026), replacing the 30+ years figure in the homepage figures bar. A lower bound for the team, so it does not contradict Matt's own \"over 30 years\" on his profile.",
    stat: { value: "Specialist Telecom Surveyors & Mobile Phone Mast Agents", label: "Over 41 Years of Combined Industry Experience" },
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
    text: `Rated ${COMPANY.googleReviews.rating} out of 5 on Google`,
    confirmed: true,
    evidence: "Matt, 24 Nov 2026: profile link supplied; rating read from the listing the same day (4.8, not 5). Later the same day he asked to show the rating without the review count, with the Google G.",
    stat: { value: `${COMPANY.googleReviews.rating}/5`, label: "on Google" },
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
