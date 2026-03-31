import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast FAQ | Leases, Rent & Landlord Rights | Expert Answers",
  description:
    "Comprehensive answers to the most common questions about phone mast leases, rent reviews, the Electronic Communications Code, and UK landlord rights. Expert advice from specialist surveyors.",
  alternates: { canonical: "https://phonemastadvice.co.uk/faq" },
  openGraph: {
    title: "Phone Mast FAQ — Leases, Rent & Landlord Rights",
    description:
      "Expert answers to common questions about phone mast leases, rent reviews, the ECC, and UK landlord rights from The Phone Mast Advice Company.",
    type: "website",
  },
};

const faqCategories: Array<{ category: string; items: FAQItem[] }> = [
  {
    category: "Phone Mast Basics",
    items: [
      {
        question: "What is a phone mast?",
        answer:
          "A phone mast (also called a mobile mast, base station, or telecoms tower) is a structure that transmits and receives signals for mobile communications. Masts carry antennae, microwave dishes, and associated equipment required to provide 2G, 3G, 4G, and 5G coverage. They are typically made from galvanised steel and have a lifespan of approximately 30 years. The geographic area a mast serves is called a cell; interconnected cells form a cellular network.",
      },
      {
        question: "What is a phone mast lease?",
        answer:
          "A phone mast lease is a legal contract granting a mobile network operator (or infrastructure company) exclusive possession of land or property for a specified period, in return for consideration — usually in the form of annual rent. Leases granted after 28 December 2017 are governed by the Electronic Communications Code introduced by the Digital Economy Act 2017. Pre-2017 leases may also benefit from Landlord and Tenant Act 1954 protections.",
      },
      {
        question: "What is phone mast rent?",
        answer:
          "Phone mast rent is the monetary compensation paid by a telecoms operator to a landlord or property owner for the right to use their land or property to host a phone mast. The amount is agreed in the lease and typically paid annually or quarterly. Under the Electronic Communications Code introduced in 2017, rent is assessed using a 'no-scheme' valuation model rather than a market value approach, which often produces lower figures — particularly on agricultural land.",
      },
      {
        question: "What is a phone mast lease premium?",
        answer:
          "A phone mast lease premium is a lump sum payment made to a landlord in exchange for the right to use land for a phone mast — either instead of, or in addition to, ongoing annual rent. Investors regularly purchase phone mast lease income streams, paying a lump sum (the premium) in exchange for the right to receive future rent payments. Whether a premium is in your interest depends on your specific circumstances, and specialist advice is recommended before agreeing to any lump sum offer.",
      },
    ],
  },
  {
    category: "Rents and Reviews",
    items: [
      {
        question: "How much is my phone mast worth in rent?",
        answer:
          "Phone mast rents vary considerably depending on location, operator, site type, and the applicable legal framework. Under the Electronic Communications Code, rents are assessed using a 'no-scheme' valuation model. The Vache Farm case [2024] UKUT 216 (LC) provides the current benchmark. Agricultural and rural sites typically attract lower rents than urban or rooftop sites. We offer a free rent estimate based on your specific site and circumstances — call 01691 791543.",
      },
      {
        question: "What is a phone mast rent review?",
        answer:
          "A rent review is a formal reassessment of the rent payable under your lease, typically triggered at agreed intervals (often every five years). Operators use rent reviews to attempt to reduce rents under the 'no-scheme' model introduced by the Digital Economy Act 2017. Without specialist advice, many landlords accept significant reductions. We benchmark your rent against comparable UK deals and negotiate to secure fair rates.",
      },
      {
        question: "Can operators reduce my phone mast rent?",
        answer:
          "Under the Electronic Communications Code, operators can apply to the Upper Tribunal (Lands Chamber) for rents to be assessed under the 'no-scheme' valuation model, which often produces lower figures than pre-2017 market-value rents. However, there are significant arguments available to landlords — particularly those with pre-2017 leases — and specialist advice can make a substantial difference to the outcome. We have successfully challenged proposed reductions on many occasions.",
      },
      {
        question: "Can I stop a phone mast operator from reducing my rent?",
        answer:
          "Whether you can prevent a rent reduction depends on your lease terms and whether the lease predates December 2017. The Supreme Court ruling in Compton Beauchamp Estates v CTIL [2022] UKSC 18 established important protections for landlords with LTA 1954-protected leases. We assess your specific position and advise on what defences and negotiating strategies are available.",
      },
    ],
  },
  {
    category: "Lease Renewals",
    items: [
      {
        question: "My lease is expiring — what are my rights?",
        answer:
          "Your rights at lease expiry depend significantly on whether your lease was granted before or after 28 December 2017. Pre-2017 leases may benefit from both the Landlord and Tenant Act 1954 and the old Electronic Communications Code. Post-2017 leases are governed solely by the new Code. In either case, operators can continue to occupy the site whilst a new agreement is negotiated. We advise on the full extent of your rights and options before any renewal begins.",
      },
      {
        question: "What is a Code lease renewal?",
        answer:
          "A Code lease renewal is the process of agreeing new terms for a phone mast lease governed by the Electronic Communications Code (as amended by the Digital Economy Act 2017). Unlike LTA 1954 renewals, Code lease renewals are governed by the Code's specific renewal provisions, which differ in important respects from commercial lease renewal law. Specialist advice is essential.",
      },
      {
        question: "Can I refuse to renew a phone mast lease?",
        answer:
          "In certain circumstances, yes — particularly if you have genuine redevelopment plans for the land. However, operators can apply to the Upper Tribunal (Lands Chamber) under the Code to oppose removal and continue occupation if removal would cause significant disruption to network coverage. We assess your specific situation and the realistic options available.",
      },
    ],
  },
  {
    category: "Operators and Industry",
    items: [
      {
        question: "Who are CTIL and Cornerstone — are they the same company?",
        answer:
          "Yes. CTIL stands for Cornerstone Telecommunications Infrastructure Limited — that is the legal entity name. Cornerstone is the commercial trading brand. They are the same company, jointly owned by Vodafone and O2, managing approximately 14,200 macro and 1,400 micro sites across the UK. Do not be confused by them appearing as separate entities — they are not.",
      },
      {
        question: "Is Arqiva still a mobile mast operator?",
        answer:
          "No. Arqiva sold its mobile telecommunications infrastructure business to Cellnex in July 2020. The current operating entity for those mobile mast sites is On Tower UK Ltd, which is part of the Cellnex group. Arqiva now focuses exclusively on broadcast infrastructure (television and radio transmitters). If your lease was originally with Arqiva for mobile masts, your current counterpart is On Tower (Cellnex).",
      },
      {
        question: "What is MBNL?",
        answer:
          "MBNL (Mobile Broadband Network Limited) is the joint venture network sharing company for EE and Three (Hutchison 3G). It is separate from CTIL/Cornerstone, which is the Vodafone/O2 joint venture. Importantly, O2 is not part of MBNL — it shares infrastructure with Vodafone through CTIL/Cornerstone instead.",
      },
      {
        question: "Are phone companies allowed to upgrade existing masts?",
        answer:
          "Yes. The Electronic Communications Code gives operators enhanced rights to upgrade equipment and share sites. Operators can upgrade within certain limits without requiring landlord consent, subject to compliance with planning regulations and the specific terms of the lease. Upgrade requests may, however, carry implications for your lease terms — particularly if the upgrade involves structural changes or additional equipment. We advise on upgrade requests from operators.",
      },
    ],
  },
  {
    category: "Legislation",
    items: [
      {
        question: "What is the Electronic Communications Code?",
        answer:
          "The Electronic Communications Code (ECC) is the legal framework governing how mobile operators access land to install and maintain telecoms equipment. Originally in Schedule 2 of the Telecommunications Act 1984, it was comprehensively reformed by the Digital Economy Act 2017, which inserted a new Code as Schedule 3A of the Communications Act 2003. The reformed Code took effect on 28 December 2017 and introduced the 'no-scheme' valuation model, significantly changing how phone mast rents are assessed.",
      },
      {
        question: "What is the Digital Economy Act 2017 and how does it affect my mast?",
        answer:
          "The Digital Economy Act 2017 introduced the new Electronic Communications Code in force from 28 December 2017. Its key changes for landlords include: replacing market-value rents with a 'no-scheme' valuation model; splitting payments into 'consideration' and 'compensation' components; giving operators enhanced rights to share and upgrade equipment; and creating new imposition procedures enabling operators to apply to the Upper Tribunal (Lands Chamber) for Code agreements when negotiations fail.",
      },
      {
        question: "What is the PSTI Act 2022?",
        answer:
          "The Product Security and Telecommunications Infrastructure Act 2022 amends the Electronic Communications Code. Sections 61-64 are expected to commence on 7 April 2026, bringing further changes to how operators can upgrade and share equipment, and to Code agreement imposition procedures. Landlords with leases coming up for renewal around this date should take specialist advice on the timing implications.",
      },
    ],
  },
  {
    category: "Sales, Removal and Costs",
    items: [
      {
        question: "Can I sell my phone mast lease?",
        answer:
          "Yes. Investors pay lump sum premiums for phone mast lease income streams, providing capital in place of ongoing annual rent. Selling provides financial certainty and eliminates the need to manage future lease renewals. Whether a sale is in your best interests depends on your circumstances, the lease terms, current market rates, and your personal financial objectives. We advise on the full implications before any sale.",
      },
      {
        question: "How can I remove a phone mast from my land?",
        answer:
          "Removing a phone mast is a complex process. Operators have Code rights that may allow them to contest removal notices through the Upper Tribunal (Lands Chamber). Practical considerations include: costs of removal, site restoration, third-party connections (Openreach, Virgin Media), and potential legal proceedings. We advise on your specific situation and options before any removal process begins.",
      },
      {
        question: "How much does phone mast advice cost?",
        answer:
          "Our initial consultation is free and without obligation. For ongoing representation, our fees are typically structured on a no-win, no-fee basis — we are paid when we achieve a successful outcome for you, often as a percentage of any improved rent secured or a one-off payment for the outcome delivered. Fees are agreed in our Terms of Business before we begin work. Contact us to discuss your specific situation.",
      },
    ],
  },
];

// Flatten all items for JSON-LD
const allFaqs: FAQItem[] = faqCategories.flatMap((cat) => cat.items);

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "3rem 1.5rem" }}>
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
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: "1.1875rem",
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.65,
            }}
          >
            Expert answers to the most common questions from UK landlords about phone mast leases, rent reviews, and the Electronic Communications Code.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "48rem" }}>
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                  color: "#1B4F72",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "3px solid #a4ca62",
                }}
              >
                {category.category}
              </h2>
              <FAQAccordion items={category.items} showJsonLd={false} />
            </div>
          ))}
        </div>
      </section>

      <CTASection
        headline="Still Have Questions About Your Phone Mast?"
        subheadline="Our specialists offer a free initial consultation. We act only for landlords — never for mobile phone operators."
        ctaText="Get Free Advice"
        ctaHref="/contact"
      />
    </>
  );
}
