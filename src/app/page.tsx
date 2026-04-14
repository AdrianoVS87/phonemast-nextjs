import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServiceCard, { type ServiceCardProps } from "@/components/ServiceCard";
import TestimonialCard, { type TestimonialCardProps } from "@/components/TestimonialCard";
import TrustSignals from "@/components/TrustSignals";
import CTASection from "@/components/CTASection";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
// AnimatedSection removed — Motion library's transform/opacity inline styles
// created GPU compositor overhead in Chrome during scroll on macOS.

export const revalidate = 60; // ISR — revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Phone Mast Advice | Expert Lease & Rent Reviews | UK Specialists",
  description:
    "Independent specialist telecom surveyors acting only for UK landlords. Expert phone mast lease renewals, rent reviews, and new lettings. 30+ years experience, 10,000+ deals. Call 01691 791543.",
  alternates: {
    canonical: "https://phonemastadvice.co.uk",
  },
  openGraph: {
    title: "Phone Mast Advice | Expert Lease & Rent Reviews | UK Specialists",
    description:
      "Independent specialist telecom surveyors acting only for UK landlords. 30+ years experience, 10,000+ deals completed across the UK.",
    url: "https://phonemastadvice.co.uk",
    type: "website",
    locale: "en_GB",
    siteName: "Phone Mast Advice",
  },
};

const services: ServiceCardProps[] = [
  {
    icon: "📋",
    title: "Rent Reviews",
    description:
      "Secure fair market rent and contract terms. We benchmark your site against comparable UK deals to ensure you're fairly compensated.",
    href: "/phone-mast-services/rent-reviews",
  },
  {
    icon: "🔄",
    title: "Lease Renewals",
    description:
      "Get the right lease from day one. Navigate the Electronic Communications Code confidently with specialist representation.",
    href: "/phone-mast-services/lease-renewals",
  },
  {
    icon: "📝",
    title: "New Lettings",
    description:
      "Get the right lease from day one. We negotiate new mast lettings ensuring strong rents, access restrictions, and redevelopment protections.",
    href: "/phone-mast-services/new-lettings",
  },
  {
    icon: "💷",
    title: "Mast Sales",
    description:
      "Capitalise on your valuable lease asset. We advise on and facilitate mast sales, ensuring you receive the best achievable consideration.",
    href: "/phone-mast-services/mast-sales",
  },
  {
    icon: "🏗️",
    title: "Removal & Redevelopment",
    description:
      "Reclaim your land when needed. We advise on removing masts and protecting your redevelopment rights under the Electronic Communications Code.",
    href: "/phone-mast-services/removal-and-redevelopment",
  },
  {
    icon: "⚡",
    title: "Electricity Costs Recovery",
    description:
      "Many landlords are unknowingly subsidising operator electricity costs. We identify and recover these charges on your behalf.",
    href: "/phone-mast-services/electricity-costs-recovery",
  },
  {
    icon: "📁",
    title: "Lease Retrievals",
    description:
      "Lost or misplaced your original lease? We assist with documentation retrieval, record clarification and archive searches so nothing is missed.",
    href: "/phone-mast-services/lease-retrievals",
  },
  {
    icon: "➕",
    title: "Other Services",
    description:
      "Know your rights under modern telecom law. Portfolio valuations, dispute resolution, lease interpretation — tailored specialist advice.",
    href: "/phone-mast-services/other-services",
  },
];

const testimonials: TestimonialCardProps[] = [
  {
    name: "John & Patricia Hargreaves",
    county: "Yorkshire",
    quote:
      "Matt secured a rent review settlement that was nearly four times what the operator initially offered. We had no idea how much we were being underpaid. The whole process was handled professionally and the advice was always clear.",
    rating: 5,
  },
  {
    name: "Compton Beauchamp Estates",
    county: "Oxfordshire",
    quote:
      "Matt Restall has been managing our Phone Mast site portfolio since 2012. He was involved in instigating and advising on the famous case Compton Beauchamp Estates v CTIL [2022] UKSC 18. We value the advice we have received and would happily recommend his services to any landlords with Phone Mast sites.",
    rating: 5,
  },
  {
    name: "David & Susan Alderton",
    county: "Shropshire",
    quote:
      "When Cornerstone came to us about renewing our lease at a drastically reduced rent, we turned to Phone Mast Advice. They fought our corner and secured terms we were genuinely happy with. Highly professional service.",
    rating: 5,
  },
];

const faqs: FAQItem[] = [
  {
    question: "What is the Electronic Communications Code and how does it affect my rent?",
    answer:
      "The Electronic Communications Code (ECC), introduced by the Digital Economy Act 2017, governs how mobile operators can access land for telecoms equipment. It introduced a new 'no-scheme' valuation model which can significantly reduce the rent operators are required to pay. As specialist advisors, we help you understand and challenge low rent offers under the Code.",
  },
  {
    question: "My operator has offered to renew my lease at a much lower rent — is this normal?",
    answer:
      "Unfortunately, yes. Since 2017, operators routinely use the Electronic Communications Code to push for dramatic rent reductions during renewals. However, there are strong grounds to challenge these offers — particularly for leases that pre-date the new Code. We have successfully resisted such reductions for many clients.",
  },
  {
    question: "How much does Phone Mast Advice charge?",
    answer:
      "Our fees are typically recovered from the improved rent or one-off payment we secure for you. We operate on a performance basis where possible — so you benefit from our expertise without up-front risk. Contact us for a free, no-obligation consultation.",
  },
  {
    question: "Who are CTIL and Cornerstone — are they the same company?",
    answer:
      "Yes. Cornerstone Telecommunications Infrastructure Limited (CTIL) is the legal entity; Cornerstone is the trading brand. They are the joint Vodafone/O2 network infrastructure company managing approximately 14,200 macro and 1,400 micro sites across the UK.",
  },
  {
    question: "Can I remove a mast from my land if I want to redevelop?",
    answer:
      "Potentially yes, but it is complex under the Electronic Communications Code. Operators have rights to apply to the Upper Tribunal (Lands Chamber) to contest removal. We can advise on your specific situation and how best to protect your redevelopment rights when structuring or renewing agreements.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: ProfessionalService */}
      <JsonLd
        data={{
          type: "ProfessionalService",
          name: "The Phone Mast Advice Company Ltd",
          url: "https://phonemastadvice.co.uk",
          telephone: "01691 791543",
          email: "info@phonemastadvice.co.uk",
          description:
            "Independent specialist telecom surveyors acting only for UK landlords. Expert phone mast lease renewals, rent reviews, and new lettings across the UK.",
          priceRange: "££",
          areaServed: "United Kingdom",
        }}
      />

      {/* Hero */}
      <Hero
        headline="Expert Phone Mast Lease Advice"
        subheadline="Independent specialist telecom surveyors acting only for UK landlords. We help you secure fair rents, strong contracts, and long-term protection — not the operator's interests."
        ctaText="Get Your Free Rent Estimate"
        ctaHref="/free-rent-estimate"
        secondaryCtaText="Free Lease Check"
        secondaryCtaHref="/free-lease-check"
      />

      {/* Stats bar */}
      <StatsBar />

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gap: "3rem",
              alignItems: "center",
            }}
            className="lg:grid-cols-2"
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(164,202,98,0.15)",
                  color: "#1B4F72",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "0.375rem 1rem",
                  borderRadius: "50px",
                  marginBottom: "1.25rem",
                  border: "1px solid rgba(164,202,98,0.4)",
                }}
              >
                Representing Landlords
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  color: "#1a1a2e",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                }}
              >
                Do You Need Help With a Phone Mast Lease?
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#374151",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Specialist agents representing landlords, negotiating Phone Mast lease renewals with Vodafone, EE, Hutchison 3G (Three), O2, Airwave Solutions, Arqiva, On Tower, Cornerstone, Cellnex, and Wireless Infrastructure Group (WIG).
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#374151",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                A well-structured telecoms lease can protect the value of your property for decades.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#374151",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                If you own land or property with a Phone Mast, telecom tower, rooftop antenna, or other telecommunications equipment, you need expert representation – not operator agents protecting their own interests. We help landlords secure fair rents, strong contracts, and long-term protection.
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#374151",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Mobile Phone Mast leases and telecom agreements are complex and governed by both commercial law and the Electronic Communications Code (ECC) – the legal framework that affects rent, negotiation rights, and landlord protections. Without specialist advice, landlords commonly face under-market rent offers, unfavourable access &amp; maintenance clauses, loss of redevelopment rights, confusing legal obligations under the ECC, and poor outcomes from operator-led negotiations.
              </p>
              <a href="/about-us" className="btn-primary">
                About Our Firm
              </a>
            </div>

            {/* How we help */}
            <div
              style={{
                backgroundColor: "#f9f8f5",
                borderRadius: "1rem",
                padding: "2rem",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#1B4F72",
                  marginBottom: "1.5rem",
                }}
              >
                How We Help Landlords
              </h3>
              {[
                {
                  icon: "🔍",
                  text: "We review your current agreement and any offers from operators, then explain your options in clear plain English.",
                },
                {
                  icon: "📞",
                  text: "We take over communication with the operator or their agents so you can focus on running your properties, not chasing rent increases or contract terms.",
                },
                {
                  icon: "📊",
                  text: "Using our extensive database of comparable UK deals, we negotiate strong terms and fair rents, even when facing big telecom operators.",
                },
                {
                  icon: "✍️",
                  text: "From initial strategy to final contract execution, we work with you and your solicitor to ensure your interests are fully protected.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                    marginBottom: i < 4 ? "1rem" : 0,
                  }}
                >
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      color: "#374151",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Changes Banner — UNMISSABLE */}
      <section
        style={{ backgroundColor: "#0d2f47", padding: "4rem 1.5rem" }}
        aria-labelledby="banner-2026-heading"
      >
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#a4ca62",
                color: "#0d2f47",
                fontWeight: 800,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.375rem 1.25rem",
                borderRadius: "50px",
                marginBottom: "1.25rem",
              }}
            >
              ⚠️ Now In Effect
            </span>
            <h2
              id="banner-2026-heading"
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
                color: "#ffffff",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Phone Mast Rent &amp; Lease Changes — Now In Force
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              The PSTI Act 2022 changes to phone mast rents and lease renewals are now in force. If you haven't reviewed your position, act now to protect your interests.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            {/* Rent card */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💷</div>
              <h3
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#ffffff",
                  marginBottom: "0.875rem",
                }}
              >
                Phone Mast Rent 2026
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                The no-network assumption, ECC valuation methodology, Vache Farm benchmark, and how 7 April 2026 removes the LTA 1954 rent advantage for legacy lease holders.
              </p>
              <a
                href="/phone-mast-rent-2026"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  backgroundColor: "#a4ca62",
                  color: "#0d2f47",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  minHeight: "44px",
                }}
              >
                Understand Your Rent →
              </a>
            </div>

            {/* Lease card */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📋</div>
              <h3
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#ffffff",
                  marginBottom: "0.875rem",
                }}
              >
                Phone Mast Lease 2026
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                Key lease clauses under the ECC — assignment, upgrading, break clauses, continuation provisions — and what the PSTI Act 2022 changes mean for your lease terms.
              </p>
              <a
                href="/phone-mast-lease-2026"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  backgroundColor: "#a4ca62",
                  color: "#0d2f47",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  minHeight: "44px",
                }}
              >
                Review Your Lease →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9f8f5" }}
        aria-labelledby="services-heading"
      >
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              id="services-heading"
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "#1a1a2e",
                marginBottom: "1rem",
              }}
            >
              Our Core Services
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#6b7280",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              Comprehensive specialist support for every phase of your phone mast
              relationship — from new lettings to dispute resolution.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/phone-mast-services" className="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Case study / landmark case */}
      <section className="section-padding" style={{ backgroundColor: "#1B4F72" }}>
        <div className="container-max">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(164,202,98,0.2)",
                color: "#a4ca62",
                fontWeight: 700,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "0.375rem 1rem",
                borderRadius: "50px",
                marginBottom: "1.5rem",
                border: "1px solid rgba(164,202,98,0.3)",
              }}
            >
              Landmark Case
            </span>
            <h2
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.25,
              }}
            >
              Involved in the Most Significant Telecoms Case in UK History
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "1.125rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
                To date, we are the first firm in the UK to have successfully fought back against operators and new legislation and kept rents at the same high levels. We were involved in the landmark case that established operators cannot use the new Code to bypass existing Landlord and Tenant Act 1954 protections, preventing significantly reduced terms from being imposed on landowners (see CTIL v Compton Beauchamp Estates [2022] UKSC 18). This is the most famous case in telecoms case law history, since the introduction of the Telecommunications Act 1984.
            </p>

            {/* Client quote */}
            <blockquote
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "1rem",
                padding: "1.75rem 2rem",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: "0 0 1rem",
                }}
              >
                &ldquo;Matt Restall has been managing the Compton Beauchamp Estates
                Phone Mast site portfolio since 2012. Matt was involved in
                instigating and advising on the famous court case Compton
                Beauchamp Estates v CTIL. We value the advice we have received
                from him over the last 12 years, and we would be happy to
                recommend his services to any landlords who have got Phone Mast
                sites.&rdquo;
              </p>
              <footer style={{ color: "#a4ca62", fontWeight: 700, fontSize: "0.9375rem" }}>
                — Compton Beauchamp Estates Ltd, Oxfordshire
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Testimonials */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#ffffff" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              id="testimonials-heading"
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "#1a1a2e",
                marginBottom: "1rem",
              }}
            >
              What Our Clients Say
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#6b7280",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Landlords across the UK who trusted us to protect their interests.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9f8f5" }}
        aria-labelledby="faq-heading"
      >
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gap: "3rem",
              alignItems: "start",
            }}
            className="lg:grid-cols-[1fr_1.5fr]"
          >
            <div>
              <h2
                id="faq-heading"
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  color: "#1a1a2e",
                  marginBottom: "1rem",
                }}
              >
                Common Questions
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#6b7280",
                  lineHeight: 1.65,
                  marginBottom: "2rem",
                }}
              >
                Answers to the questions we hear most from UK landlords about
                phone mast leases.
              </p>
              <a href="/faq" className="btn-primary">
                View All FAQs
              </a>
            </div>
            <FAQAccordion items={faqs} showJsonLd={true} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Protect Your Phone Mast Income?"
        subheadline="Get a free, no-obligation consultation with one of our specialist telecom surveyors. We only act for landlords."
        ctaText="Get Your Free Rent Estimate"
        ctaHref="/free-rent-estimate"
      />
    </>
  );
}
