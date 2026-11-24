/**
 * Legal reference data shared by every page: cases, legislation and the Tribunal rent figures.
 * One record per case, so a case is named and cited the same way everywhere.
 *
 * `url` is set only when the link was opened and the judgment matched (see `verifiedOn`).
 * Unverified sources render as plain text and are listed in docs/seo/needs-owner-confirmation.md.
 */

export interface CaseRecord {
  /** How the case is referred to in running text. */
  readonly shortName: string;
  /** Parties as they appear in the judgment heading. */
  readonly parties: string;
  /** Shorter party names, where the firm's own wording uses them. */
  readonly brief?: string;
  /** Neutral citation, or the tribunal's own reference where there is none. */
  readonly citation: string;
  readonly court: string;
  readonly year: number;
  readonly url?: string;
  readonly verifiedOn?: string;
}

const FCL = "https://caselaw.nationalarchives.gov.uk";

export const CASES = {
  comptonBeauchamp: {
    shortName: "Compton Beauchamp",
    parties: "Cornerstone Telecommunications Infrastructure Ltd v Compton Beauchamp Estates Ltd",
    /** The form Matt chose for the firm's own statement about the case (24 Nov 2026). */
    brief: "Cornerstone v Compton Beauchamp Estates",
    citation: "[2022] UKSC 18",
    court: "Supreme Court",
    year: 2022,
    url: `${FCL}/uksc/2022/18`,
    verifiedOn: "2026-11-24",
  },
  vacheFarm: {
    shortName: "Vache Farm",
    parties: "EE Ltd and Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd",
    citation: "[2024] UKUT 216 (LC)",
    court: "Upper Tribunal (Lands Chamber)",
    year: 2024,
    url: `${FCL}/ukut/lc/2024/216`,
    verifiedOn: "2026-11-24",
  },
  dalePark: {
    shortName: "Dale Park",
    parties: "On Tower UK Ltd v JH & FW Green Ltd",
    citation: "[2020] UKUT 348 (LC)",
    court: "Upper Tribunal (Lands Chamber)",
    year: 2020,
    url: `${FCL}/ukut/lc/2020/348`,
    verifiedOn: "2026-11-24",
  },
  daleParkAppeal: {
    shortName: "Dale Park (Court of Appeal)",
    parties: "On Tower UK Ltd v JH & FW Green Ltd",
    citation: "[2021] EWCA Civ 1858",
    court: "Court of Appeal",
    year: 2021,
    url: `${FCL}/ewca/civ/2021/1858`,
    verifiedOn: "2026-11-24",
  },
  affinityWater: {
    shortName: "Affinity Water",
    parties: "EE Ltd and Hutchison 3G UK Ltd v Affinity Water Ltd",
    citation: "[2022] UKUT 8 (LC)",
    court: "Upper Tribunal (Lands Chamber)",
    year: 2022,
    url: `${FCL}/ukut/lc/2022/8`,
    verifiedOn: "2026-11-24",
  },
  londonQuadrant: {
    shortName: "London & Quadrant",
    parties: "Cornerstone Telecommunications Infrastructure Ltd v London and Quadrant Housing Trust",
    citation: "[2020] UKUT 282 (LC)",
    court: "Upper Tribunal (Lands Chamber)",
    year: 2020,
    url: `${FCL}/ukut/lc/2020/282`,
    verifiedOn: "2026-11-24",
  },
  marksSpencer: {
    shortName: "Marks & Spencer",
    parties: "Cornerstone Telecommunications Infrastructure Ltd v Marks & Spencer plc",
    // The Tribunal's own reference. Affinity Water (paragraph 29) cites it as LTS/ECC/2019/34.
    citation: "LTS/ECC/2020/34",
    court: "Lands Tribunal for Scotland",
    year: 2021,
    // The Tribunal's site serves this page over http only (its https certificate is for another host).
    url: "http://www.lands-tribunal-scotland.org.uk/decisions/LTS.ECC.2020.34.a.html",
    verifiedOn: "2026-11-24",
  },
  firoka: {
    shortName: "CTIL v Firoka",
    parties: "Cornerstone Telecommunications Infrastructure Ltd v Firoka (Kings Cross) Ltd",
    citation: "BIR/00CN/ERO/2025/0637",
    court: "First-tier Tribunal (Property Chamber)",
    year: 2025,
    url: "https://www.gov.uk/residential-property-tribunal-decisions/bir-slash-00cn-slash-ero-slash-2025-slash-0637-cornerstone-telecommunicationsinfrastructure-limited-v-firoka-kings-cross-limited",
    verifiedOn: "2026-11-24",
  },
  islington: {
    shortName: "Islington",
    parties: "EE Ltd and Hutchison 3G UK Ltd v London Borough of Islington",
    citation: "[2019] UKUT 53 (LC)",
    court: "Upper Tribunal (Lands Chamber)",
    year: 2019,
    url: `${FCL}/ukut/lc/2019/53`,
    verifiedOn: "2026-11-24",
  },
  meyrickEstate: {
    shortName: "Meyrick Estate",
    parties: "EE Ltd and Hutchison 3G UK Ltd v Chichester and others (trustees of the Meyrick Estate)",
    citation: "[2019] UKUT 164 (LC)",
    court: "Upper Tribunal (Lands Chamber)",
    year: 2019,
    url: `${FCL}/ukut/lc/2019/164`,
    verifiedOn: "2026-11-24",
  },
  onTowerBt: {
    shortName: "On Tower v BT",
    parties: "On Tower UK Ltd v British Telecommunications plc",
    citation: "[2025] EWCA Civ 844",
    court: "Court of Appeal",
    year: 2025,
    url: `${FCL}/ewca/civ/2025/844`,
    verifiedOn: "2026-11-24",
  },
  pottingShed: {
    shortName: "Potting Shed",
    parties: "Vodafone Ltd v Potting Shed Bar and Gardens Ltd",
    citation: "[2023] EWCA Civ 825",
    court: "Court of Appeal",
    year: 2023,
    url: `${FCL}/ewca/civ/2023/825`,
    verifiedOn: "2026-11-24",
  },
  hanoverCapital: {
    shortName: "Hanover Capital",
    parties: "Vodafone Ltd v Hanover Capital Ltd",
    citation: "[2020] EW Misc 18 (CC)",
    court: "County Court",
    year: 2020,
    // Cited in Affinity Water and Vache Farm; the BAILII copy could not be opened to verify.
  },
} as const satisfies Record<string, CaseRecord>;

export type CaseId = keyof typeof CASES;

export interface LegislationRecord {
  readonly title: string;
  readonly url: string;
  /**
   * legislation.gov.uk refuses automated requests (AWS WAF challenge), so these links could not be
   * opened from the build machine. They follow the site's documented URI scheme and are rendered
   * only once a person has opened each one and set this date.
   */
  readonly verifiedOn?: string;
}

const LEG = "https://www.legislation.gov.uk";

export const LEGISLATION = {
  code: { title: "Electronic Communications Code (Schedule 3A to the Communications Act 2003)", url: `${LEG}/ukpga/2003/21/schedule/3A` },
  digitalEconomyAct: { title: "Digital Economy Act 2017", url: `${LEG}/ukpga/2017/30` },
  landlordTenantAct1954: { title: "Landlord and Tenant Act 1954", url: `${LEG}/ukpga/Eliz2/2-3/56` },
  section34A: { title: "Section 34A of the Landlord and Tenant Act 1954", url: `${LEG}/ukpga/Eliz2/2-3/56/section/34A` },
  psti: { title: "Product Security and Telecommunications Infrastructure Act 2022", url: `${LEG}/ukpga/2022/46` },
  telecomsAct1984: { title: "Telecommunications Act 1984, Schedule 2", url: `${LEG}/ukpga/1984/12/schedule/2` },
} as const satisfies Record<string, LegislationRecord>;

export type LegislationId = keyof typeof LEGISLATION;

/** Government announcement that the 2017 reforms were meant to bring down rents. Opened 24 Nov 2026. */
export const GOVERNMENT_SOURCES = {
  reforms2017: {
    title: "Reforms to boost UK's digital infrastructure (DCMS, 19 October 2017)",
    url: "https://www.gov.uk/government/news/reforms-to-boost-uks-digital-infrastructure",
    verifiedOn: "2026-11-24",
  },
} as const;

export interface RentFigure {
  readonly siteType: string;
  /** Annual consideration in pounds. */
  readonly annual: number;
  readonly caseId: CaseId;
  /** What the figure is, in the decision's own terms. */
  readonly basis: string;
}

/**
 * Annual consideration figures from published decisions, each checked against the judgment on
 * 24 Nov 2026. Both guides read this list; neither page holds its own numbers.
 */
export const RENT_FIGURES: readonly RentFigure[] = [
  { siteType: "Standard rural mast (greenfield)", annual: 1750, caseId: "vacheFarm", basis: "Set by the Upper Tribunal for a rural mast site" },
  { siteType: "Rural mast next to housing", annual: 1200, caseId: "dalePark", basis: "Set by the Upper Tribunal for a woodland site near homes" },
  { siteType: "Water tower", annual: 3300, caseId: "affinityWater", basis: "Set by the Upper Tribunal, including a break-clause allowance" },
  { siteType: "City rooftop, department store or offices", annual: 3850, caseId: "marksSpencer", basis: "Set by the Lands Tribunal for Scotland (Edinburgh)" },
  { siteType: "City rooftop, residential building", annual: 5000, caseId: "londonQuadrant", basis: "Set by the Upper Tribunal" },
];

/** The rural figure before Vache Farm: suggested in Dale Park as likely for a standard greenfield site. */
export const EARLIER_RURAL_FIGURE = { annual: 750, caseId: "dalePark" as CaseId };

export function formatPounds(amount: number): string {
  return `£${amount.toLocaleString("en-GB")}`;
}

/** "£1,750": the published figure for the decision, formatted. Throws if the decision has no figure. */
export function rentFigure(caseId: CaseId): string {
  const figure = RENT_FIGURES.find((f) => f.caseId === caseId);
  if (!figure) throw new Error(`No rent figure for ${caseId}`);
  return formatPounds(figure.annual);
}

/** "£1,200 to £5,000 a year": the span of the published figures, for summaries. */
export function rentFigureRange(figures: readonly RentFigure[] = RENT_FIGURES): { low: number; high: number } {
  const values = figures.map((f) => f.annual);
  return { low: Math.min(...values), high: Math.max(...values) };
}
