/**
 * Who holds a phone mast lease. One entry per company, keyed by the hub anchor that the old operator
 * URLs redirect to (OPERATOR_SECTIONS in src/seo/redirects.ts).
 *
 * Only facts that were already on the site and are stable are kept. Time-sensitive ones that the old
 * pages carried (site counts, Airwave's ownership and the Emergency Services Network timetable) are
 * listed in docs/seo/needs-owner-confirmation.md instead.
 */
export interface OperatorEntry {
  readonly id: string;
  readonly name: string;
  /** Plain-English paragraphs about the company and how leases are held. */
  readonly about: readonly string[];
  readonly related?: { readonly label: string; readonly href: string };
}

export const OPERATORS: readonly OperatorEntry[] = [
  {
    id: "vodafone",
    name: "Vodafone and VodafoneThree",
    about: [
      "Vodafone and Three completed their merger on 31 May 2025 and now trade as VodafoneThree, which is combining the two networks' mast sites.",
      "Vodafone shares mast infrastructure with O2 through CTIL (Cornerstone), so a Vodafone site may be held by Vodafone or by CTIL.",
    ],
    related: { label: "What VodafoneThree's site consolidation means for you", href: "/blog/vodafonethree-mast-site-consolidation-landlords/" },
  },
  {
    id: "o2",
    name: "O2 (Telefónica UK)",
    about: [
      "O2 is the trading name of Telefónica UK Ltd. Your lease may name Telefónica UK, O2 or CTIL (Cornerstone), which manages the infrastructure O2 shares with Vodafone.",
      "O2 is not part of MBNL, which is the EE and Three joint venture.",
    ],
  },
  {
    id: "ee",
    name: "EE (BT Group)",
    about: [
      "EE is part of BT Group. EE and Three share network infrastructure through MBNL (Mobile Broadband Network Limited), so an EE lease may be held by EE Limited or by MBNL.",
    ],
  },
  {
    id: "three",
    name: "Three (Hutchison 3G UK)",
    about: [
      "Three is Hutchison 3G UK Ltd. It shares infrastructure with EE through MBNL, so a Three lease may be held by Hutchison 3G UK Ltd or by MBNL.",
      "Since 31 May 2025 Three has been part of VodafoneThree.",
    ],
    related: { label: "The Vodafone and Three merger and mast landlords", href: "/blog/the-vodafone-three-joint-venture/" },
  },
  {
    id: "ctil-cornerstone",
    name: "CTIL (Cornerstone)",
    about: [
      "CTIL and Cornerstone are the same company: Cornerstone Telecommunications Infrastructure Limited is the legal name and Cornerstone the brand. It manages the mast infrastructure that Vodafone and O2 share.",
    ],
    related: { label: "The Compton Beauchamp case against CTIL", href: "/blog/compton-beauchamp-supreme-court-phone-mast-case/" },
  },
  {
    id: "on-tower",
    name: "On Tower (formerly Arqiva)",
    about: [
      "Arqiva sold its mobile mast business to Cellnex in 2020. That business is now On Tower UK Ltd, part of the Cellnex group, and Arqiva now works only on broadcast transmitters for television and radio.",
      "If your lease for a mobile mast names Arqiva or Arqiva Services, the company you deal with today is On Tower.",
    ],
    related: { label: "Arqiva's assignment of sites", href: "/blog/arqiva-assigns-sites-to-arqiva-services/" },
  },
  {
    id: "cellnex",
    name: "Cellnex",
    about: [
      "Cellnex is an independent tower company that acquired On Tower UK, the former Arqiva mobile business. As a neutral host it leases space on its masts to several networks, so more than one operator may use a Cellnex site on your land.",
    ],
  },
  {
    id: "airwave",
    name: "Airwave Solutions",
    about: [
      "Airwave Solutions runs the Airwave network, the TETRA radio system used by the police, fire and ambulance services. Its masts serve the emergency services rather than mobile phone customers.",
    ],
  },
  {
    id: "wireless-infrastructure-group",
    name: "Wireless Infrastructure Group (WIG)",
    about: [
      "WIG is an independent infrastructure company, not a mobile network. It builds and manages towers that host several networks, so a single WIG lease can cover equipment from more than one operator.",
    ],
  },
];
