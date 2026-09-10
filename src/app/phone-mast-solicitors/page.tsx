import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Phone Mast Solicitors or Surveyors? Who You Need",
  description:
    "Looking for a phone mast solicitor? What a solicitor does, what a telecoms surveyor does, when a UK landlord needs each, who pays the fees, and how we work alongside your solicitor.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/phone-mast-solicitors" },
  openGraph: {
    title: "Phone Mast Solicitors or Surveyors? Who UK Landlords Need, and When",
    description:
      "The roles of a solicitor and a telecoms surveyor in a phone mast lease, when a landlord needs each, and who pays the fees.",
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
const li: React.CSSProperties = { display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" };
const tick: React.CSSProperties = { flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.15rem" };

const faqs = [
  {
    question: "Can a surveyor negotiate my phone mast lease without a solicitor?",
    answer:
      "A surveyor can negotiate the commercial terms and agree heads of terms without a solicitor. The final lease or Code agreement should still be reviewed by a solicitor before you sign, because it is a legal document that will bind the land for years.",
  },
  {
    question: "Do I need a solicitor for a phone mast rent review?",
    answer:
      "Not always. Many rent reviews are settled commercially by a surveyor, particularly index-linked reviews. A solicitor becomes important if the review clause is disputed, backdated rent is refused, or the review turns into a renewal or Tribunal case.",
  },
  {
    question: "Will the operator pay my solicitor's fees?",
    answer:
      "Often, at least in part. Reasonable legal and valuation expenses are recoverable under Paragraph 84 of the Electronic Communications Code, and operators usually offer a capped fee undertaking during negotiations. Confirm the cap and what it covers before work starts.",
  },
  {
    question: "What should I do first when a notice about my phone mast arrives?",
    answer:
      "Note the date it was served, acknowledge it in writing, and take advice quickly. Statutory notices carry fixed deadlines, and missing one can weaken your position or cost you the right to respond.",
  },
  {
    question: "Are you solicitors?",
    answer:
      "No. The Phone Mast Advice Company is a firm of specialist telecoms surveyors acting only for landowners. We handle valuation and negotiation, and we work alongside your solicitor on the legal side.",
  },
];

function Ticks({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem" }}>
      {items.map((item, i) => (
        <li key={i} style={li}>
          <span style={tick}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Service",
          name: "Phone Mast Lease Advice for Landowners and Their Solicitors",
          description:
            "Specialist telecoms surveying for UK landowners with phone masts: valuation and negotiation of leases, rent and notices, working alongside the landowner's solicitor.",
          provider: "The Phone Mast Advice Company",
          url: "https://www.phonemastadvice.co.uk/phone-mast-solicitors",
          areaServed: "United Kingdom",
        }}
      />
      <Breadcrumbs items={[{ label: "Phone Mast Solicitors" }]} />

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
            Phone Mast Solicitors or Surveyors? Who UK Landlords Need, and When
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Most landlords search for a phone mast solicitor the day a letter or notice arrives. In practice a phone mast matter usually needs two specialists: a telecoms surveyor to value the site and negotiate the terms, and a solicitor to advise on the law and complete the paperwork. We are specialist telecoms surveyors, we act only for landowners, and we work alongside your solicitor.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/free-lease-check" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
              Free Lease Check
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
              This page explains who does what. For the legal background, read our{" "}
              <a href="/phone-mast-lease-2026" style={link}>phone mast lease</a> guide; if an operator wants to renew, see{" "}
              <a href="/phone-mast-services/lease-renewals" style={link}>lease renewals</a>. Reviewed by the <a href="/team" style={link}>Phone Mast Advice team</a>.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>Do I need a solicitor or a surveyor for a phone mast lease?</h2>
          <p style={p}>
            Usually both, at different stages. The surveyor leads the commercial side: what the site is worth under the Electronic Communications Code, what the operator&rsquo;s offer really means, and negotiating rent, term and protections into agreed heads of terms. The solicitor leads the legal side: advising on the agreement and any notices, drafting or reviewing the lease that records the deal, and acting in any Tribunal proceedings.
          </p>
          <p style={p}>Instructing only one of the two is one of the most common ways landlords leave money or protection on the table.</p>

          <h3 style={h3}>What a telecoms surveyor does</h3>
          <Ticks
            items={[
              "Values the site on the correct legal basis, including the Code's no-network assumption",
              "Reviews the operator's heads of terms and explains what they would change",
              "Negotiates rent, term, break and redevelopment rights, access, electricity costs and reinstatement",
              "Provides valuation evidence if the matter goes to the Tribunal",
            ]}
          />
          <h3 style={h3}>What a solicitor does</h3>
          <Ticks
            items={[
              "Advises on the legal status of your agreement and any notice that has been served",
              "Drafts or reviews the lease or Code agreement so it records the negotiated deal",
              "Handles formal responses and deadlines under the Landlord and Tenant Act 1954 or the Code",
              "Represents you in Tribunal or court proceedings",
            ]}
          />

          <h2 style={h2}>When should I instruct a solicitor straight away?</h2>
          <p style={p}>Take legal advice promptly, alongside your surveyor, if any of these apply:</p>
          <Ticks
            items={[
              "A formal notice has been served, such as a Section 26 request under the Landlord and Tenant Act 1954 or a Paragraph 20, 31 or 33 notice under the Code. Each carries strict statutory deadlines: under the 1954 Act, for example, a landlord has two months to serve a counter-notice opposing a Section 26 request.",
              "The operator has applied, or says it will apply, to the Tribunal. Since 7 April 2026, telecoms Code disputes are heard by the First-tier Tribunal (Property Chamber).",
              "You want to end the agreement, for example to redevelop, and a termination notice has to be drafted precisely.",
              "There is a question about who owns the land, the terms of an older lease, or whether the agreement has been assigned to another operator.",
            ]}
          />
          <p style={p}>
            If you have only received an operator&rsquo;s letter with draft heads of terms, the first step is usually commercial: acknowledge the letter, then have a surveyor review the proposal before anything is signed.
          </p>

          <h2 style={h2}>Who pays the solicitor and surveyor fees?</h2>
          <p style={p}>
            In most negotiated cases the operator contributes. Under Paragraph 84 of the Electronic Communications Code, compensation can include reasonable legal and valuation expenses, and operators normally give a written fee undertaking at the start of negotiations, usually capped. Check what the undertaking covers, and whether it continues if the matter goes to the Tribunal, before either professional starts work. We confirm the position for our own fees before we begin.
          </p>

          <h2 style={h2}>How we work with your solicitor</h2>
          <h3 style={h3}>1. Review the letter or notice</h3>
          <p style={p}>We read the operator&rsquo;s letter, heads of terms or notice, together with your existing agreement, and tell you what is being proposed and which deadlines apply.</p>
          <h3 style={h3}>2. Negotiate the commercial terms</h3>
          <p style={p}>We value the site and negotiate rent and protections with the operator&rsquo;s agents until heads of terms are agreed.</p>
          <h3 style={h3}>3. Hand over to your solicitor</h3>
          <p style={p}>We send your solicitor the agreed heads of terms and the points that must appear in the lease, so the drafting starts from a deal that protects you.</p>
          <h3 style={h3}>4. Support through completion</h3>
          <p style={p}>We stay involved while the lease is drafted and signed, and provide valuation evidence if the matter reaches the Tribunal.</p>

          <h2 style={h2}>Choosing a solicitor for a phone mast matter</h2>
          <Ticks
            items={[
              "Experience of Electronic Communications Code agreements and Landlord and Tenant Act 1954 telecoms renewals, not only general property work",
              "Tribunal experience, in case negotiations fail",
              "Acts for landowners, with no conflict from acting for operators",
              "Clear about how their costs relate to the operator's fee undertaking",
            ]}
          />
          <p style={p}>
            If you already have a solicitor, we work with them. If you do not, we can introduce firms experienced in telecoms Code work. You can also start with a free <a href="/free-lease-check" style={link}>lease check</a>.
          </p>

          <h2 style={h2}>Phone mast solicitors: frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", marginTop: "2rem" }}>
            This page was last updated on 10 September 2026. It is general guidance and does not constitute legal advice. We are surveyors, not solicitors: for legal advice on your circumstances, consult a solicitor.
          </p>
        </div>
      </section>

      <CTASection
        headline="Received a Phone Mast Letter or Notice?"
        subheadline="Send it to us before you reply. We review it free, explain the deadlines, and tell you whether you need a solicitor now."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check"
      />
    </>
  );
}
