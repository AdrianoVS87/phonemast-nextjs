import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | The Phone Mast Advice Company | UK Specialists Since 1999",
  description:
    "Independent specialist telecom surveyors with 25+ years experience advising UK landlords on phone mast leases. Involved in landmark Supreme Court case [2022] UKSC 18. RICS credentials. Reg. 13115582.",
  alternates: { canonical: "https://phonemastadvice.co.uk/about-us" },
  openGraph: {
    title: "About The Phone Mast Advice Company Ltd",
    description:
      "Independent specialist telecom surveyors acting only for UK landlords since 1999. RICS credentials, landmark case involvement, 1,000+ deals.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          type: "ProfessionalService",
          name: "The Phone Mast Advice Company Ltd",
          url: "https://phonemastadvice.co.uk/about-us",
          telephone: "01691 791543",
          email: "info@phonemastadvice.co.uk",
          description:
            "Independent specialist telecom surveyors acting only for UK landlords with 25+ years experience. RICS registered surveyors. Company registration 13115582.",
          priceRange: "££",
          areaServed: "United Kingdom",
        }}
      />

      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
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
            About The Phone Mast Advice Company
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
            }}
          >
            Independent specialist telecom surveyors. We act only for UK landlords — never for mobile phone operators.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          backgroundColor: "#a4ca62",
          padding: "1.5rem",
        }}
      >
        <div
          className="container-max"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          {[
            { number: "25+", label: "Years of Experience" },
            { number: "1,000+", label: "Mast Deals Completed" },
            { number: "3", label: "UK Offices" },
            { number: "100%", label: "Landlord-Only Representation" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "#1a1a2e",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#1a1a2e",
                  margin: "0.25rem 0 0",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our story */}
      <section className="section-padding">
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
            Our Story
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The Phone Mast Advice Company Ltd was founded by Matt Restall to address a clear gap in the UK telecoms property market: the vast majority of landlords with phone mast leases had no specialist independent representation. Mobile network operators employ experienced agents and surveyors; without equivalent expertise, UK landlords were regularly accepting below-market rents and unfavourable lease terms.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Our firm was established to level that playing field. We act exclusively for landowners and property owners — never for mobile phone operators. This independence is fundamental to the service we provide. When Vodafone, O2, EE, Three, CTIL/Cornerstone, On Tower (formerly Arqiva), Cellnex, Airwave, or Wireless Infrastructure Group approach our clients, they face specialist representation that works solely in the landlord&apos;s interest.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Over 25 years, we have built the UK&apos;s most comprehensive database of comparable phone mast deals. This evidence base underpins every negotiation and enables us to challenge operator proposals with precision. We have completed over 1,000 phone mast deals across the UK, representing individual landowners, farming estates, supermarket chains, local authorities, housing associations, and major corporations.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7 }}>
            The Phone Mast Advice Company Ltd is registered in England and Wales (Company Registration: 13115582). We maintain offices in London, Bristol, and Oswestry.
          </p>
        </div>
      </section>

      {/* Landmark case */}
      <section
        style={{
          backgroundColor: "#1B4F72",
          padding: "3rem 1.5rem",
        }}
      >
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#ffffff",
              marginBottom: "1.25rem",
            }}
          >
            The Most Famous Telecoms Case in UK History
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            The Phone Mast Advice Company was involved in instigating and advising on{" "}
            <em>Compton Beauchamp Estates v CTIL</em> [2022] UKSC 18 — the Supreme Court ruling that established operators with existing Landlord and Tenant Act 1954 protections cannot use the Electronic Communications Code to impose significantly reduced rents or terms on landlords.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            This was the most significant UK telecoms case since the Telecommunications Act 1984, and its implications continue to protect the rights of landlords with pre-2017 leases across the country.
          </p>
          <blockquote
            style={{
              borderLeft: "4px solid #a4ca62",
              paddingLeft: "1.5rem",
              margin: "0 0 1.5rem 0",
              fontStyle: "italic",
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.75,
            }}
          >
            &ldquo;Matt Restall has been managing the Compton Beauchamp Estates Phone Mast site portfolio since 2012. Matt was involved in instigating and advising on the famous court case Compton Beauchamp Estates v CTIL. We value the advice we have received from him over the last 12 years, and we would be happy to recommend his services to any landlords who have got Phone Mast sites.&rdquo;
            <cite
              style={{
                display: "block",
                marginTop: "0.75rem",
                fontStyle: "normal",
                fontWeight: 600,
                color: "#a4ca62",
                fontSize: "0.9375rem",
              }}
            >
              — Richard Salmon, Director, Compton Beauchamp Estates
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Our approach */}
      <section className="section-padding">
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
            RICS Registered Surveyors
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Our team includes RICS (Royal Institution of Chartered Surveyors) registered surveyors. The RICS credential is the gold standard in UK surveying and property advice, ensuring professional standards, accountability, and specialist expertise.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            RICS registration means our surveyors adhere to a rigorous code of professional conduct, carry professional indemnity insurance, and apply best-practice standards to every client engagement.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.25rem",
            }}
          >
            How Our Process Works
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              {
                step: "1",
                title: "First Contact — Free Consultation",
                detail:
                  "Contact us by phone, email, or WhatsApp. We discuss your situation, the operator involved, and your current lease position. All initial consultations are free and without obligation.",
              },
              {
                step: "2",
                title: "Document Review",
                detail:
                  "We review your current lease, any correspondence from the operator, and any heads of terms or rent proposals — at no charge. This gives us the information needed to advise on your position.",
              },
              {
                step: "3",
                title: "Terms of Business and Strategy",
                detail:
                  "We provide written advice on your options and our proposed strategy, together with our terms of business. Our fees are structured on a per-instruction basis, typically on a no-win, no-fee model.",
              },
              {
                step: "4",
                title: "Dedicated Surveyor",
                detail:
                  "Once instructed, you are allocated a dedicated specialist surveyor who manages your case from start to finish and can be contacted for updates at any time.",
              },
              {
                step: "5",
                title: "Negotiation",
                detail:
                  "Your surveyor engages with the operator or their agents and conducts negotiations on your behalf, drawing on our database of comparable deals and up-to-date case law.",
              },
              {
                step: "6",
                title: "Result",
                detail:
                  "We secure the best achievable rent and lease terms for your situation, working with your solicitor on final documentation where required.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#1B4F72",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "#1a1a2e",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#374151",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "1000px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Our Offices
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                city: "London",
                address: "167-169 Great Portland Road\n5th Floor\nLondon\nW1W 5PF",
              },
              {
                city: "Bristol",
                address: "2nd Floor, 5 High Street\nWestbury on Trym\nBristol\nBS9 3BY",
              },
              {
                city: "Oswestry",
                address: "The Fort Offices\nArtillery Business Park\nOswestry\nSY11 4AD",
              },
            ].map((office) => (
              <div
                key={office.city}
                className="card"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#1B4F72",
                    marginBottom: "0.75rem",
                  }}
                >
                  📍 {office.city}
                </h3>
                <address
                  style={{
                    fontStyle: "normal",
                    fontSize: "1rem",
                    color: "#374151",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                  }}
                >
                  {office.address}
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Protect Your Phone Mast Income?"
        subheadline="Contact us today for a free, no-obligation consultation. We only act for landlords — never for mobile phone operators. Company Reg: 13115582."
        ctaText="Get Your Free Rent Estimate"
        ctaHref="/free-rent-estimate"
      />
    </>
  );
}
