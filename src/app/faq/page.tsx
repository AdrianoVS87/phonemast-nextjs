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
          "A Phone Mast can have various different names, for example, Phone Mast, mobile Phone Mast site, mobile base station, or radio tower. Phone masts are typically made from galvanised steel and are required to provide signals to and from mobile devices such as phones, computers and tablets. A Phone Mast transmits and receives signals normally via antennae systems, microwave dishes and other electronic communications equipment, which can include cabins, cabinets, feeder cables, racks, RRUs (Remote Radio Units), fibre optic cables and specific hardware and software needed to allow the current UK licenced mobile phone operators to provide 2G, 3G, 4G and 5G signals to their customers. The geographic area that a Phone Mast provides coverage to is called a cell. These cells then connect into what is called a cellular network. Phone masts generally have a life span of around 30 years and are subject to annual health and safety checks, so they are maintained properly and safe to climb.",
      },
      {
        question: "What is a phone mast lease?",
        answer:
          "A Phone Mast lease is a legal contract, with exclusive possession, over land or property for a period of time (fixed or periodic) in return for consideration, usually in the form of rent. This is not to be confused with a Phone Mast Lease Premium.",
      },
      {
        question: "What is phone mast rent?",
        answer:
          "Phone Mast rent refers to the monetary compensation paid by a telecoms operator or a third-party investor to a landlord or property owner for the use of their land or property to host a mobile Phone Mast. This rent is typically agreed upon in a lease agreement between the landlord (lessor) and the operator or investor (lessee). The amount of Phone Mast rent can vary depending on factors such as the location, size, and type of mast, as well as the prevailing market conditions and demand for mobile coverage in the area. Phone Mast rent represents a source of income for landlords, providing them with ongoing financial compensation for allowing their land or property to be used for telecommunications infrastructure.",
      },
      {
        question: "What is a mobile phone mast lease premium?",
        answer:
          "A mobile Phone Mast lease premium is a lump sum payment made by a mobile network operator or third party investor to a landowner or mast owner for the right to install a mobile Phone Mast on their property or mast structure. The lease premium is typically paid upfront as a one-time payment, and the amount can vary depending on various factors such as the location, size, and type of mast, as well as the demand for mobile coverage in the area. The lease premium is often negotiated as part of a lease agreement between the mast owner and the mobile network operator. In addition to the lease premium, the agreement may also include ongoing rental payments, which are typically paid monthly or annually. In some instances lease premium and lump sum payments can be used instead of an annual rental payment. In particular, third-party investors often look to secure rental income streams using lump sum premium payments.",
      },
    ],
  },
  {
    category: "Rents and Reviews",
    items: [
      {
        question: "How much is my mobile phone mast worth?",
        answer:
          "The value of a mobile Phone Mast can vary widely depending on various factors such as location, size and type, as well as the demand for mobile coverage in the area. To get an accurate estimate of the value of your mobile Phone Mast, you need to consult with a professional agent or a company such as a Phone Mast advice company that specialises in the sale and lease of mobile phone masts. They will be able to assess your specific mast and provide you with a detailed assessment based on market conditions and other relevant factors. Additionally, the value of a mobile Phone Mast can also be influenced by the terms of any existing leases or agreements with mobile operators, as well as any local planning regulations and government legislation in your area.",
      },
      {
        question: "Can I stop a phone mast operator from reducing my rent?",
        answer:
          "Whether you can stop a mobile Phone Mast operator from reducing your rent depends on the terms of your lease agreement and whether your contract is still within the agreed term. If the lease agreement specifies a fixed rental amount, the mobile Phone Mast operator may not be able to unilaterally reduce your rent. However, if the lease agreement allows for rent adjustments based on certain factors such as changes in market conditions or demand for mobile coverage, the mobile Phone Mast operator may have the right to reduce your rent. If your contract has expired, the operator may be able to reduce your rent and take advantage of the new government legislation — Digital Economy Act 2017 – Electronic Communications Code. If you believe that the mobile Phone Mast operator is attempting to reduce your rent unfairly or in violation of the terms of the lease agreement, you may need to consult with a property agent or lawyer who specialises in property or telecommunications law to determine your options and protect your rights.",
      },
    ],
  },
  {
    category: "Legislation",
    items: [
      {
        question: "What is the electronic communications code?",
        answer:
          "The Electronic Communications Code (ECC), as reformed by the Digital Economy Act 2017, is the legal framework governing telecommunications operators' rights to install and maintain equipment on land. Originally contained in Schedule 2 of the Telecommunications Act 1984, it was comprehensively reformed by the Digital Economy Act 2017, which inserted a new Code as Schedule 3A of the Communications Act 2003. The previous laws introduced a telecoms code which set out guidelines for the implementation and maintenance of Phone Mast sites and sought to resolve disputes between landlords and telecoms operators. The new Code will apply to telecoms sites where any loss is able to be compensated financially and where building the site is in the public interest.",
      },
    ],
  },
  {
    category: "Opposing a Phone Mast",
    items: [
      {
        question: "How do I oppose a phone mast on my land?",
        answer:
          "If you do not currently have a mobile Phone Mast on your land it is important that you contact a Phone Mast agent as soon as you have received any correspondence from the operator. It is not recommended that you allow the operator on the site to carry out any surveys or engage in any dialogue as this could prejudice your position. It should be noted that once an operator has surveyed the site and is able to demonstrate the site is buildable, they will be one step closer to being able to legally force an agreement on you and install a mast on your land or property. There are a number of factors that can prevent a mobile Phone Mast being installed on your land or property, but these need to be argued effectively in line with the current legislation. Many landowners are now opposing mobile phone masts because the rental income is not worth the burden or inconvenience of having the mast on site. You could also: review local regulations to determine if there are any restrictions on the installation of mobile phone masts; gather community support and create a petition or write letters to local officials or the mobile network operator; or contact your local council or planning authority to express your concerns.",
      },
    ],
  },
  {
    category: "Removal and Costs",
    items: [
      {
        question: "How can I remove a phone mast from my land or property?",
        answer:
          "Removing a mobile Phone Mast from your land or property can be a complex process. It is necessary from the outset to get a Phone Mast advice agent for initial and ongoing advice. It's important to follow the proper legal and regulatory procedures to ensure that you comply with all applicable laws and regulations. You'll need to determine the cost of removing the mobile Phone Mast, including any associated costs such as site restoration, agent and legal fees. You'll need to be aware that most mobile Phone Mast installations have third party connections for power/electricity and broadband. These include companies such as Openreach and Virgin Media. Agreements may need to be terminated, and equipment and cabling that is in situ may also need to be removed. It's important to remember that removing a mobile Phone Mast from your land or property can be a complex and costly process, and it's essential to carefully consider all the legal, financial, and practical implications before proceeding.",
      },
      {
        question: "How do we charge? / What are our fees?",
        answer:
          "Every site is unique, and our fees are tailored accordingly. Before we can provide an accurate breakdown of costs, we need to review the lease and any other relevant paperwork to understand the specifics of the case. Our Terms of Business are structured on a per-job basis, meaning each instruction has its own agreement that clearly outlines how our fees apply to that particular instruction. In most cases, we operate on a no-win, no-fee basis, ensuring that our clients only pay if we achieve a successful outcome. Additionally, our fees are designed to be incentivised, meaning that if we secure a higher rent or recover any backdated payments on behalf of our client, we receive a one-off payment or a small percentage of the amount gained. Since our fees are determined on a case-by-case basis, we can only provide precise details after reviewing all relevant documentation and having an initial consultation with the potential client.",
      },
      {
        question: "Are phone mast operators allowed to upgrade existing sites?",
        answer:
          "Yes, Phone Mast operators are generally allowed to upgrade existing sites, subject to compliance with local regulations and any lease agreements in place. Upgrading an existing mobile Phone Mast can involve various changes, such as adding or replacing antennas, installing new equipment, or modifying the physical structure of the mast. These upgrades may be necessary to meet increasing demand for mobile coverage, to improve network reliability and performance, or to comply with new regulatory requirements. However, any upgrades to an existing mobile Phone Mast must comply with planning regulations, which may impose restrictions on the height, appearance, and other aspects of the mast. Additionally, any lease agreements in place between the mobile Phone Mast operator and the property owner must be reviewed to determine whether the upgrades are permitted and whether any modifications to the lease agreement are required.",
      },
      {
        question: "Can the phone companies increase the height of the mast and add more equipment?",
        answer:
          "In most cases, phone companies are allowed to increase the height of the mast and add more equipment, subject to compliance with local regulations and any lease agreements in place. Increasing the height of a mobile Phone Mast or adding more equipment can be necessary to meet increasing demand for mobile coverage, to improve network reliability and performance, or to comply with new regulatory requirements. However, any modifications to an existing mobile Phone Mast must comply with planning regulations, which may impose restrictions on the height, appearance, and other aspects of the mast. Additionally, any lease agreements in place between the mobile Phone Mast operator and the property owner must be reviewed to determine whether the modifications are permitted and whether any modifications to the lease agreement are required.",
      },
      {
        question: "What happens when I sell my phone mast?",
        answer:
          "Investors are willing to pay premium sums for the leasehold or freehold of your Phone Mast. When you sell your Phone Mast, investors offer a large lump sum, also known as a lease premium payment, replacing your annual rent. Selling your Phone Mast eliminates the need to navigate uncertain rents and ongoing lease renewals, providing financial security. The investor will then take over management duties, allowing you to benefit from your asset's full value.",
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
