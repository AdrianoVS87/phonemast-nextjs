import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast FAQ | Common Questions Answered | Phone Mast Advice",
  description:
    "Answers to the most common questions about phone mast leases, rent reviews, the Electronic Communications Code, and landlord rights. Expert UK advice.",
  alternates: { canonical: "https://phonemastadvice.co.uk/faq" },
};

const faqs: FAQItem[] = [
  {
    question: "What is the Electronic Communications Code (ECC)?",
    answer:
      "The Electronic Communications Code is the legal framework governing how mobile operators can access land to install and maintain telecoms equipment. It was substantially updated by the Digital Economy Act 2017 (in force from 28 December 2017). The updated Code introduced a 'no-scheme' valuation principle that changed how rents are calculated, often leading to operators seeking significant rent reductions.",
  },
  {
    question: "Can operators reduce my phone mast rent?",
    answer:
      "Under the updated Electronic Communications Code, operators can apply to the Upper Tribunal (Lands Chamber) to have rents assessed under the 'no-scheme' valuation model, which typically produces lower figures than commercial market rents. However, there are strong arguments against accepting reduced rents, particularly for pre-2017 leases, and specialist advice can make a significant difference to the outcome.",
  },
  {
    question: "What is a phone mast rent review?",
    answer:
      "A rent review is the periodic process by which the rent payable under your phone mast lease is reassessed. The frequency depends on your lease terms — typically every 5 years. Operators will often use the review to attempt to lower your rent. We benchmark your rent against comparable deals and negotiate to secure fair market rates.",
  },
  {
    question: "My lease is expiring — what are my rights?",
    answer:
      "Your rights depend significantly on whether your lease was granted before or after December 2017. Pre-2017 leases may fall under the Landlord and Tenant Act 1954 as well as the new Electronic Communications Code. We advise on the full extent of your rights and options before any renewal negotiations begin.",
  },
  {
    question: "Who are CTIL and Cornerstone — are they the same company?",
    answer:
      "Yes. Cornerstone Telecommunications Infrastructure Limited (CTIL) is the legal entity name; Cornerstone is the commercial trading brand. They are the joint infrastructure company owned by Vodafone and O2, managing approximately 14,200 macro and 1,400 micro sites across the UK.",
  },
  {
    question: "Is Arqiva still a mobile mast operator?",
    answer:
      "No. Arqiva sold its mobile telecoms infrastructure business to Cellnex in July 2020. The operating entity for those sites is now On Tower UK Ltd (formerly Arqiva Services). Arqiva itself now focuses solely on broadcast infrastructure. If you have a lease with the entity formerly known as Arqiva Mobile, your landlord is now On Tower (part of Cellnex).",
  },
  {
    question: "Can I remove a phone mast from my land?",
    answer:
      "Potentially yes, but it is a complex process under the Electronic Communications Code. Operators have rights to apply to the Upper Tribunal (Lands Chamber) to contest removal notices, particularly if removal would affect service coverage. We advise on your specific situation and how to protect your redevelopment rights when structuring any agreement.",
  },
  {
    question: "How much does phone mast advice cost?",
    answer:
      "Our initial consultation is free and without obligation. For ongoing representation, our fees are typically structured to align with the improved terms we achieve for you. Contact us to discuss the options for your specific situation.",
  },
  {
    question: "What is MBNL?",
    answer:
      "Mobile Broadband Network Limited (MBNL) is the joint venture network sharing company for EE and Three (Hutchison 3G). It is separate from CTIL/Cornerstone, which is the Vodafone/O2 joint venture. O2 is not part of MBNL.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#1a1a2e",
              marginBottom: "1rem",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#6b7280",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
            }}
          >
            Common questions from UK landlords about phone mast leases, rent
            reviews, and the Electronic Communications Code.
          </p>
          <FAQAccordion items={faqs} showJsonLd={true} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
