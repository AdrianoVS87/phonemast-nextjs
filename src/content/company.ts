/**
 * Company facts: the single source of truth for who the firm is, how to reach it and what it may
 * claim. Pages, components and structured data read from here; tests/company-facts.test.ts fails
 * if a phone number, address or marketing claim is hard-coded anywhere else.
 *
 * Claims carry `confirmed`. Only confirmed claims are rendered (see `confirmedClaim`). Every
 * unconfirmed claim is listed, with the evidence needed, in docs/seo/needs-owner-confirmation.md.
 */

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
  /** What the owner must supply before `confirmed` can be set to true. */
  readonly evidenceNeeded: string;
}

export const COMPANY = {
  legalName: "The Phone Mast Advice Company Ltd",
  brandName: "Phone Mast Advice",
  /** Companies House, checked 24 Nov 2026. */
  registrationNumber: "13115582",
  incorporatedOn: "2021-01-06",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/13115582",
  registeredOffice: {
    label: "Registered office",
    streetAddress: "The Bristol Office, 2nd Floor, 5 High Street, Westbury on Trym",
    locality: "Bristol",
    postalCode: "BS9 3BY",
    country: "GB",
  } satisfies PostalAddress,
  phone: { display: "01691 791543", href: "tel:+441691791543", international: "+44 1691 791543" },
  email: "info@phonemastadvice.co.uk",
  /**
   * The number the live site linked to in November 2026. The repo's CLAUDE.md lists a different one
   * (447782412130); which is current is in docs/seo/needs-owner-confirmation.md.
   */
  whatsapp: { href: "https://wa.me/447843352654", display: "07843 352654" },
  /** Addresses as published in the footer and on the contact page before this change. */
  offices: [
    { label: "London", streetAddress: "167–169 Great Portland Street, 5th Floor", locality: "London", postalCode: "W1W 5PF", country: "GB" },
    { label: "Bristol", streetAddress: "5 High Street, Westbury on Trym", locality: "Bristol", postalCode: "BS9 3BY", country: "GB" },
    { label: "Oswestry", streetAddress: "Artillery Business Park", locality: "Oswestry", postalCode: "SY11 4AD", country: "GB" },
  ] satisfies readonly PostalAddress[],
  founder: {
    name: "Matt Restall",
    jobTitle: "Founder and Director",
    profilePath: "/team/matt-restall/",
    linkedIn: "https://www.linkedin.com/in/matthew-restall-7a64669b/",
    image: "/images/team/Matt-Restall.jpg",
  },
  /** Company social profiles for Organization.sameAs. None confirmed yet. */
  sameAs: [] as readonly string[],
  /** Structured-data form of STATEMENTS.serviceArea; keep the two in step. */
  areaServed: ["England", "Wales"],
  logo: "/images/logo.svg",
} as const;

/**
 * One sentence per topic, used everywhere the topic comes up. Changing a sentence here changes
 * it sitewide; that is the point.
 */
export const STATEMENTS = {
  /** The firm's core positioning, repeated across the site before this change. */
  independence: "We act only for landlords and site owners, never for operators.",
  /**
   * Owner's approved verb (repo CLAUDE.md: "instigated and advised on"). The case name and citation
   * come from src/content/legal.ts so the case is named the same way everywhere.
   */
  comptonBeauchamp: "Matt Restall instigated and advised on the Compton Beauchamp case in the Supreme Court.",
  /**
   * Existing homepage wording, chosen over "no-win, no-fee" (operator pages) because it is the more
   * cautious of the two. Awaiting the owner's approval as the single fee sentence.
   */
  fees: "Our fees are typically recovered from the improved rent or one-off payment we secure for you. We operate on a performance basis where possible.",
  freeReview: "Every instruction starts with a free, no-obligation review of your agreement or the operator's letter.",
  /**
   * Service area. The site said both "UK-wide" and "across England and Wales". The narrower
   * statement is used until the owner confirms work in Scotland and Northern Ireland.
   */
  serviceArea: "We advise landlords and landowners across England and Wales.",
} as const;

/** Marketing claims found on the site in November 2026. None is shown until confirmed. */
export const CLAIMS = {
  experienceYears: {
    text: "Over 30 years advising landlords on phone mast leases",
    confirmed: false,
    evidenceNeeded: "Whose experience (Matt's career, a predecessor firm?) and from which year. The company was incorporated on 6 January 2021.",
  },
  since1999: {
    text: "Acting for landlords since 1999",
    confirmed: false,
    evidenceNeeded: "What began in 1999, and a record that shows it.",
  },
  dealsCompleted: {
    text: "10,000+ mast deals completed",
    confirmed: false,
    evidenceNeeded: "How the 10,000 is counted (by whom, since when, which firms), and the record behind it.",
  },
  ricsSurveyors: {
    text: "RICS-registered surveyors",
    confirmed: false,
    evidenceNeeded: "Name, designation (MRICS or FRICS) and RICS membership number of each surveyor, so the profile can link to the RICS register.",
  },
  googleRating: {
    text: "Rated 5/5 on Google",
    confirmed: false,
    evidenceNeeded: "The Google Business Profile URL and the current review count.",
  },
  threeOffices: {
    text: "Offices in London, Bristol and Oswestry",
    confirmed: false,
    evidenceNeeded: "Whether each address is a staffed office where clients can meet the team, or a registered or virtual address.",
  },
  firstFirm: {
    text: "The first firm in the UK to have successfully fought back against operators and new legislation",
    confirmed: false,
    evidenceNeeded: "A published source for the claim, or agreement to drop it.",
  },
  mostSignificantRuling: {
    text: "The most significant UK telecoms ruling since the Telecommunications Act 1984",
    confirmed: false,
    evidenceNeeded: "A published source that describes Compton Beauchamp this way, or agreement to drop it.",
  },
} as const satisfies Record<string, Claim>;

export type ClaimId = keyof typeof CLAIMS;

/** The claim's text if the owner has confirmed it, otherwise `null`, so templates render nothing. */
export function confirmedClaim(id: ClaimId): string | null {
  const claim: Claim = CLAIMS[id];
  return claim.confirmed ? claim.text : null;
}
