import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

const URL = "https://www.phonemastadvice.co.uk/electronic-communications-code/";

export const metadata: Metadata = {
  title: "Electronic Communications Code: A Guide for Landowners",
  description:
    "The Electronic Communications Code explained for UK landowners with a phone mast: code rights, imposed agreements, how rent is valued, ending or renewing an agreement, and which tribunal decides.",
  alternates: { canonical: URL },
  openGraph: {
    title: "The Electronic Communications Code Explained for UK Landowners",
    description:
      "What the Code lets operators do on your land, how payment is assessed, and how Code agreements end, renew and are decided by the tribunal.",
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
const th: React.CSSProperties = { textAlign: "left", padding: "0.75rem 1rem", borderBottom: "2px solid #1B4F72", fontSize: "1rem", color: "#1a1a2e", fontFamily: "var(--font-jakarta), system-ui, sans-serif" };
const td: React.CSSProperties = { padding: "0.75rem 1rem", borderBottom: "1px solid #e5e7eb", fontSize: "1.0625rem", color: "#374151", verticalAlign: "top", lineHeight: 1.55 };

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

const faqs = [
  {
    question: "What is the Electronic Communications Code?",
    answer:
      "It is the set of rules in Schedule 3A to the Communications Act 2003 that lets approved telecoms operators install and keep equipment such as phone masts on land. The current version was introduced by the Digital Economy Act 2017 and came into force on 28 December 2017.",
  },
  {
    question: "Can an operator put a phone mast on my land without my agreement?",
    answer:
      "Not without going through the Code. If you do not agree within 28 days of the operator's notice, the operator can apply to the tribunal to impose an agreement. The tribunal can only do so if the prejudice to you can be adequately compensated by money and the public benefit outweighs that prejudice, and it cannot impose rights if you intend to redevelop and could not reasonably do so if the order were made.",
  },
  {
    question: "How is phone mast rent worked out under the Code?",
    answer:
      "Under Paragraph 24, payment is the market value of the rights, but on set assumptions: that the rights have nothing to do with a telecoms network, that the operator's sharing and upgrading rights do not apply, and that the operator could use more than one site. In Vache Farm [2024] UKUT 216 (LC), the Upper Tribunal set £1,750 a year for a standard rural mast site. Compensation for loss and damage and reasonable legal and valuation expenses are separate.",
  },
  {
    question: "Can I end a Code agreement to get the mast removed?",
    answer:
      "You can serve a notice under Paragraph 31, but the end date must be at least 18 months after the notice and after the contract's own expiry, and you need one of four grounds: substantial breach, persistent late payment, redevelopment, or that the Paragraph 21 test is not met. The operator can serve a counter-notice within three months and then apply to the tribunal.",
  },
  {
    question: "Does the Code apply to my phone mast lease from before 2017?",
    answer:
      "It depends on the agreement. A lease granted before 28 December 2017 that is protected by Part 2 of the Landlord and Tenant Act 1954, and not contracted out, is renewed under the 1954 Act rather than Part 5 of the Code. Since 7 April 2026, the rent on those renewals is assessed on a no-network basis under the new Section 34A of the 1954 Act.",
  },
  {
    question: "Which tribunal hears Electronic Communications Code disputes?",
    answer:
      "In England and Wales, the First-tier Tribunal (Property Chamber) has had jurisdiction over all Code proceedings since 6 April 2024, and the Upper Tribunal (Lands Chamber) can also hear them.",
  },
];

const sources: { label: string; href: string }[] = [
  { label: "Communications Act 2003, Schedule 3A (the Electronic Communications Code)", href: "https://www.legislation.gov.uk/ukpga/2003/21/schedule/3A" },
  { label: "Digital Economy Act 2017, Schedule 2 (transitional provisions)", href: "https://www.legislation.gov.uk/ukpga/2017/30/schedule/2" },
  { label: "The Electronic Communications Code (Jurisdiction) (Amendment) Regulations 2023", href: "https://www.legislation.gov.uk/uksi/2023/1220/made" },
  { label: "Landlord and Tenant Act 1954, Section 34A", href: "https://www.legislation.gov.uk/ukpga/Eliz2/2-3/56/section/34A" },
  { label: "Ofcom: Electronic Communications Code of Practice", href: "https://www.ofcom.org.uk/phones-and-broadband/telecoms-infrastructure/electronic-communications-code-of-practice" },
  { label: "Compton Beauchamp Estates Ltd v CTIL [2022] UKSC 18", href: "https://caselaw.nationalarchives.gov.uk/uksc/2022/18" },
  { label: "EE Ltd and Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd [2024] UKUT 216 (LC) (Vache Farm)", href: "https://caselaw.nationalarchives.gov.uk/ukut/lc/2024/216" },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          type: "Article",
          headline: "The Electronic Communications Code Explained for UK Landowners",
          url: URL,
          datePublished: "2026-09-15",
          dateModified: "2026-09-15",
          description:
            "What the Electronic Communications Code lets operators do on private land, how payment is assessed, and how Code agreements end, renew and are decided.",
        }}
      />
      <Breadcrumbs items={[{ label: "Electronic Communications Code" }]} />

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
            The Electronic Communications Code Explained for UK Landowners
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "2rem" }}>
            The Electronic Communications Code is the law that decides what a mobile operator can do on your land, what it has to pay you, and how an agreement for a phone mast ends or renews. This guide explains each part in plain English for landowners, with the paragraph of the Code that applies.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/free-lease-check/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
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

      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <div style={box}>
            <p style={{ ...p, fontWeight: 700, color: "#1a1a2e", marginBottom: "0.5rem" }}>In short</p>
            <Ticks
              items={[
                "The Code is Schedule 3A to the Communications Act 2003. The current version has applied since 28 December 2017.",
                "An operator can ask the tribunal to impose an agreement if you do not agree within 28 days of its notice.",
                "Payment is assessed as if the site had nothing to do with a phone network, which is why Code rents are far lower than many older rents.",
                "A Code agreement does not simply end on its expiry date. Ending it needs a notice of at least 18 months and a statutory ground.",
                "Many leases from before 2017 renew under the Landlord and Tenant Act 1954 instead, and their renewal rent changed on 7 April 2026.",
              ]}
            />
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
              Written and reviewed by the <a href="/team/" style={link}>Phone Mast Advice team</a>, specialist telecoms surveyors acting only for landowners. Last updated 15 September 2026.
            </p>
          </div>

          <h2 style={{ ...h2, marginTop: 0 }}>What is the Electronic Communications Code?</h2>
          <p style={p}>
            The Electronic Communications Code is the part of UK law that gives telecoms operators rights over private land. It sits in Schedule 3A to the Communications Act 2003. It was rewritten by the Digital Economy Act 2017, and the new Code came into force on <strong>28 December 2017</strong>. It replaced the old 1984 Code, which is why agreements are often described as &ldquo;pre-2017&rdquo; or &ldquo;new Code&rdquo;.
          </p>
          <p style={p}>
            The Code only benefits an <strong>operator</strong>: a company to which the Code has been applied by a direction under section 106 of the Communications Act 2003. Ofcom calls these Code Operators. Mobile network operators and the tower companies that own mast sites are typical examples.
          </p>

          <h2 style={h2}>What rights does the Code give an operator?</h2>
          <p style={p}>
            Paragraph 3 lists the &ldquo;code rights&rdquo; an operator can hold over land. They include the right to:
          </p>
          <Ticks
            items={[
              "install electronic communications apparatus on, under or over the land, and keep it there",
              "inspect, maintain, adjust, alter, repair, upgrade or operate the apparatus",
              "carry out works on the land for those purposes, and enter the land to do so",
              "connect to a power supply",
              "interfere with or obstruct a means of access to the land, and lop or cut back trees and vegetation that interfere with the apparatus",
            ]}
          />
          <p style={p}>
            A landowner grants these rights in a Code agreement. Under Paragraph 11, the agreement must be in writing, signed by or on behalf of both parties, and must state how long the rights last and any notice period for ending them.
          </p>

          <h2 style={h2}>Can an operator force an agreement on my land?</h2>
          <p style={p}>
            Yes, through the tribunal. Under <strong>Paragraph 20</strong>, the operator first gives you a notice setting out the rights it wants. If you have not agreed by the end of <strong>28 days</strong> from the day the notice is given, the operator can apply to the tribunal for an order imposing an agreement. Since 7 November 2023, the notice must include information about alternative dispute resolution, and the operator must consider using it, if reasonably practicable, before applying.
          </p>
          <h3 style={h3}>The test the tribunal applies (Paragraph 21)</h3>
          <p style={p}>The tribunal can only impose an agreement if both conditions are met:</p>
          <Ticks
            items={[
              "the prejudice to you is capable of being adequately compensated by money, and",
              "the public benefit likely to result from the order outweighs that prejudice.",
            ]}
          />
          <p style={p}>
            There is one important exception. The tribunal cannot make the order if you intend to redevelop all or part of the land and could not reasonably do so if the order were made. In practice operators usually pass the two-part test, so the real negotiation is normally about the terms and the payment.
          </p>

          <h2 style={h2}>How is payment for a phone mast assessed under the Code?</h2>
          <p style={p}>
            <strong>Paragraph 24</strong> sets the payment, called consideration, at the market value of the rights. The catch is in the assumptions the valuer must make:
          </p>
          <Ticks
            items={[
              "the rights do not relate to the provision or use of an electronic communications network, often called the no-network assumption",
              "the operator's statutory rights to assign, upgrade and share do not apply",
              "there is more than one site the operator could use",
            ]}
          />
          <p style={p}>
            Together these strip out the value of the site to the phone network, so the rent reflects something much closer to the value of the land itself. In the Vache Farm case, <em>EE Ltd and Hutchison 3G UK Ltd v AP Wireless II (UK) Ltd</em> [2024] UKUT 216 (LC), the Upper Tribunal decided that the appropriate annual consideration for a standard rural mast site was <strong>£1,750</strong>. Rooftop and urban sites are assessed on their own facts. Our <a href="/phone-mast-rent-2026/" style={link}>phone mast rent guide</a> explains the valuation in detail.
          </p>
          <h3 style={h3}>Compensation and fees are separate</h3>
          <p style={p}>
            On top of consideration, <strong>Paragraph 25</strong> allows compensation for any loss or damage you have sustained or will sustain. <strong>Paragraph 84</strong> confirms that compensation can include expenses, including reasonable legal and valuation expenses. This is why operators normally offer to pay a landowner&rsquo;s professional fees, usually up to a cap.
          </p>

          <h2 style={h2}>Can the operator share or upgrade the mast, or sell the agreement?</h2>
          <p style={p}>
            Largely, yes. Under <strong>Paragraph 16</strong>, a term that prevents or limits assignment of the agreement to another operator is void. Under <strong>Paragraph 17</strong>, an operator can upgrade its apparatus or share it with another operator, provided the change has no more than a minimal adverse impact on its appearance and imposes no additional burden on you. If a change goes beyond those limits, your consent and a further payment may be needed, which is worth checking with a surveyor.
          </p>

          <h2 style={h2}>How does a Code agreement end or renew?</h2>
          <p style={p}>
            A Code agreement does not end just because its term has expired. The rights continue until the agreement is brought to an end under Part 5 of the Code.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
              <thead>
                <tr>
                  <th style={th}>Step</th>
                  <th style={th}>Who serves it</th>
                  <th style={th}>Key time limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>Paragraph 31 notice to end the agreement</td>
                  <td style={td}>Landowner</td>
                  <td style={td}>End date at least 18 months after the notice, and after the contractual expiry</td>
                </tr>
                <tr>
                  <td style={td}>Counter-notice (Paragraph 32)</td>
                  <td style={td}>Operator</td>
                  <td style={td}>Within 3 months of the landowner&rsquo;s notice, then an application to the tribunal within a further 3 months</td>
                </tr>
                <tr>
                  <td style={td}>Paragraph 33 notice for new terms</td>
                  <td style={td}>Operator or landowner</td>
                  <td style={td}>Proposed date at least 6 months after the notice</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 style={h3}>The four grounds for ending an agreement (Paragraph 31)</h3>
          <Ticks
            items={[
              "substantial breaches of the agreement by the operator",
              "persistent delays by the operator in making payments",
              "you intend to redevelop all or part of the land and could not reasonably do so while the agreement continues",
              "the Paragraph 21 test for imposing an agreement is not met",
            ]}
          />
          <p style={p}>
            When new terms are sought under Paragraph 33, both sides must consider alternative dispute resolution where reasonably practicable. If the tribunal orders new terms under <strong>Paragraph 34</strong>, it must have regard to the consideration payable under the existing agreement, and it can order the operator to pay any shortfall back to the date the old agreement would otherwise have ended. Our guide to <a href="/phone-mast-services/removal-and-redevelopment/" style={link}>mast removal and redevelopment</a> covers termination in more depth.
          </p>

          <h2 style={h2}>Agreements made before 28 December 2017</h2>
          <p style={p}>
            The transitional rules in Schedule 2 to the Digital Economy Act 2017 matter a great deal for older sites. Part 5 of the Code does not apply to a pre-2017 lease in England and Wales if it is a lease protected by Part 2 of the <strong>Landlord and Tenant Act 1954</strong> and it has not been contracted out. Those leases are renewed under the 1954 Act instead, as the Supreme Court confirmed in <em>Compton Beauchamp Estates Ltd v CTIL</em> [2022] UKSC 18, a case The Phone Mast Advice Company instigated and advised on.
          </p>
          <p style={p}>
            That route has changed twice in 2026. Since <strong>7 April 2026</strong>, the rent on renewal of these leases is assessed on a no-network basis under the new Section 34A of the 1954 Act, unless the relevant date in the notice or request fell before 7 April 2026. Since <strong>30 July 2026</strong>, new renewal proceedings for these leases are heard by the First-tier Tribunal and the Upper Tribunal instead of the courts. If an operator has asked for a new tenancy, read our <a href="/section-26-notice/" style={link}>Section 26 notice guide</a> and our <a href="/phone-mast-lease-2026/" style={link}>phone mast lease guide</a>.
          </p>

          <h2 style={h2}>Which tribunal decides Code disputes?</h2>
          <p style={p}>
            In England and Wales, the <strong>First-tier Tribunal (Property Chamber)</strong> has had jurisdiction over all proceedings under the Code since <strong>6 April 2024</strong>, and the <strong>Upper Tribunal (Lands Chamber)</strong> can also hear them. Most leading valuation decisions, including Vache Farm, come from the Upper Tribunal. Ofcom publishes a Code of Practice on how operators and landowners should deal with each other, revised in April 2024 to add best practice on alternative dispute resolution.
          </p>

          <h2 style={h2}>How we help landowners</h2>
          <p style={p}>
            We are specialist telecoms surveyors and we act only for landowners, never for operators. We review your agreement and any notice, tell you which regime applies, value the site on the correct basis, and negotiate the rent, term and protections. Where a matter needs legal advice or goes to the tribunal, we work alongside your <a href="/phone-mast-solicitors/" style={link}>solicitor</a>. The first review of your paperwork is free.
          </p>

          <h2 style={h2}>Electronic Communications Code: frequently asked questions</h2>
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
        headline="Has an Operator Sent You a Code Notice?"
        subheadline="Send us the notice or your agreement and we will tell you where you stand, what the site should earn, and what to do next. Free initial review."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
