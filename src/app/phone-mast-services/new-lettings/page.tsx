import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "New Phone Mast on Your Land | New Lettings",
  description:
    "Been approached by an operator to put a phone mast on your land? Independent advice for UK landowners on new lettings: rent, Code rights, terms to negotiate, and next steps.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-services/new-lettings" },
  openGraph: {
    title: "New Phone Mast on Your Land: New Lettings Advice for UK Landowners",
    description:
      "What happens when an operator wants a new mast site, what you can negotiate, what rent to expect under the Code, and how we protect your land.",
    type: "website",
  },
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
  color: "#1a1a2e",
  marginBottom: "1rem",
  marginTop: "2.25rem",
};
const h3: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "1.25rem",
  color: "#1B4F72",
  marginBottom: "0.75rem",
  marginTop: "1.5rem",
};
const p: React.CSSProperties = { fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" };
const link: React.CSSProperties = { color: "#1B4F72", fontWeight: 700, textDecoration: "underline" };

const faqs = [
  {
    question: "An operator wants to put a phone mast on my land. Can I say no?",
    answer:
      "You can decline to agree terms, but under Paragraph 20 of the Electronic Communications Code the operator can then apply to the Tribunal to have an agreement imposed. The Tribunal will grant it where the prejudice to you can be compensated in money and the public benefit outweighs it, a test operators usually satisfy. The main exception is a genuine, settled intention to redevelop the land. In practice, negotiating good terms from the outset is the stronger position.",
  },
  {
    question: "How much rent will I get for a new phone mast?",
    answer:
      "New agreements are valued under the Code's no-network assumption, which values the land at its alternative use rather than its value to the network. For a standard rural greenfield site the Upper Tribunal's 2024 Vache Farm decision set consideration at £1,750 per annum, with rooftop and urban sites generally assessed at higher levels. You can also recover professional fees, compensation for loss or damage, electricity costs, and payment for access over your retained land.",
  },
  {
    question: "Who pays my surveyor and legal fees for a new letting?",
    answer:
      "Under Paragraph 84 of the Code, reasonable legal and valuation expenses incurred in connection with the grant of Code rights are recoverable from the operator, and operators normally provide a fee undertaking (usually capped) at the start of negotiations. We confirm the undertaking before work begins.",
  },
  {
    question: "What terms matter most in a new mast agreement?",
    answer:
      "The size and boundary of the compound, the access route and who maintains it, upgrade and sharing rights, break and lift and shift provisions to protect redevelopment, index-linked rent review, reinstatement of the land when the operator leaves, and clear rules on works, noise, and hours of access. These are far easier to secure before the first agreement is signed than at any later point.",
  },
  {
    question: "How long does a new letting take?",
    answer:
      "A negotiated agreement typically takes several months from first approach to signature, allowing for a site survey, heads of terms, and legal drafting. If the operator serves a Paragraph 20 notice, statutory timescales apply and the matter can move to the Tribunal if terms are not agreed, so early advice keeps you in control of the timetable.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Service",
          name: "Phone Mast New Lettings Advice",
          description:
            "Independent advice for UK landowners approached by mobile operators for a new phone mast site: rent under the Electronic Communications Code, terms to negotiate, and Paragraph 20 notices.",
          provider: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk/phone-mast-services/new-lettings",
          areaServed: "United Kingdom",
        }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "New Lettings" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            New Phone Mast on Your Land: New Lettings Advice for UK Landowners
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            If a mobile operator or its agent has approached you about a new mast site, the terms you agree now will govern the site for decades. We act only for landowners and negotiate the rent, the rights, and the protections before anything is signed.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/free-rent-estimate" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
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

      {/* Main content */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <div style={{ backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
              This is our new lettings service page. For how rent is assessed under the Code, read our{" "}
              <a href="/phone-mast-rent-2026" style={link}>phone mast rent</a> guide; for the clauses that matter in any agreement, see our{" "}
              <a href="/phone-mast-lease-2026" style={link}>phone mast lease</a> guide. Reviewed by the <a href="/team" style={link}>Phone Mast Advice team</a>.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>What is a phone mast new letting?</h2>
          <p style={p}>
            A new letting is the first agreement between a landowner and a mobile network operator for a site that has never hosted telecoms equipment. It usually starts with a letter or call from a site-acquisition agent acting for an operator such as EE, Three, Vodafone, O2, or an infrastructure company such as Cornerstone or On Tower, asking to survey your land and offering draft heads of terms.
          </p>
          <p style={p}>
            Because the Electronic Communications Code gives operators strong statutory rights once an agreement exists, the new-letting stage is the point of maximum leverage for the landowner. Terms that are hard or impossible to change later can be secured now.
          </p>

          <h2 style={h2}>Can I refuse a new phone mast on my land?</h2>
          <p style={p}>
            You are not obliged to agree the operator&rsquo;s terms. However, if negotiations fail the operator can serve a notice under Paragraph 20 of the Code and apply to the Tribunal for an agreement to be imposed. Under Paragraph 21 the Tribunal will grant it where any prejudice to you can be adequately compensated in money and the public benefit of the installation outweighs that prejudice. Operators almost always satisfy this test.
          </p>
          <p style={p}>
            The principal defence is redevelopment under Paragraph 21(5): a firm, settled, and unconditional intention to redevelop the land, with a reasonable prospect of carrying it out. For most landowners the practical route is not to refuse outright but to negotiate a strong agreement, which is exactly what a Tribunal-imposed agreement would deny you.
          </p>

          <h2 style={h2}>What rent should I expect for a new mast?</h2>
          <p style={p}>
            Rent, called consideration in the Code, is assessed under Paragraph 24 on the no-network assumption: your land is valued for its best alternative use, ignoring its value to the operator&rsquo;s network. For a standard rural greenfield site the Upper Tribunal&rsquo;s 2024 <em>Vache Farm</em> decision set the benchmark at £1,750 per annum; rooftop and urban sites are generally assessed at higher levels.
          </p>
          <p style={p}>
            The headline rent is not the whole picture. You are also entitled to compensation for loss or damage under Paragraph 25, to reasonable professional fees under Paragraph 84, to recover electricity costs where the operator uses your supply, and to payment for access rights across your retained land. Our <a href="/phone-mast-rent-2026" style={link}>phone mast rent guide</a> explains the valuation approach in detail.
          </p>

          <h2 style={h2}>What terms should I negotiate in a new mast agreement?</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
            {[
              "Compound boundary: a precisely defined, fenced area so the operator cannot expand without renegotiation",
              "Access: a defined route, maintenance responsibility, notice periods, and restrictions on hours and heavy vehicles",
              "Redevelopment protection: a break clause and, for rooftops, a lift and shift right that the operator pays for",
              "Upgrading and sharing: the Code allows upgrades and sharing within limits, so the agreement should define the apparatus and any additional payment for new occupiers where the law permits",
              "Rent review: index-linked reviews so the rent keeps pace over a 10-year or longer term",
              "Reinstatement: full removal of apparatus, foundations, cabinets, fencing, and tracks when the operator leaves, under Paragraph 40",
              "Works and nuisance: rules on construction hours, noise, screening, and the condition in which the site is left",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 style={h2}>How our new lettings service works</h2>
          <h3 style={h3}>1. Review the approach</h3>
          <p style={p}>We look at the agent&rsquo;s letter, any heads of terms, and your land, and tell you what the operator is really asking for and what a good outcome looks like.</p>
          <h3 style={h3}>2. Secure the fee undertaking</h3>
          <p style={p}>Before detailed work begins we obtain the operator&rsquo;s undertaking to meet your reasonable professional fees, so advice does not come out of your rent.</p>
          <h3 style={h3}>3. Negotiate rent and terms</h3>
          <p style={p}>We handle the negotiation with the operator&rsquo;s agents: consideration, compensation, and every clause in the list above.</p>
          <h3 style={h3}>4. Completion with your solicitor</h3>
          <p style={p}>We work with your solicitor to make sure the final lease reflects the deal agreed and that nothing has been added in the drafting.</p>

          <h2 style={h2}>Our fees</h2>
          <p style={p}>
            The initial consultation is free and without obligation. For new lettings, our reasonable fees are normally met by the operator under a fee undertaking, and we confirm the position with you before any work starts. We act exclusively for landowners.
          </p>

          <h2 style={h2}>New lettings: frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <h2 style={h2}>You may also need</h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginBottom: "1rem" }}>
            {[
              { label: "Free Rent Estimate", href: "/free-rent-estimate", desc: "What your site could be worth" },
              { label: "Phone Mast Rent Guide", href: "/phone-mast-rent-2026", desc: "How consideration is assessed" },
              { label: "Phone Mast Lease Guide", href: "/phone-mast-lease-2026", desc: "The clauses that matter" },
              { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals", desc: "When an existing agreement ends" },
              { label: "Removal & Redevelopment", href: "/phone-mast-services/removal-and-redevelopment", desc: "Protecting building plans" },
              { label: "Contact Our Team", href: "/contact", desc: "Speak to a specialist today" },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{ display: "block", backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1rem 1.25rem", textDecoration: "none" }}>
                <p style={{ fontWeight: 700, color: "#1B4F72", margin: "0 0 0.25rem", fontSize: "1rem" }}>{item.label}</p>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.4 }}>{item.desc}</p>
              </a>
            ))}
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", marginTop: "2rem" }}>
            This page was last updated on 3 September 2026. It is general guidance for landowners and does not constitute legal advice. Please contact us for advice on your circumstances.
          </p>
        </div>
      </section>

      <CTASection
        headline="Approached About a New Phone Mast?"
        subheadline="Do not sign the operator's terms before an independent review. The first agreement sets the rules for decades. Free initial consultation."
        ctaText="Free Rent Estimate"
        ctaHref="/free-rent-estimate"
      />
    </>
  );
}
