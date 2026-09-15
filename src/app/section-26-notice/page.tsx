import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

const URL = "https://www.phonemastadvice.co.uk/section-26-notice/";

export const metadata: Metadata = {
  title: "Section 26 Notice on a Phone Mast Lease: Landowner Guide",
  description:
    "Received a Section 26 notice from a phone mast operator? The two-month deadline, your grounds to oppose, interim rent, the 7 April 2026 rent change and the tribunal from 30 July 2026, explained for landowners.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Section 26 Notice on a Phone Mast Lease: What Landowners Must Do",
    description:
      "The Section 26 timetable for telecoms leases under the Landlord and Tenant Act 1954, and what changed for phone mast renewals in 2026.",
    type: "article",
    url: URL,
  },
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
  color: "#1a1a2e",
  marginBottom: "1rem",
  marginTop: "2.5rem",
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
const li: React.CSSProperties = { display: "flex", gap: "0.875rem", marginBottom: "0.875rem", fontSize: "1.125rem", color: "#374151", lineHeight: 1.6, alignItems: "flex-start" };
const tick: React.CSSProperties = { flexShrink: 0, width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#a4ca62", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.2rem" };
const box: React.CSSProperties = { backgroundColor: "#f9f8f5", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.5rem 1.75rem", marginBottom: "2rem" };
const stepNum: React.CSSProperties = { flexShrink: 0, width: "2.25rem", height: "2.25rem", borderRadius: "50%", backgroundColor: "#1B4F72", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.0625rem", fontFamily: "var(--font-jakarta), system-ui, sans-serif" };

function Ticks({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem" }}>
      {items.map((item, i) => (
        <li key={i} style={li}>
          <span style={tick} aria-hidden="true">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const steps: { title: string; body: React.ReactNode }[] = [
  {
    title: "The operator serves the Section 26 request",
    body: "It must be in the prescribed form and set out the operator's proposals for the property, the rent and the other terms of the new tenancy. It names a start date for the new tenancy that must be between 6 and 12 months after the request is made, and not before the current lease would otherwise end.",
  },
  {
    title: "You have two months to oppose",
    body: "Under Section 26(6), you can give notice within two months of the request that you will oppose a new tenancy, stating the grounds from Section 30 that you rely on. Diarise the exact date the request was made on the day it arrives.",
  },
  {
    title: "Either side can ask for rent to be set in the meantime",
    body: "Once the request has been made, either party can apply for interim rent under Section 24A. It runs from the earliest start date the operator could have put in its request.",
  },
  {
    title: "Terms are agreed, or an application is made",
    body: "Most renewals settle by negotiation. If not, an application must be made before the start date in the request, unless both sides agree in writing, before that deadline passes, to extend it. No application can be made in the first two months unless you have already served your counter-notice.",
  },
  {
    title: "The new lease is granted",
    body: "Once the new lease is agreed or ordered, it is not itself protected by the 1954 Act where its primary purpose is to confer code rights. When it expires, renewal moves to Part 5 of the Electronic Communications Code, as the Supreme Court explained in Compton Beauchamp.",
  },
];

const faqs = [
  {
    question: "What is a Section 26 notice?",
    answer:
      "It is a tenant's formal request for a new tenancy under Section 26 of the Landlord and Tenant Act 1954. For a phone mast, the tenant is the operator or tower company, and it serves the request on the landowner to renew a lease protected by the 1954 Act.",
  },
  {
    question: "How long do I have to respond to a Section 26 notice?",
    answer:
      "If you want to oppose a new tenancy, you must give notice within two months of the request being made, stating your grounds under Section 30. The new tenancy in the request cannot start less than 6 or more than 12 months after the request.",
  },
  {
    question: "What happens if I ignore a Section 26 notice?",
    answer:
      "You lose the right to oppose the renewal, because Section 30 grounds can only be relied on if they were stated in time. It does not mean the operator gets its proposed terms automatically: if the terms and rent are not agreed, they are decided by the court or tribunal.",
  },
  {
    question: "Can I refuse to renew a phone mast lease?",
    answer:
      "Only on a ground in Section 30 of the 1954 Act, stated in a counter-notice served within two months. The grounds include demolition or reconstruction of the premises and the landlord's own occupation, among others, and each has to be proved. The ground must be real and supported by evidence.",
  },
  {
    question: "Did the rent rules change for phone mast renewals in 2026?",
    answer:
      "Yes. From 7 April 2026, Section 34A of the 1954 Act requires the rent on renewal of a pre-2017 telecoms lease, whose main purpose is to confer code rights, to be assessed as if the rights had nothing to do with a telecoms network. The old rules still apply where the new tenancy date in a Section 26 request fell before 7 April 2026.",
  },
  {
    question: "Who decides a phone mast lease renewal now?",
    answer:
      "For proceedings started on or after 30 July 2026, renewals of these telecoms leases under the 1954 Act are heard by the First-tier Tribunal and the Upper Tribunal instead of the courts. Proceedings started before that date continue in the court.",
  },
];

const sources: { label: string; href: string }[] = [
  { label: "Landlord and Tenant Act 1954, Section 26", href: "https://www.legislation.gov.uk/ukpga/Eliz2/2-3/56/section/26" },
  { label: "Landlord and Tenant Act 1954, Section 30 (grounds of opposition)", href: "https://www.legislation.gov.uk/ukpga/Eliz2/2-3/56/section/30" },
  { label: "Landlord and Tenant Act 1954, Sections 29A and 29B (time limits)", href: "https://www.legislation.gov.uk/ukpga/Eliz2/2-3/56/section/29A" },
  { label: "Landlord and Tenant Act 1954, Section 24A (interim rent)", href: "https://www.legislation.gov.uk/ukpga/Eliz2/2-3/56/section/24A" },
  { label: "Landlord and Tenant Act 1954, Section 34A (telecoms rent on renewal)", href: "https://www.legislation.gov.uk/ukpga/Eliz2/2-3/56/section/34A" },
  { label: "SI 2025/1326: commencement of PSTI Act 2022 sections 61 to 64 on 7 April 2026", href: "https://www.legislation.gov.uk/uksi/2025/1326/made" },
  { label: "SI 2026/569: tribunal jurisdiction for telecoms renewals from 30 July 2026", href: "https://www.legislation.gov.uk/uksi/2026/569/made" },
  { label: "Compton Beauchamp Estates Ltd v CTIL [2022] UKSC 18", href: "https://caselaw.nationalarchives.gov.uk/uksc/2022/18" },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Article",
          headline: "Section 26 Notice on a Phone Mast Lease: What Landowners Must Do",
          url: URL,
          datePublished: "2026-09-15",
          dateModified: "2026-09-15",
          description:
            "The Section 26 timetable for phone mast leases under the Landlord and Tenant Act 1954, grounds of opposition, interim rent, and the 2026 changes to rent and tribunal jurisdiction.",
        }}
      />
      <Breadcrumbs items={[{ label: "Section 26 Notice" }]} />

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
            Section 26 Notice on a Phone Mast Lease: What Landowners Must Do
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            A Section 26 notice is the operator formally asking for a new lease of your phone mast site under the Landlord and Tenant Act 1954. It starts a strict timetable, and since 2026 the rent and the forum for these renewals have both changed. This guide explains what to do, step by step.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/free-lease-check/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
              Send Us Your Notice
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

      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <div style={box}>
            <p style={{ ...p, fontWeight: 700, color: "#1a1a2e", marginBottom: "0.5rem" }}>In short</p>
            <Ticks
              items={[
                "The operator is asking for a new tenancy. The start date it proposes must be 6 to 12 months after the request.",
                <>You have <strong>two months</strong> from the request to serve a counter-notice if you want to oppose, stating grounds under Section 30.</>,
                "Missing that deadline loses your right to oppose. It does not mean you must accept the operator's rent or terms.",
                "Since 7 April 2026, renewal rent for pre-2017 telecoms leases is assessed on a no-network basis under Section 34A.",
                "Since 30 July 2026, new renewal proceedings for these leases go to the First-tier Tribunal and the Upper Tribunal.",
              ]}
            />
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
              Written and reviewed by the <a href="/team/" style={link}>Phone Mast Advice team</a>, specialist telecoms surveyors acting only for landowners. Last updated 15 September 2026.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>What is a Section 26 notice?</h2>
          <p style={p}>
            Strictly, it is a <strong>tenant&rsquo;s request for a new tenancy</strong> under Section 26 of the Landlord and Tenant Act 1954. A tenant can use it where its lease was granted for a term of years certain of more than one year and is protected by Part 2 of the Act. It must be served in the prescribed form and set out the tenant&rsquo;s proposals for the property, the rent and the other terms. It cannot be served if the landlord has already given a Section 25 notice or a notice to quit.
          </p>
          <p style={p}>
            On a phone mast site, the tenant is the operator or the tower company that holds the lease, so the request lands with you as the landowner. It is often preceded or accompanied by a renewal letter and draft heads of terms. Our article on <a href="/blog/phone-mast-renewal-letter/" style={link}>phone mast renewal letters</a> explains that first stage.
          </p>

          <h2 style={h2}>Why do phone mast operators serve Section 26 notices?</h2>
          <p style={p}>
            Because many older mast leases cannot be renewed under the Electronic Communications Code. Under the transitional rules in Schedule 2 to the Digital Economy Act 2017, Part 5 of the Code does not apply to a lease granted before 28 December 2017 that is protected by the 1954 Act and was not contracted out. In <em>Compton Beauchamp Estates Ltd v CTIL</em> [2022] UKSC 18, a case The Phone Mast Advice Company instigated and advised on, the Supreme Court confirmed that the operator in that case had to use its rights under Part 2 of the 1954 Act to renew its lease. The full background is in our <a href="/electronic-communications-code/" style={link}>Electronic Communications Code guide</a>.
          </p>

          <h2 style={h2}>The Section 26 timetable, step by step</h2>
          <ol style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
            {steps.map((s, i) => (
              <li key={s.title} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", alignItems: "flex-start" }}>
                <span style={stepNum} aria-hidden="true">{i + 1}</span>
                <div>
                  <h3 style={{ ...h3, marginTop: "0.2rem", marginBottom: "0.4rem" }}>{s.title}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 style={h2}>Can I oppose the renewal? The Section 30 grounds</h2>
          <p style={p}>
            You can only oppose on the grounds listed in Section 30(1) of the 1954 Act, and only if you state them in a counter-notice served within the two months. In summary, they are:
          </p>
          <Ticks
            items={[
              "(a) the tenant's failure to keep the property in repair",
              "(b) persistent delay in paying rent",
              "(c) other substantial breaches of the tenant's obligations, or other reasons connected with its use or management of the property",
              "(d) the landlord offering suitable alternative accommodation",
              "(e) where the tenancy is a sub-letting of part, that the property would be more valuable let as a whole",
              "(f) the landlord intends to demolish or reconstruct the premises",
              "(g) the landlord intends to occupy the premises for its own business or as a residence",
            ]}
          />
          <p style={p}>
            Each ground has its own conditions, and an intention to redevelop or occupy must be genuine and supported by evidence. If you have plans for the land, take advice before the two months run out, because a ground left out of the counter-notice cannot be added later.
          </p>

          <h2 style={h2}>What if I do not respond in time?</h2>
          <p style={p}>
            A common misunderstanding is that silence means the operator gets the lease on its own terms. It does not. Missing the two-month window means you lose the right to oppose the renewal. The terms and rent of the new lease are still agreed between you or, failing agreement, decided by the court or tribunal. What you lose is leverage, and in some cases the chance to protect future plans for the land.
          </p>

          <h2 style={h2}>What changed for phone mast renewals in 2026?</h2>
          <h3 style={h3}>7 April 2026: rent assessed on a no-network basis</h3>
          <p style={p}>
            Sections 61 to 64 of the Product Security and Telecommunications Infrastructure Act 2022 came into force on 7 April 2026 and inserted <strong>Section 34A</strong> into the 1954 Act. It applies where the current lease is a pre-2017 &ldquo;subsisting agreement&rdquo; whose primary purpose is to confer code rights. The rent on renewal is then assessed on the assumption that the rights do not relate to the provision or use of an electronic communications network, mirroring the valuation basis of the Code. A new Section 34B allows the tenant to be ordered to pay compensation.
          </p>
          <p style={p}>
            There are transitional rules. The old rules still apply where the new tenancy date in a Section 26 request, or the termination date in a Section 25 notice, fell before 7 April 2026. Where interim rent was applied for and runs from a date before 7 April 2026, it is calculated in two parts, before and after that date. Our <a href="/phone-mast-rent-2026/" style={link}>phone mast rent guide</a> explains what the no-network basis means in pounds.
          </p>
          <h3 style={h3}>30 July 2026: renewals move to the tribunals</h3>
          <p style={p}>
            For proceedings started on or after 30 July 2026, references to &ldquo;the court&rdquo; in Part 2 of the 1954 Act are read as references to the <strong>First-tier Tribunal and the Upper Tribunal</strong> for these telecoms leases. Proceedings started before 30 July 2026 continue in the court as before.
          </p>

          <h2 style={h2}>What to do when a Section 26 notice arrives</h2>
          <Ticks
            items={[
              "Write down the date the request was made and work out the two-month and six-month dates straight away.",
              "Check whether your lease is protected by the 1954 Act or was contracted out, and when it was granted.",
              "Do not sign heads of terms or agree a rent until the site has been valued on the correct basis.",
              "Decide whether you have any genuine plans for the land that could support a Section 30 ground.",
              "Ask the operator to confirm in writing that it will pay your reasonable professional fees.",
              <>Instruct a specialist surveyor to value and negotiate, and a <a href="/phone-mast-solicitors/" style={link}>solicitor</a> for the counter-notice and any proceedings.</>,
            ]}
          />

          <h2 style={h2}>How we help</h2>
          <p style={p}>
            We are specialist telecoms surveyors acting only for landowners. We check which regime governs your lease, work out the deadlines, value the site under Section 34A where it applies, and negotiate the rent and terms of the new lease. We work alongside your solicitor on the counter-notice and on any tribunal proceedings. Send us the notice for a free initial review, or read more about our <a href="/phone-mast-services/lease-renewals/" style={link}>lease renewal service</a>.
          </p>

          <h2 style={h2}>Section 26 notices: frequently asked questions</h2>
          <FAQAccordion items={faqs} showJsonLd={true} />

          <h2 style={h2}>Sources</h2>
          <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1.5rem" }}>
            {sources.map((s) => (
              <li key={s.href} style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                <a href={s.href} style={{ color: "#1B4F72", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.6, borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", marginTop: "2rem" }}>
            This page was last updated on 15 September 2026. It is general guidance for landowners in England and Wales and does not constitute legal advice. We are surveyors, not solicitors: for legal advice on your circumstances, consult a solicitor.
          </p>
        </div>
      </section>

      <CTASection
        headline="Received a Section 26 Notice for Your Phone Mast?"
        subheadline="The two-month clock starts on the day the request is made. Send it to us and we will tell you your deadlines, your options and what the site should earn. Free initial review."
        ctaText="Send Us Your Notice"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
