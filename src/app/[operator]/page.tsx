import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

// ── Operator data ────────────────────────────────────────────────────────────

interface OperatorData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string[];
  keyFacts: string[];
  commonScenarios: string[];
  faqs: FAQItem[];
}

const operators: Record<string, OperatorData> = {
  "vodafone-phone-mast-lease": {
    slug: "vodafone-phone-mast-lease",
    name: "Vodafone",
    metaTitle: "Vodafone Phone Mast Lease | Expert Landlord Advice | UK Specialists",
    metaDescription:
      "Expert advice for UK landlords with a Vodafone phone mast lease. We negotiate rent reviews, lease renewals, and new lettings with Vodafone on your behalf. Free consultation.",
    heroHeadline: "Vodafone Phone Mast Lease Advice for UK Landlords",
    heroSubheadline:
      "Independent specialists acting only for landlords in negotiations with Vodafone.",
    intro: [
      "Vodafone is one of the UK's largest mobile network operators with thousands of phone mast sites on privately owned land. If you have a Vodafone phone mast lease, you need independent specialist advice to ensure the terms and rent reflect the true value of your site.",
      "Vodafone, like all major operators, employs experienced agents to minimise lease costs. Without specialist representation, UK landlords regularly accept below-market rents and unfavourable lease terms that persist for years.",
      "The Phone Mast Advice Company acts exclusively for landlords — never for mobile phone operators. We bring over 25 years of experience and an extensive database of comparable Vodafone mast deals to every negotiation.",
    ],
    keyFacts: [
      "Vodafone operates thousands of mast sites across the UK, including rooftops, greenfield towers, and street furniture",
      "Vodafone shares infrastructure with O2 through CTIL/Cornerstone, their joint venture infrastructure company",
      "Vodafone's agents are experienced commercial negotiators — you need specialist representation",
      "The Electronic Communications Code (ECC), revised under the Digital Economy Act 2017, affects how Vodafone calculates and proposes rent",
      "Lease renewals with Vodafone can trigger significant rent reduction proposals — expert advice is critical",
    ],
    commonScenarios: [
      "Vodafone or their agents have written requesting a rent review or lease renewal",
      "You have received Heads of Terms from Vodafone or CTIL/Cornerstone proposing a lower rent",
      "Your lease is approaching expiry and Vodafone has not yet made contact",
      "Vodafone is requesting access for equipment upgrades or site sharing with another operator",
      "You have been offered a lump sum premium to sell your Vodafone mast lease income stream",
      "You are considering whether to grant a new Vodafone mast lease on your land",
    ],
    faqs: [
      {
        question: "Can Vodafone reduce my phone mast rent?",
        answer:
          "Under the Electronic Communications Code introduced by the Digital Economy Act 2017, Vodafone can apply to the Upper Tribunal (Lands Chamber) for a rent to be assessed under the 'no-scheme' valuation model. This often produces lower figures than traditional market rents. However, specialist advice can significantly improve your negotiating position and the outcome.",
      },
      {
        question: "Is Vodafone the same as CTIL or Cornerstone?",
        answer:
          "Vodafone and O2 jointly own CTIL (Cornerstone Telecommunications Infrastructure Limited), which manages their shared infrastructure. CTIL and Cornerstone are the same entity — CTIL is the legal name, Cornerstone is the brand. Depending on your lease documents, your landlord may be Vodafone, O2, or CTIL/Cornerstone.",
      },
      {
        question: "What should I do if Vodafone contacts me about my lease?",
        answer:
          "Contact us immediately before responding to Vodafone or their agents. Once you engage in dialogue or allow site surveys without professional support, you may prejudice your negotiating position. We offer a free initial consultation to assess your situation.",
      },
      {
        question: "How long does a Vodafone lease renewal negotiation take?",
        answer:
          "Timescales vary, but lease renewal negotiations with major operators such as Vodafone typically take several months. Early professional engagement significantly improves your position. We manage the entire process on your behalf.",
      },
      {
        question: "Can I sell my Vodafone phone mast lease?",
        answer:
          "Yes. Investors pay lump sum premiums for phone mast lease income streams. Selling provides a capital sum in place of ongoing annual rent. We advise on whether a sale is in your best interests and can facilitate the process.",
      },
      {
        question: "What is a typical rent for a Vodafone phone mast?",
        answer:
          "Vodafone mast rents vary considerably depending on location, site type, and when the lease was originally agreed. Urban rooftop sites may command higher rents than rural greenfield sites. Since 2017, Vodafone has sought to reduce rents under the Electronic Communications Code's 'no-scheme' valuation model. We have an extensive database of comparable Vodafone deals and can give you an honest assessment of what your site should be achieving.",
      },
      {
        question: "How does a Vodafone lease renewal work in practice?",
        answer:
          "Vodafone (or their agents acting as CTIL/Cornerstone) will typically serve a notice seeking to renew the lease, often proposing new Code terms and a lower rent. Landlords have the right to negotiate, and ultimately the matter can be referred to the Upper Tribunal (Lands Chamber) if agreement cannot be reached. The key is to engage specialist representation early — before responding to any initial contact.",
      },
      {
        question: "Vodafone has contacted me about upgrading the mast — what should I know?",
        answer:
          "Upgrade requests from Vodafone often come packaged with requests to alter lease terms or consolidate multiple agreements. Before agreeing to any upgrade works or lease variations, you should take specialist advice. Upgrades can provide leverage in negotiations, and any changes to your agreement need careful scrutiny.",
      },
      {
        question: "What does the Electronic Communications Code mean for Vodafone landlords?",
        answer:
          "The Electronic Communications Code (ECC), as amended by the Digital Economy Act 2017, gives Vodafone rights to apply for new Code agreements at low 'no-scheme' rents. For pre-2017 leases, Landlord and Tenant Act 1954 protections may apply, which can significantly improve your negotiating position. Specialist advice is essential to understand which regime applies to your specific lease.",
      },
      {
        question: "What are common Vodafone lease terms I should watch out for?",
        answer:
          "Key lease terms to scrutinise include: break clauses (in the operator's favour), upgrade rights (allowing significant equipment changes without notice or additional rent), sharing rights (allowing Vodafone to host other operators on your site), access provisions (time and method of access), and rent review mechanisms (especially CPI-linked or fixed uplift clauses that may be unfavourable). We review all proposed terms and advise on what is standard, what is unacceptable, and what is negotiable.",
      },
    ],
  },

  "o2-phone-mast-lease": {
    slug: "o2-phone-mast-lease",
    name: "O2",
    metaTitle: "O2 Phone Mast Lease | Specialist UK Landlord Advice",
    metaDescription:
      "Specialist advice for landlords with an O2 phone mast lease. We negotiate rent, lease renewals, and new lettings with O2 on your behalf. Free consultation — 01691 791543.",
    heroHeadline: "O2 Phone Mast Lease Advice for UK Landlords",
    heroSubheadline:
      "Independent experts negotiating with O2 on your behalf — protecting your rent and your rights.",
    intro: [
      "O2 (Telefónica UK Ltd) operates one of the UK's four main mobile networks, with a significant portfolio of phone mast sites on privately owned land. If O2 or their agents have contacted you about a lease renewal, rent review, or new agreement, specialist advice is essential.",
      "O2 shares infrastructure with Vodafone through CTIL (Cornerstone Telecommunications Infrastructure Limited). Your lease may be held by Telefónica UK, O2, or CTIL/Cornerstone — the legal entity matters when negotiating.",
      "We act exclusively for landlords, bringing 25+ years of UK telecoms expertise and a comprehensive database of O2 mast comparable deals to every negotiation.",
    ],
    keyFacts: [
      "O2 is owned by Telefónica UK Ltd and operates extensive mast infrastructure across the UK",
      "O2 shares infrastructure with Vodafone through CTIL/Cornerstone — CTIL is the legal entity, Cornerstone is the brand",
      "O2 is not part of MBNL — that is the EE/Three joint venture",
      "The Digital Economy Act 2017 changed rent calculation mechanisms — O2 agents use this to propose lower rents",
      "We have comparable evidence from hundreds of O2 and CTIL mast negotiations across the UK",
    ],
    commonScenarios: [
      "O2 or their agents (often acting as CTIL/Cornerstone) have contacted you about a rent review",
      "You have received Heads of Terms from Telefónica UK Ltd, O2, or CTIL/Cornerstone",
      "Your O2 lease has expired and you are unsure of your rights",
      "O2 has requested to upgrade equipment or share your site with Vodafone via CTIL",
      "You have received a premium offer to sell your O2 mast lease income",
      "You are unsure whether your counterpart is O2, Telefónica UK Ltd, or CTIL/Cornerstone",
    ],
    faqs: [
      {
        question: "Who is the legal operator — O2, Telefónica, or CTIL/Cornerstone?",
        answer:
          "O2 is the trading name of Telefónica UK Ltd. CTIL (Cornerstone Telecommunications Infrastructure Limited) is the joint infrastructure entity owned by Vodafone and O2. Depending on your specific lease, your counterpart may be Telefónica UK Ltd, O2, or CTIL/Cornerstone. We review your documentation and advise accordingly.",
      },
      {
        question: "Can O2 force a new lease on me under the Electronic Communications Code?",
        answer:
          "Under the Electronic Communications Code, operators including O2 can apply to the Upper Tribunal (Lands Chamber) to impose new Code agreements. However, the process requires meeting specific legal criteria, and landlords have statutory rights and procedural protections. Early specialist advice is critical to protect your position.",
      },
      {
        question: "What if my O2 lease has already expired?",
        answer:
          "If your lease has expired, the operator may have rights to remain in occupation whilst negotiating a new agreement. Your options and rights will depend on whether your lease pre-dates December 2017 and its specific terms. Contact us for a free review of your position.",
      },
      {
        question: "How does CTIL/Cornerstone differ from O2 in practice?",
        answer:
          "CTIL/Cornerstone manages the physical infrastructure on behalf of both Vodafone and O2. In practice, negotiations are conducted by CTIL/Cornerstone agents rather than directly with O2 or Vodafone. CTIL is the legal entity; Cornerstone is the commercial brand — they are the same company.",
      },
      {
        question: "Should I accept O2's initial rent offer?",
        answer:
          "Initial rent offers from O2 or their agents are rarely the best achievable. We consistently achieve significantly improved rents and lease terms for our clients compared to operator opening offers. Contact us before accepting anything.",
      },
      {
        question: "What is a typical rent for an O2 phone mast?",
        answer:
          "O2 (Telefónica UK) mast rents vary by location, site type, and lease history. Urban sites in high-demand areas command higher rents than rural locations. Since 2017, O2 agents have routinely used ECC 'no-scheme' valuations to propose reduced rents. We hold an extensive database of comparable O2 and CTIL/Cornerstone deals to benchmark your site and support a strong negotiating position.",
      },
      {
        question: "How does an O2 lease renewal work under the Electronic Communications Code?",
        answer:
          "O2 or CTIL/Cornerstone will serve formal notice seeking to renew or replace your lease, typically proposing new Code terms at a reduced rent. You have the right to respond and negotiate. If agreement is not reached, either party can apply to the Upper Tribunal (Lands Chamber). Early specialist representation ensures your rights are protected from the outset.",
      },
      {
        question: "What should I do when O2 contacts me about my mast lease?",
        answer:
          "Do not respond until you have taken specialist advice. The first contact from O2 or their agents often sets the tone for the entire negotiation. We recommend you call us on 01691 791543 before engaging with O2, CTIL/Cornerstone, or any agent acting on their behalf.",
      },
      {
        question: "How does the Electronic Communications Code affect O2 landlords?",
        answer:
          "The ECC, introduced by the Digital Economy Act 2017, changed how operators including O2 can value mast sites for rent purposes. The 'no-scheme' approach disregards the telecoms use of the land, which often produces lower valuations. Pre-2017 leases may have additional protections under the Landlord and Tenant Act 1954. We assess which legal framework applies to your situation.",
      },
      {
        question: "What are typical O2 lease terms and what should I watch for?",
        answer:
          "O2 leases commonly include provisions for equipment sharing (via CTIL/Cornerstone), broad upgrade rights, and break clauses in the operator's favour. Rent review clauses should be scrutinised carefully — fixed annual uplifts or CPI linkage may be well below achievable market increases. We review every lease term and advise on the full implications before you sign anything.",
      },
    ],
  },

  "ee-phone-mast-lease": {
    slug: "ee-phone-mast-lease",
    name: "EE",
    metaTitle: "EE Phone Mast Lease | Expert UK Landlord Specialists",
    metaDescription:
      "Expert advice for landlords with an EE phone mast lease. We negotiate rent reviews and lease renewals with EE on your behalf. Free consultation — 01691 791543.",
    heroHeadline: "EE Phone Mast Lease Advice for UK Landlords",
    heroSubheadline:
      "Independent phone mast specialists negotiating with EE to protect your rent and lease rights.",
    intro: [
      "EE (part of BT Group) operates the UK's largest mobile network with a substantial portfolio of phone mast sites across the country. EE leases may be held directly by EE or through MBNL, the joint network infrastructure company EE shares with Three (Hutchison 3G).",
      "EE's infrastructure agents are commercially experienced and will typically open with rent and terms that favour the operator. Without specialist representation, many landlords accept significant rent reductions and unfavourable lease clauses.",
      "The Phone Mast Advice Company acts only for landlords. We have over 25 years of experience with EE and MBNL negotiations, and our database of comparable UK mast deals ensures every negotiation is evidence-based.",
    ],
    keyFacts: [
      "EE is owned by BT Group and operates the UK's largest 4G/5G network",
      "EE shares infrastructure with Three (Hutchison 3G) through MBNL (Mobile Broadband Network Limited)",
      "MBNL is separate from CTIL/Cornerstone — the Vodafone/O2 joint venture",
      "EE leases may be held by EE Limited or MBNL depending on your agreement",
      "Under the Digital Economy Act 2017, EE agents use 'no-scheme' valuation to propose reduced rents",
    ],
    commonScenarios: [
      "EE or their agents have contacted you about a rent review or lease renewal",
      "You have received Heads of Terms from EE or MBNL proposing reduced rent",
      "Your EE lease is expiring and you are unsure whether you are dealing with EE or MBNL",
      "EE is requesting to upgrade equipment on your site or share it with Three via MBNL",
      "You have been offered a lump sum premium to sell your EE mast lease income",
      "You want to understand the difference between EE, BT, and MBNL for your specific lease",
    ],
    faqs: [
      {
        question: "What is MBNL and how does it relate to my EE lease?",
        answer:
          "MBNL (Mobile Broadband Network Limited) is the joint venture infrastructure company owned by EE and Three (Hutchison 3G). If EE and Three share use of a mast on your land, your lease counterpart may be MBNL rather than EE directly. MBNL is separate from CTIL/Cornerstone, which is the Vodafone/O2 joint venture.",
      },
      {
        question: "Can EE reduce my phone mast rent at renewal?",
        answer:
          "EE can propose rent reductions at renewal under the Electronic Communications Code's 'no-scheme' valuation model. However, there are significant arguments available to landlords, particularly those with pre-2017 leases. Specialist advice from an independent surveyor can substantially improve your outcome.",
      },
      {
        question: "EE has sent me Heads of Terms — what should I do?",
        answer:
          "Do not sign or agree anything before taking specialist advice. Heads of Terms from EE are a starting point for negotiation, not a final offer. We review all documentation free of charge and advise on the best strategy for your specific situation.",
      },
      {
        question: "How does EE calculate phone mast rent under the new Code?",
        answer:
          "Under the Electronic Communications Code introduced by the Digital Economy Act 2017, EE calculates rent using a 'no-scheme' approach — valuing the land as if it had no telecoms use. On agricultural or lower-value land, this can produce very low figures. We argue for additional consideration and fair total compensation.",
      },
      {
        question: "Can I challenge EE's rent proposal independently?",
        answer:
          "Yes. Landlords can challenge operator proposals through negotiation or, ultimately, through the Upper Tribunal (Lands Chamber). We manage this process on your behalf, drawing on our database of comparable EE and MBNL deals to build a strong evidence base.",
      },
      {
        question: "What is a typical rent for an EE phone mast?",
        answer:
          "EE mast rents depend on location, site type, and lease terms. EE (as the UK's largest network) has significant infrastructure across urban and rural areas, and rents reflect those differences. Since 2017, EE agents have used the ECC 'no-scheme' approach to reduce rents substantially. Our comparable database allows us to challenge these proposals with hard evidence.",
      },
      {
        question: "How does an EE lease renewal work in practice?",
        answer:
          "EE or MBNL will typically contact you about renewal ahead of lease expiry. They will propose new Code terms, often at a much reduced rent. We manage the response, engage in negotiation, and if necessary progress the matter to the Upper Tribunal (Lands Chamber). Most cases are resolved by negotiation before reaching tribunal.",
      },
      {
        question: "What should I do when EE contacts me about my mast?",
        answer:
          "Do not engage with EE or their agents until you have independent specialist advice. We offer a free initial consultation and will take over all communication with EE, BT, or MBNL on your behalf. Contact us on 01691 791543.",
      },
      {
        question: "How does the Electronic Communications Code affect EE landlords?",
        answer:
          "The ECC gives EE the right to apply to the Upper Tribunal for new agreements at 'no-scheme' rents, which can be substantially lower than pre-2017 market rents. Pre-existing leases protected by the Landlord and Tenant Act 1954 may have stronger protections. Specialist advice is essential to understand your specific position.",
      },
      {
        question: "What are common EE lease terms to look out for?",
        answer:
          "EE leases often include broad sharing rights (allowing co-location with Three via MBNL), upgrade rights permitting significant equipment changes without additional rent, and access provisions that may be overly broad. Rent review clauses should be closely reviewed — EE typically proposes below-market fixed increases. We scrutinise every clause and negotiate strongly on your behalf.",
      },
    ],
  },

  "three-phone-mast-lease": {
    slug: "three-phone-mast-lease",
    name: "Three (Hutchison 3G)",
    metaTitle: "Three Phone Mast Lease | Expert UK Landlord Advice",
    metaDescription:
      "Independent advice for landlords with a Three (Hutchison 3G) phone mast lease. We negotiate rent and lease terms with Three on your behalf. Call 01691 791543.",
    heroHeadline: "Three (Hutchison 3G) Phone Mast Lease Advice",
    heroSubheadline:
      "Independent experts negotiating with Three to secure fair rent and protect your landlord rights.",
    intro: [
      "Three UK (Hutchison 3G UK Ltd) operates one of the UK's four main mobile networks and holds a significant portfolio of phone mast sites on privately owned land. Three shares infrastructure with EE through MBNL, the joint network infrastructure company.",
      "Three's infrastructure agents routinely use the Electronic Communications Code to propose rent reductions and operator-favourable lease terms. Without specialist representation, many landlords unknowingly accept below-market income for decades.",
      "We act exclusively for UK landlords in negotiations with Three, Hutchison 3G, and MBNL. Our 25+ years of experience and extensive deal database ensure evidence-based negotiations on your behalf.",
    ],
    keyFacts: [
      "Three is owned by Hutchison 3G UK Ltd (CK Hutchison Holdings)",
      "Three shares infrastructure with EE through MBNL (Mobile Broadband Network Limited)",
      "Proposed merger with Vodafone UK was subject to regulatory scrutiny — check current ownership status",
      "Three leases may be held by Hutchison 3G UK Ltd or MBNL depending on your agreement",
      "The Digital Economy Act 2017 ECC provisions affect how Three proposes and calculates rent",
    ],
    commonScenarios: [
      "Three or their agents have contacted you about a rent review or lease renewal",
      "You have received a notice from Three or Hutchison 3G UK Ltd under the Electronic Communications Code",
      "Three has requested to upgrade or share infrastructure on your site via MBNL",
      "Your Three or MBNL lease is expiring and you are unsure of your position",
      "You have been offered a lump sum to sell your Three mast lease income stream",
      "You are uncertain whether your counterpart is Three, Hutchison 3G UK Ltd, or MBNL",
    ],
    faqs: [
      {
        question: "What is the relationship between Three, Hutchison 3G, and MBNL?",
        answer:
          "Three is the consumer brand operated by Hutchison 3G UK Ltd. MBNL (Mobile Broadband Network Limited) is the joint infrastructure venture between EE and Three for network sharing. Your lease may be with Hutchison 3G UK Ltd or MBNL — the identity of your counterpart affects your rights and the negotiation approach.",
      },
      {
        question: "Can Three reduce my phone mast rent at renewal?",
        answer:
          "Under the Electronic Communications Code, Three can seek to have rents assessed under the 'no-scheme' valuation model, which often produces lower figures than pre-2017 rents. Specialist advice is essential to challenge these proposals effectively and preserve your income.",
      },
      {
        question: "Three has approached me about upgrading the mast — do I need advice?",
        answer:
          "Yes. Upgrade requests from Three often include requests for changes to lease terms or rent that may not be in your interest. We advise on whether upgrades trigger additional consideration rights and ensure any amendments protect your position.",
      },
      {
        question: "What should I do if I receive a notice from Three under the Electronic Communications Code?",
        answer:
          "Contact us immediately. Statutory notices under the Code carry specific response timeframes. Missing a deadline or responding incorrectly can significantly damage your negotiating position and legal rights. We offer a free initial review.",
      },
      {
        question: "Can I refuse to renew a Three mast lease?",
        answer:
          "In certain circumstances, yes — particularly if you have genuine redevelopment plans. However, operators can apply to the Upper Tribunal (Lands Chamber) to contest refusals under the Code. We assess your specific situation and advise on the realistic options available to you.",
      },
      {
        question: "What is a typical rent for a Three (Hutchison 3G) phone mast?",
        answer:
          "Rents for Three mast sites vary significantly by location and site type. Three tends to have a significant presence in urban and suburban areas. Since 2017, Three agents have used ECC 'no-scheme' valuations to propose reduced rents. We have comparable evidence from many Three and MBNL negotiations to support your position.",
      },
      {
        question: "How does a Three lease renewal work under the Electronic Communications Code?",
        answer:
          "Three or MBNL will typically serve formal notice proposing to renew the lease on new Code terms at a lower rent. You are entitled to respond, negotiate, and if necessary refer the matter to the Upper Tribunal (Lands Chamber). Early specialist advice protects your rights throughout the process.",
      },
      {
        question: "What should I do when Three contacts me about my mast lease?",
        answer:
          "Do not respond until you have taken specialist advice. Three's agents are commercially experienced. We recommend contacting us on 01691 791543 before engaging with Three, Hutchison 3G UK Ltd, or MBNL.",
      },
      {
        question: "How does the Electronic Communications Code affect Three landlords?",
        answer:
          "The ECC gives Three the right to apply for new agreements at 'no-scheme' rents. For leases granted before December 2017, Landlord and Tenant Act 1954 protections may apply, which can provide additional leverage. We identify which regime applies and develop the most effective negotiating strategy for your situation.",
      },
      {
        question: "What are typical Three lease terms I should review carefully?",
        answer:
          "Three leases often include sharing rights (via MBNL with EE), upgrade rights that allow significant changes to installed equipment, and break clauses favouring the operator. Ensure any rent review mechanism is fair and reflects realistic market movements. We review all proposed terms and advise on what is standard, negotiable, or unacceptable.",
      },
    ],
  },

  "ctil-cornerstone-phone-mast-lease": {
    slug: "ctil-cornerstone-phone-mast-lease",
    name: "CTIL / Cornerstone",
    metaTitle: "CTIL Cornerstone Phone Mast Lease | Expert UK Landlord Advice",
    metaDescription:
      "Specialist advice for landlords with a CTIL or Cornerstone phone mast lease. CTIL and Cornerstone are the same entity. Free consultation — 01691 791543.",
    heroHeadline: "CTIL / Cornerstone Phone Mast Lease Advice",
    heroSubheadline:
      "CTIL and Cornerstone are the same company. Expert independent advice for UK landlords.",
    intro: [
      "CTIL (Cornerstone Telecommunications Infrastructure Limited) and Cornerstone are the same entity — CTIL is the legal company name, Cornerstone is the commercial brand. They are the joint infrastructure company owned by Vodafone and O2, managing approximately 14,200 macro and 1,400 micro mast sites across the UK.",
      "CTIL/Cornerstone is the UK's largest mobile infrastructure company and employs specialist agents experienced in using the Electronic Communications Code to minimise lease costs. If CTIL or Cornerstone have contacted you about your mast lease, specialist landlord representation is essential.",
      "We were involved in instigating and advising on the landmark case Compton Beauchamp Estates v CTIL [2022] UKSC 18 — the most significant UK telecoms ruling since the Telecommunications Act 1984, which protected landlords' rights against Code imposition under existing L&T 1954 leases.",
    ],
    keyFacts: [
      "CTIL (Cornerstone Telecommunications Infrastructure Limited) and Cornerstone are the same entity — same company, two names",
      "CTIL/Cornerstone is jointly owned by Vodafone and O2",
      "They manage approximately 14,200 macro and 1,400 micro sites — the UK's largest infrastructure portfolio",
      "We instigated and advised on Compton Beauchamp Estates v CTIL [2022] UKSC 18 — a landmark case protecting landlord rights",
      "CTIL's agents are commercially sophisticated — independent specialist representation is critical",
    ],
    commonScenarios: [
      "CTIL or Cornerstone have contacted you about a lease renewal or rent review",
      "You have received a formal notice from CTIL under the Electronic Communications Code",
      "CTIL/Cornerstone is proposing a significant rent reduction at lease renewal",
      "You have received Heads of Terms from Cornerstone — CTIL's commercial brand",
      "You have a pre-2017 lease and are unsure of your protections under LTA 1954",
      "CTIL is requesting site sharing or equipment upgrades on your land",
    ],
    faqs: [
      {
        question: "Are CTIL and Cornerstone the same company?",
        answer:
          "Yes. CTIL stands for Cornerstone Telecommunications Infrastructure Limited — that is the legal entity name. Cornerstone is the commercial trading brand. They are identical: same company, same directors, same legal rights and obligations. Do not be confused by CTIL and Cornerstone appearing as separate entities — they are not.",
      },
      {
        question: "What was the Compton Beauchamp Estates v CTIL case?",
        answer:
          "Compton Beauchamp Estates v CTIL [2022] UKSC 18 was a Supreme Court ruling in which The Phone Mast Advice Company was involved in instigating and advising. The case established that operators with existing Landlord and Tenant Act 1954 protections cannot use the Electronic Communications Code to impose significantly reduced rents or terms on landlords. This was a landmark victory protecting landlord rights.",
      },
      {
        question: "Can CTIL/Cornerstone impose a new lease on me under the ECC?",
        answer:
          "Under the Electronic Communications Code, CTIL/Cornerstone can apply to the Upper Tribunal (Lands Chamber) to impose new Code agreements in certain circumstances. However, there are strong procedural and substantive defences available, particularly for pre-2017 leases. Early specialist advice is essential to protect your position.",
      },
      {
        question: "CTIL/Cornerstone is proposing to reduce my rent significantly — is this legal?",
        answer:
          "Operators are entitled to seek lower rents under the 'no-scheme' valuation model introduced by the Digital Economy Act 2017. Whether a specific reduction is legally enforceable depends on your lease terms, when it was granted, and other factors. We assess your specific situation and develop a negotiating strategy to protect your income.",
      },
      {
        question: "Who should I contact about my CTIL or Cornerstone mast lease?",
        answer:
          "Contact The Phone Mast Advice Company. We act exclusively for landlords in negotiations with CTIL/Cornerstone and have extensive experience and comparable evidence from hundreds of similar negotiations. Call 01691 791543 or use WhatsApp for a free initial consultation.",
      },
      {
        question: "What is a typical rent for a CTIL / Cornerstone phone mast?",
        answer:
          "CTIL/Cornerstone manages approximately 14,200 macro sites across the UK, with rents varying substantially by location and site type. Since 2017, CTIL agents have routinely sought significant rent reductions under the ECC. We have an extensive comparable database from CTIL/Cornerstone negotiations across England and Wales and can assess what your site should be achieving.",
      },
      {
        question: "How does a CTIL / Cornerstone lease renewal work?",
        answer:
          "CTIL/Cornerstone will serve formal notice (under the ECC or LTA 1954 depending on your existing lease) seeking to renew the agreement, typically at a significantly reduced rent. Given the sophistication of their agents and the complexity of the ECC, independent specialist representation is essential. We manage the entire process from initial notice to final agreement.",
      },
      {
        question: "What should I do when Cornerstone contacts me?",
        answer:
          "Do not engage with Cornerstone or their agents before taking specialist advice. Cornerstone employs experienced commercial agents who are skilled at securing operator-favourable terms. Even an apparently friendly initial call can prejudice your negotiating position. Call us on 01691 791543 first.",
      },
      {
        question: "How does the Electronic Communications Code affect CTIL / Cornerstone landlords?",
        answer:
          "CTIL/Cornerstone has extensive experience using the Electronic Communications Code and the 'no-scheme' valuation approach to reduce landlord rents. We were involved in instigating and advising on Compton Beauchamp Estates v CTIL [2022] UKSC 18, which established important protections for landlords with pre-2017 LTA-protected leases. We apply this expertise to every CTIL negotiation.",
      },
      {
        question: "What are common CTIL / Cornerstone lease terms to watch out for?",
        answer:
          "CTIL/Cornerstone leases frequently include broad sharing rights (for both Vodafone and O2 equipment), extensive upgrade rights, very broad access provisions, and break clauses in the operator's favour. Rent review clauses, if any, are often structured to minimise uplifts. We scrutinise every term and ensure your lease reflects fair, independently negotiated terms.",
      },
    ],
  },

  "cellnex-phone-mast-lease": {
    slug: "cellnex-phone-mast-lease",
    name: "Cellnex",
    metaTitle: "Cellnex Phone Mast Lease | Expert UK Landlord Advice",
    metaDescription:
      "Specialist advice for landlords with a Cellnex phone mast lease. We negotiate rent and lease terms with Cellnex on your behalf. Free consultation — 01691 791543.",
    heroHeadline: "Cellnex Phone Mast Lease Advice for UK Landlords",
    heroSubheadline:
      "Independent specialists negotiating with Cellnex to protect your rent and landlord rights.",
    intro: [
      "Cellnex UK is a major independent telecoms infrastructure company that acquired a significant UK portfolio of phone mast sites. Cellnex operates as a neutral host infrastructure provider, leasing mast capacity to multiple mobile network operators.",
      "Cellnex acquired On Tower UK (formerly Arqiva's mobile infrastructure division) and other UK infrastructure assets. If you have a mast lease with Cellnex, you need specialist advice to navigate their commercial approach to lease renewals and rent reviews.",
      "We act exclusively for UK landlords in negotiations with Cellnex, drawing on 25+ years of telecoms property expertise and an extensive database of comparable deals.",
    ],
    keyFacts: [
      "Cellnex UK is one of Europe's largest independent mobile infrastructure companies",
      "Cellnex acquired On Tower UK (the former Arqiva mobile division) as part of its UK expansion",
      "Cellnex operates as a neutral host — multiple operators may use a single Cellnex-managed site on your land",
      "Lease renewals and rent reviews with Cellnex require specialist independent advice",
      "The Electronic Communications Code applies to Cellnex as an operator in the same way as network operators",
    ],
    commonScenarios: [
      "Cellnex or On Tower have contacted you about a rent review or lease renewal",
      "Your original Arqiva mobile mast lease has been transferred to Cellnex/On Tower",
      "Cellnex is proposing new lease terms or a rent reduction",
      "Multiple mobile operators now use your mast via Cellnex as a neutral host",
      "You have received a formal Code notice from Cellnex or On Tower UK Ltd",
      "You are considering selling your Cellnex mast lease income stream",
    ],
    faqs: [
      {
        question: "What is Cellnex's relationship with Arqiva and On Tower?",
        answer:
          "Cellnex acquired On Tower UK Ltd (which was previously known as Arqiva Services' mobile infrastructure division) as part of its expansion into the UK market. Arqiva sold its mobile mast business in 2020. If you have a lease originally with Arqiva for mobile masts, your current landlord is likely Cellnex or On Tower (part of Cellnex). Arqiva itself now focuses solely on broadcast infrastructure.",
      },
      {
        question: "Can Cellnex reduce my phone mast rent?",
        answer:
          "Like all operators and infrastructure companies, Cellnex can seek rent reductions under the Electronic Communications Code's 'no-scheme' valuation model. Specialist independent advice is essential to challenge these proposals and protect your rental income.",
      },
      {
        question: "Multiple operators use my mast — should my rent be higher?",
        answer:
          "Not necessarily under the current ECC framework, but this can be an important negotiating consideration. The sharing of infrastructure by multiple operators on your land may support arguments for higher consideration. We assess your specific situation and advise on what arguments are available.",
      },
      {
        question: "Cellnex has sent me a notice about my lease — what should I do?",
        answer:
          "Contact us immediately. Statutory notices under the Electronic Communications Code carry specific timeframes, and missing a deadline can damage your legal position. We offer a free initial review of all lease documents and notices.",
      },
      {
        question: "Is On Tower the same as Cellnex?",
        answer:
          "On Tower UK Ltd is a subsidiary within the Cellnex group. It was formerly the mobile mast infrastructure division of Arqiva, which was sold in 2020. For practical and legal purposes, On Tower operates within the Cellnex corporate structure.",
      },
      {
        question: "What is a typical rent for a Cellnex phone mast?",
        answer:
          "Cellnex mast rents vary by location, site type, and the number of operators using the site. As a neutral host infrastructure company, Cellnex may host multiple mobile networks on your land. We have comparable evidence from Cellnex and On Tower negotiations and can advise on what your site should be achieving.",
      },
      {
        question: "How does a Cellnex lease renewal work?",
        answer:
          "Cellnex (or On Tower UK Ltd) will contact you about renewing or replacing your lease, typically proposing new Code terms. Given their commercial experience and the complexity of the ECC framework, independent specialist advice is essential before you respond to anything.",
      },
      {
        question: "What should I do when Cellnex contacts me about my lease?",
        answer:
          "Do not engage with Cellnex or On Tower before taking specialist advice. Call us on 01691 791543 for a free initial consultation. We will review your documentation and advise on the best approach before any dialogue with the operator.",
      },
      {
        question: "How does the Electronic Communications Code affect Cellnex landlords?",
        answer:
          "The ECC applies to Cellnex and On Tower in the same way as mobile network operators. The 'no-scheme' valuation approach can produce lower rents than pre-2017 market assessments. We advise on your specific position under both the ECC and any applicable LTA 1954 protections.",
      },
      {
        question: "What are common Cellnex lease terms I should review?",
        answer:
          "Cellnex leases often include broad multi-operator hosting provisions, extensive upgrade and access rights, and break clauses in the operator's favour. As a neutral host, Cellnex may seek to host multiple operators on your site — understanding the implications for your rent and lease terms is important. We review all proposed terms and advise accordingly.",
      },
    ],
  },

  "on-tower-arqiva-phone-mast-lease": {
    slug: "on-tower-arqiva-phone-mast-lease",
    name: "On Tower (formerly Arqiva)",
    metaTitle: "On Tower (formerly Arqiva) Phone Mast Lease | Expert Advice",
    metaDescription:
      "Expert advice for landlords with an On Tower or former Arqiva phone mast lease. Arqiva sold mobile infrastructure to Cellnex 2020. Free consultation — 01691 791543.",
    heroHeadline: "On Tower (formerly Arqiva) Phone Mast Lease Advice",
    heroSubheadline:
      "Arqiva sold its mobile infrastructure to Cellnex in 2020. On Tower is the current operating entity.",
    intro: [
      "Important: Arqiva sold its mobile telecommunications infrastructure business in July 2020. The mobile mast operating entity is now On Tower UK Ltd, which operates within the Cellnex group. Arqiva itself now focuses exclusively on broadcast infrastructure (television and radio masts) — not mobile phone masts.",
      "If you have a phone mast lease originally granted to Arqiva Services or Arqiva's mobile division, your current landlord is On Tower UK Ltd. All mobile mast negotiations are now conducted through On Tower, not Arqiva.",
      "We act exclusively for UK landlords with On Tower or legacy Arqiva mobile mast leases. Our specialists ensure your lease documents correctly reflect the current operator entity and that your rights are fully protected in any renewal or rent review.",
    ],
    keyFacts: [
      "Arqiva sold its mobile infrastructure business to Cellnex in July 2020 — it no longer operates mobile phone masts",
      "On Tower UK Ltd (formerly Arqiva Services mobile division) is the current operating entity within Cellnex",
      "Arqiva remains active only in broadcast infrastructure (TV and radio transmitters)",
      "If your lease names Arqiva as the operator for mobile masts, you need to verify the current counterpart entity",
      "On Tower/Cellnex leases are subject to the Electronic Communications Code introduced by the Digital Economy Act 2017",
    ],
    commonScenarios: [
      "Your lease names Arqiva but you are unsure who your current operator is",
      "On Tower UK Ltd has contacted you about a rent review or lease renewal",
      "You have not received an Assignment of Lease notification since the 2020 Cellnex sale",
      "On Tower is proposing new lease terms under the Electronic Communications Code",
      "You need to confirm whether your site relates to mobile masts or broadcast infrastructure",
      "You want advice before responding to any communication from On Tower or Cellnex",
    ],
    faqs: [
      {
        question: "Does Arqiva still operate mobile phone masts?",
        answer:
          "No. Arqiva sold its mobile telecommunications infrastructure business to Cellnex UK in July 2020. The operating entity for those sites is now On Tower UK Ltd, which is part of the Cellnex group. Arqiva Ltd continues to operate broadcast infrastructure (television and radio transmitters) but is no longer involved in mobile phone masts.",
      },
      {
        question: "My lease names Arqiva — who is my current landlord?",
        answer:
          "If your original lease was with Arqiva Services or the mobile division of Arqiva, your current counterpart is likely On Tower UK Ltd following the 2020 sale to Cellnex. You should check whether an Assignment of Lease or novation agreement was sent to you when the business was transferred. We can review your documentation and confirm the current legal position.",
      },
      {
        question: "What is the difference between On Tower and Arqiva?",
        answer:
          "On Tower UK Ltd is the company that acquired Arqiva's mobile mast business in the Cellnex deal of July 2020. Arqiva Ltd is a separate and distinct company that continues to operate broadcast transmitters for TV and radio. They are different companies — do not confuse them when dealing with lease matters.",
      },
      {
        question: "Can On Tower reduce my phone mast rent?",
        answer:
          "On Tower, as an operator within the meaning of the Electronic Communications Code, can seek to have rents assessed under the 'no-scheme' valuation model. Specialist independent advice from a landlord-only firm is essential to resist below-market proposals.",
      },
      {
        question: "Should I engage with On Tower directly about my lease renewal?",
        answer:
          "We strongly advise against engaging directly with On Tower or their agents before taking specialist advice. Once you engage, you may inadvertently limit your negotiating options. Contact us for a free initial consultation before making any response.",
      },
      {
        question: "What is a typical rent for an On Tower (formerly Arqiva) phone mast?",
        answer:
          "On Tower UK Ltd (previously Arqiva's mobile division) manages a significant UK portfolio of mast sites. Rents vary by location, site type, and lease history. Many Arqiva-origin leases were agreed before 2017 under different valuation principles. We assess your site and advise on achievable rent in the current market.",
      },
      {
        question: "How does an On Tower / Arqiva lease renewal work?",
        answer:
          "On Tower UK Ltd (as the successor entity within Cellnex) will contact you about renewing your existing lease, typically proposing Code terms. If your lease was originally with Arqiva, you should first verify the correct legal counterpart. We manage the entire renewal process and all operator communications on your behalf.",
      },
      {
        question: "What should I do when On Tower contacts me?",
        answer:
          "Do not respond until you have taken specialist advice. We offer a free initial consultation and will review your documentation to confirm the current legal position regarding your counterpart entity and your options. Call 01691 791543.",
      },
      {
        question: "How does the Electronic Communications Code affect On Tower / Arqiva landlords?",
        answer:
          "On Tower UK Ltd, as part of Cellnex, is a Code operator and can apply for new agreements under the ECC's 'no-scheme' valuation framework. For legacy Arqiva leases, the transition to On Tower may also raise questions about assignment and consent. We advise on all of these issues.",
      },
      {
        question: "What are typical On Tower lease terms to watch out for?",
        answer:
          "On Tower leases often include broad multi-operator rights, upgrade provisions, and access terms that may be more extensive than necessary. Any lease variation proposed in connection with the Arqiva-to-On Tower transition should be carefully reviewed. We check every clause and ensure your interests are fully protected.",
      },
    ],
  },

  "airwave-phone-mast-lease": {
    slug: "airwave-phone-mast-lease",
    name: "Airwave Solutions",
    metaTitle: "Airwave Phone Mast Lease | Expert UK Landlord Advice",
    metaDescription:
      "Specialist advice for landlords with an Airwave Solutions phone mast lease. Airwave operates the TETRA emergency services network. Free consultation — 01691 791543.",
    heroHeadline: "Airwave Solutions Phone Mast Lease Advice",
    heroSubheadline:
      "Airwave operates the UK's emergency services TETRA network. Expert independent advice for landlords.",
    intro: [
      "Airwave Solutions (owned by Motorola Solutions) operates the UK's Airwave network — the TETRA (Terrestrial Trunked Radio) system used by emergency services including the police, fire and ambulance services. Airwave mast leases are distinct from consumer mobile phone mast leases.",
      "The Airwave network is being transitioned to the Emergency Services Network (ESN), which will use the commercial 4G/5G infrastructure. This transition creates important considerations for landlords regarding the duration and future of their Airwave mast leases.",
      "We act exclusively for landlords in negotiations with Airwave Solutions and advise on the implications of the ESN transition for your specific lease and site.",
    ],
    keyFacts: [
      "Airwave Solutions is owned by Motorola Solutions Inc.",
      "Airwave operates the TETRA-based emergency services communications network across the UK",
      "The network is being migrated to the Emergency Services Network (ESN) — this affects lease duration and renewal considerations",
      "Airwave masts are distinct from consumer mobile network masts in their purpose and operation",
      "The Electronic Communications Code applies to Airwave as a Code operator",
    ],
    commonScenarios: [
      "Airwave Solutions has contacted you about a lease renewal or extension",
      "Your Airwave lease is expiring and you are uncertain about your rights during the ESN transition",
      "Airwave is proposing new or amended lease terms under the Electronic Communications Code",
      "You are unsure whether your site will be retained when the ESN replaces the Airwave network",
      "You want independent advice before responding to any Airwave or Motorola Solutions communication",
      "You need to understand the ESN transition timeline and its impact on your income",
    ],
    faqs: [
      {
        question: "What is Airwave and who owns it?",
        answer:
          "Airwave Solutions is a company owned by Motorola Solutions Inc. It operates the Airwave network — the TETRA-based radio communications system used by UK emergency services including police, fire service, and ambulance service. It is a specialist infrastructure operator distinct from consumer mobile network operators.",
      },
      {
        question: "What is the ESN transition and how does it affect my Airwave lease?",
        answer:
          "The Emergency Services Network (ESN) is the planned replacement for the Airwave TETRA network, using commercial 4G/5G infrastructure. The ESN transition means some Airwave mast sites may no longer be required, whilst others may be retained for coverage reasons. We advise on what the transition means for your specific lease and any renewal or termination scenarios.",
      },
      {
        question: "Can Airwave renew my lease under the Electronic Communications Code?",
        answer:
          "Yes. Airwave is a Code operator and can apply to the Upper Tribunal (Lands Chamber) for new Code agreements on the standard terms. However, landlords have rights and protections under the Code, and specialist advice is essential to navigate the process effectively.",
      },
      {
        question: "Should I be concerned about my Airwave mast lease expiring?",
        answer:
          "Yes — you should take specialist advice before any Airwave lease expires or is due for renewal. The ESN context creates particular complexities. We offer a free initial review of your lease documents and situation.",
      },
      {
        question: "How is an Airwave lease different from a consumer mobile mast lease?",
        answer:
          "Airwave leases relate to TETRA emergency services infrastructure rather than consumer mobile network equipment. The equipment, purpose, and contractual context differ, but the Electronic Communications Code applies in the same way. Specialist advice is required to understand the full implications for your site.",
      },
      {
        question: "What is a typical rent for an Airwave Solutions mast?",
        answer:
          "Airwave mast rents are distinct from consumer mobile network rents due to the specialist nature of the TETRA emergency services infrastructure. Rents depend on location, site type, and the ESN transition context. We hold comparable evidence and advise on what your Airwave site should be achieving in the current market.",
      },
      {
        question: "How does an Airwave lease renewal work?",
        answer:
          "Airwave Solutions will contact you about renewing or extending your lease, often in the context of the ESN transition timeline. As a Code operator, they can apply to the Upper Tribunal (Lands Chamber) if agreement is not reached. The ESN transition creates specific complexities that make specialist advice particularly important.",
      },
      {
        question: "What should I do when Airwave contacts me about my lease?",
        answer:
          "Do not engage with Airwave or Motorola Solutions before taking specialist advice. We offer a free initial consultation and will advise on your rights, the ESN transition implications, and the best negotiating strategy for your situation. Call 01691 791543.",
      },
      {
        question: "How does the Electronic Communications Code affect Airwave landlords?",
        answer:
          "Airwave Solutions is a Code operator, and the ECC applies to Airwave leases in the same way as consumer mobile network leases. The 'no-scheme' valuation approach may be used to propose reduced rents. We advise on your specific rights and protections under both the ECC and any LTA 1954 provisions that may apply.",
      },
      {
        question: "What are common Airwave lease terms to review?",
        answer:
          "Airwave leases may include provisions specific to emergency services infrastructure, including extended access rights and restrictive site-sharing terms. The ESN transition context may create uncertainty about lease duration and future site use. We review all terms and advise on protections you should seek to include in any new or renewed agreement.",
      },
    ],
  },

  "wireless-infrastructure-group-phone-mast-lease": {
    slug: "wireless-infrastructure-group-phone-mast-lease",
    name: "Wireless Infrastructure Group (WIG)",
    metaTitle: "Wireless Infrastructure Group Phone Mast Lease | Expert Advice",
    metaDescription:
      "Specialist advice for landlords with a Wireless Infrastructure Group (WIG) phone mast lease. Independent UK experts. Free consultation — 01691 791543.",
    heroHeadline: "Wireless Infrastructure Group (WIG) Phone Mast Lease Advice",
    heroSubheadline:
      "Independent specialists advising UK landlords on WIG phone mast leases.",
    intro: [
      "Wireless Infrastructure Group (WIG) is one of the UK's leading independent wireless infrastructure companies. WIG builds, owns, and operates telecoms towers and infrastructure on behalf of mobile network operators. If WIG holds a lease on your land, you need specialist independent advice.",
      "As an infrastructure company rather than a network operator, WIG hosts multiple mobile networks on its masts. This can create particular considerations around consideration, upgrade rights, and the structure of lease agreements.",
      "We act exclusively for UK landlords in negotiations with Wireless Infrastructure Group, bringing 25+ years of experience and a comprehensive database of WIG and independent infrastructure company comparable deals.",
    ],
    keyFacts: [
      "WIG (Wireless Infrastructure Group) is an independent telecoms infrastructure company — not a mobile network operator",
      "WIG builds and manages telecoms towers for multiple network operators",
      "As a neutral host, WIG may house multiple operators on your land under a single lease",
      "The Electronic Communications Code applies to WIG as a Code operator",
      "Independent infrastructure companies like WIG are commercially experienced lease negotiators",
    ],
    commonScenarios: [
      "WIG has approached you about building a new mast on your land",
      "You have received Heads of Terms from Wireless Infrastructure Group",
      "WIG is proposing a rent review or lease renewal for an existing mast on your property",
      "Multiple mobile operators are using your WIG mast and you want to understand the rent implications",
      "WIG has requested to upgrade infrastructure or carry out works on your land",
      "You want independent advice before signing anything proposed by WIG",
    ],
    faqs: [
      {
        question: "Who is Wireless Infrastructure Group (WIG)?",
        answer:
          "WIG (Wireless Infrastructure Group) is an independent wireless infrastructure company that builds, owns, and manages telecoms mast infrastructure on behalf of mobile network operators across the UK. Unlike Vodafone or EE, WIG does not operate a consumer mobile network — it provides the physical infrastructure that operators use to deliver their services.",
      },
      {
        question: "Can WIG reduce my phone mast rent?",
        answer:
          "WIG, as a Code operator within the meaning of the Electronic Communications Code, has the same rights as mobile network operators to seek rents assessed under the 'no-scheme' valuation model. Specialist independent advice is essential to challenge below-market proposals from WIG.",
      },
      {
        question: "Multiple mobile operators use my WIG mast — does that affect my rent?",
        answer:
          "The sharing of your site by multiple mobile operators via a WIG mast is a relevant factor in negotiations. Whilst the ECC 'no-scheme' valuation model limits certain arguments, the fact of multi-operator use may support arguments for improved consideration. We assess your specific situation.",
      },
      {
        question: "WIG is proposing to build a new mast on my land — what should I do?",
        answer:
          "Do not agree to anything before taking specialist advice. New letting negotiations with WIG require careful assessment of proposed rent, lease terms, upgrade rights, access provisions, and potential future operator changes. We offer a free initial consultation to assess any proposal.",
      },
      {
        question: "Is WIG the same as Cellnex, On Tower, or CTIL/Cornerstone?",
        answer:
          "No. WIG (Wireless Infrastructure Group) is a separate and independent company from Cellnex, On Tower (formerly Arqiva mobile division), and CTIL/Cornerstone. Each is a distinct legal entity with different ownership and infrastructure portfolios.",
      },
      {
        question: "What is a typical rent for a WIG phone mast?",
        answer:
          "Rents for WIG-managed mast sites vary by location, site type, and the number of operators using the infrastructure. As a neutral host, WIG may accommodate multiple networks on a single site. We have comparable evidence from WIG negotiations and can assess what your site should be achieving.",
      },
      {
        question: "How does a WIG lease renewal work?",
        answer:
          "WIG will contact you about renewing or extending your lease, typically proposing Code terms. As with all operators, WIG can apply to the Upper Tribunal (Lands Chamber) if agreement is not reached. We recommend engaging specialist representation before responding to any WIG renewal proposal.",
      },
      {
        question: "What should I do when WIG contacts me about my mast?",
        answer:
          "Do not agree to anything or respond substantively before taking specialist advice. WIG's commercial team is experienced in securing operator-favourable terms. We offer a free initial consultation and will advise on the best approach. Call 01691 791543.",
      },
      {
        question: "How does the Electronic Communications Code affect WIG landlords?",
        answer:
          "WIG, as a Code operator, has the same rights as mobile network operators to seek 'no-scheme' valuations and new Code agreements. The ECC framework applies fully to WIG leases. Pre-2017 leases may benefit from LTA 1954 protections. We assess your specific position and advise accordingly.",
      },
      {
        question: "What are typical WIG lease terms I should check?",
        answer:
          "WIG leases often include broad multi-operator hosting rights, upgrade provisions, and access terms. As an independent infrastructure company, WIG may seek more flexibility than a single network operator would. Any rent review mechanism should be carefully scrutinised. We review all proposed terms and negotiate to protect your position.",
      },
    ],
  },
};

// ── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(operators).map((slug) => ({ operator: slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ operator: string }>;
}): Promise<Metadata> {
  const { operator } = await params;
  const data = operators[operator];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://phonemastadvice.co.uk/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://phonemastadvice.co.uk/${data.slug}`,
      type: "website",
    },
  };
}

// ── Page component ────────────────────────────────────────────────────────────

export default async function OperatorPage({
  params,
}: {
  params: Promise<{ operator: string }>;
}) {
  const { operator } = await params;
  const data = operators[operator];
  if (!data) notFound();

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Phone Mast Advice Company Ltd",
    url: `https://phonemastadvice.co.uk/${data.slug}`,
    telephone: "01691 791543",
    email: "info@phonemastadvice.co.uk",
    description: `Independent specialist telecom surveyors advising UK landlords on ${data.name} phone mast leases.`,
    areaServed: "United Kingdom",
    address: {
      "@type": "PostalAddress",
      streetAddress: "167-169 Great Portland Road, 5th Floor",
      addressLocality: "London",
      postalCode: "W1W 5PF",
      addressCountry: "GB",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/phone-mast-services" },
          { label: `${data.name} Phone Mast Lease` },
        ]}
      />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "#1B4F72",
          padding: "4rem 1.5rem",
        }}
      >
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            {data.heroHeadline}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            {data.heroSubheadline}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="/free-rent-estimate"
              className="btn-primary"
              style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
            >
              Free Rent Estimate
            </a>
            <a
              href="tel:01691791543"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                color: "#ffffff",
                border: "2px solid rgba(255,255,255,0.6)",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "1.0625rem",
                textDecoration: "none",
                minHeight: "44px",
              }}
            >
              📞 01691 791543
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          {data.intro.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.125rem",
                color: "#374151",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Key facts */}
      <section
        style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}
      >
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.5rem",
            }}
          >
            Key Facts About {data.name} Mast Leases
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.keyFacts.map((fact, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  marginBottom: "1rem",
                  fontSize: "1.0625rem",
                  color: "#374151",
                  lineHeight: 1.6,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#a4ca62",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1a1a2e",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    marginTop: "0.125rem",
                  }}
                >
                  ✓
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "0.75rem",
            }}
          >
            Common Scenarios We Handle
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            If any of the following apply to you, contact us for a free initial consultation.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.commonScenarios.map((scenario, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  marginBottom: "0.875rem",
                  fontSize: "1.125rem",
                  color: "#374151",
                  lineHeight: 1.6,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    color: "#a4ca62",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginTop: "0.05rem",
                  }}
                >
                  →
                </span>
                {scenario}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Why Choose The Phone Mast Advice Company?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#374151",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            We act <strong>exclusively for landlords</strong> — never for mobile phone operators. This independence is fundamental. When {data.name} or their agents approach our clients, we ensure landlords receive objective, evidence-based representation.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#374151",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            Our 25+ years of experience and extensive database of comparable UK mast deals means every negotiation is backed by hard evidence. We were involved in instigating and advising on{" "}
            <em>Compton Beauchamp Estates v CTIL</em> [2022] UKSC 18 — the most significant UK telecoms ruling since the Telecommunications Act 1984.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#374151",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Our fees are structured on a no-win, no-fee basis for most instructions. We only succeed when you do.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ backgroundColor: "#EEF5FB", padding: "3rem 1.5rem" }}
      >
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.5rem",
            }}
          >
            Frequently Asked Questions — {data.name} Phone Mast Leases
          </h2>
          <FAQAccordion items={data.faqs} showJsonLd={false} />
        </div>
      </section>

      {/* Related Services */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            Related Services
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              marginBottom: "2rem",
            }}
          >
            {[
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "Navigate ECC lease renewals confidently" },
              { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews", desc: "Benchmark and improve your rent" },
              { label: "New Lettings", href: "/phone-mast-services/new-lettings", desc: "Get the right terms from day one" },
              { label: "Mast Sales", href: "/phone-mast-services/mast-sales", desc: "Capitalise on your lease income" },
              { label: "Removal & Redevelopment", href: "/phone-mast-services/removal-and-redevelopment", desc: "Reclaim your land when needed" },
              { label: "Electricity Costs Recovery", href: "/phone-mast-services/electricity-costs-recovery", desc: "Recover operator electricity costs" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  backgroundColor: "#f9f8f5",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>
                  {item.label}
                </p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.4 }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#1a1a2e",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              { label: "Free Lease Check", href: "/free-lease-check" },
              { label: "Free Rent Estimate", href: "/free-rent-estimate" },
              { label: "Contact Our Team", href: "/contact" },
              { label: "All Operator Guides", href: "/phone-mast-services" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#1B4F72",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "0.5rem 1.1rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  minHeight: "44px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#1a1a2e",
              marginBottom: "1rem",
            }}
          >
            Related Articles
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { title: "How Lease Renewals Work Under the Electronic Communications Code", href: "/blog/forced-lease-renewals" },
              { title: "Why Phone Mast Rents Are Being Reduced", href: "/blog/reduce-phone-mast-rents" },
              { title: "What Is a Phone Mast Lease? A Landlord's Guide", href: "/blog/what-is-a-phone-mast-lease" },
              { title: "Mistakes to Avoid as a Phone Mast Landlord", href: "/blog/mistakes-to-avoid-as-a-phone-mast-landlord" },
              { title: "Telecom Code Rights vs Property Rights", href: "/blog/telecom-code-rights-vs-property-rights-what-every-phone-mast-landlord-should-know" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "#1B4F72",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span aria-hidden="true" style={{ color: "#a4ca62", fontWeight: 700 }}>→</span>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={`Need Advice on Your ${data.name} Phone Mast Lease?`}
        subheadline="Contact us for a free, no-obligation consultation. We act only for landlords — never for mobile phone operators."
        ctaText="Free Rent Estimate"
        ctaHref="/free-rent-estimate"
      />
    </>
  );
}
