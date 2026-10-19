/* eslint-disable @next/next/no-html-link-for-pages -- plain anchors, as on every other page of this site */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Matt Restall, Founder | Phone Mast Advice" },
  description:
    "Matt Restall founded The Phone Mast Advice Company and has advised UK landlords on phone mast leases, rents and renewals for over 30 years. He instigated and advised on Compton Beauchamp Estates v CTIL [2022] UKSC 18.",
  alternates: { canonical: "https://www.phonemastadvice.co.uk/team/matt-restall/" },
  openGraph: {
    title: "Matt Restall, Founder of The Phone Mast Advice Company",
    description:
      "Specialist telecoms surveyor acting only for UK landlords. Author of the phone mast lease and rent guides on this site.",
    type: "profile",
  },
};

const LINKEDIN = "https://www.linkedin.com/in/matthew-restall-7a64669b/";

export default function MattRestallPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.phonemastadvice.co.uk/team/matt-restall/#person",
    name: "Matt Restall",
    givenName: "Matt",
    familyName: "Restall",
    jobTitle: "Founder and Director",
    description:
      "Specialist telecoms surveyor advising UK landlords on phone mast leases, rent reviews, new lettings and lease sales. Instigated and advised on Compton Beauchamp Estates v CTIL [2022] UKSC 18.",
    url: "https://www.phonemastadvice.co.uk/team/matt-restall/",
    image: "https://www.phonemastadvice.co.uk/images/team/Matt-Restall.jpg",
    sameAs: [LINKEDIN],
    worksFor: { "@type": "Organization", name: "The Phone Mast Advice Company Ltd", url: "https://www.phonemastadvice.co.uk" },
    knowsAbout: [
      "Electronic Communications Code",
      "Phone mast leases",
      "Phone mast rent reviews",
      "Landlord and Tenant Act 1954 telecoms renewals",
      "Phone mast lease sales",
    ],
  };

  const p: React.CSSProperties = { fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" };
  const h2: React.CSSProperties = {
    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
    fontWeight: 700,
    fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
    color: "#1a1a2e",
    marginBottom: "1.25rem",
  };
  const link: React.CSSProperties = { color: "#1B4F72", fontWeight: 700, textDecoration: "underline" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <Breadcrumbs items={[{ label: "Our Team", href: "/team/" }, { label: "Matt Restall" }]} />

      <section style={{ backgroundColor: "#1B4F72", padding: "4rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "860px", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
          <Image
            src="/images/team/Matt-Restall.jpg"
            alt="Matt Restall, founder of The Phone Mast Advice Company"
            width={180}
            height={180}
            style={{ borderRadius: "50%", objectFit: "cover", border: "4px solid rgba(255,255,255,0.5)", flexShrink: 0 }}
          />
          <div style={{ flex: "1 1 320px" }}>
            <h1
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              Matt Restall
            </h1>
            <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.65, margin: "0 0 1rem" }}>
              Founder and Director of The Phone Mast Advice Company. Specialist telecoms surveyor acting only for UK landlords.
            </p>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontWeight: 600, textDecoration: "underline" }}>
              LinkedIn profile
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "860px" }}>
          <h2 style={h2}>Who Matt is</h2>
          <p style={p}>
            Matt Restall founded The Phone Mast Advice Company Ltd and has over 30 years of specialist experience advising UK landlords on
            telecoms property matters: leases, rent reviews, new lettings and lease sales. He has represented landlords across the UK, from
            individual rural landowners to large corporate property portfolios, and has built one of the most comprehensive databases of
            comparable UK phone mast deals in the industry.
          </p>
          <p style={p}>
            Matt instigated and advised on <em>Cornerstone Telecommunications Infrastructure Ltd v Compton Beauchamp Estates Ltd</em>{" "}
            [2022] UKSC 18, the Supreme Court decision that confirmed operators with leases protected by the Landlord and Tenant Act 1954
            must renew under that Act rather than impose new terms under the Electronic Communications Code. Read more in our{" "}
            <Link href="/blog/compton-beauchamp-supreme-court-phone-mast-case/" style={link}>Compton Beauchamp case note</Link>.
          </p>

          <h2 style={h2}>How Matt works</h2>
          <p style={p}>
            The firm acts exclusively for site providers and never for operators. Every instruction starts with a free review of the
            agreement and the operator&rsquo;s correspondence, so that a landlord knows which legal regime applies, what the statutory
            valuation produces for that site, and what can still be negotiated, before any fee is agreed.
          </p>
          <p style={p}>
            Matt writes and reviews the guides on this site. They are kept to what the legislation, the Tribunal decisions and the
            firm&rsquo;s own deal evidence support, and each one shows the date it was last reviewed.
          </p>

          <h2 style={h2}>Guides written and reviewed by Matt</h2>
          <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
            {[
              { href: "/phone-mast-lease/", label: "Phone mast lease: what UK landlords need to know in 2026" },
              { href: "/phone-mast-rent/", label: "Phone mast rent: how much operators pay UK landlords in 2026" },
              { href: "/electronic-communications-code/", label: "The Electronic Communications Code explained for landlords" },
              { href: "/section-26-notice/", label: "Section 26 notices on phone mast leases" },
              { href: "/phone-mast-solicitors/", label: "Phone mast solicitors or surveyors: who you need, and when" },
              { href: "/blog/", label: "All articles by Matt" },
            ].map((item) => (
              <li key={item.href} style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <Link href={item.href} style={link}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <h2 style={h2}>Contact Matt&rsquo;s team</h2>
          <p style={p}>
            Call <a href="tel:01691791543" style={link}>01691 791543</a>, email{" "}
            <a href="mailto:info@phonemastadvice.co.uk" style={link}>info@phonemastadvice.co.uk</a> or request a{" "}
            <Link href="/free-lease-check/" style={link}>free lease check</Link>. Offices in London, Bristol and Oswestry.
          </p>
        </div>
      </section>

      <CTASection
        headline="Speak to a Specialist Telecoms Surveyor"
        subheadline="A free initial review of your lease or the operator's offer, with no obligation. We act only for landlords."
        ctaText="Free Lease Check"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
