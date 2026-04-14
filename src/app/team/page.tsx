import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Team | Phone Mast Advice Company | RICS Registered Surveyors",
  description:
    "Meet the specialist team at The Phone Mast Advice Company. RICS registered surveyors and telecom property experts acting exclusively for UK landlords. Founder Matt Restall.",
  alternates: { canonical: "https://phonemastadvice.co.uk/team" },
  openGraph: {
    title: "Our Team — Phone Mast Advice Company",
    description:
      "RICS registered surveyors and telecom property specialists. Founded by Matt Restall — involved in landmark case Compton Beauchamp Estates v CTIL [2022] UKSC 18.",
    type: "website",
  },
};

interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  linkedin?: string;
  photo?: string;
}

const team: TeamMember[] = [
  {
    name: "Matt Restall",
    role: "Founder & Director",
    credentials: "Specialist Telecoms Surveyor",
    photo: "/images/team/Matt-Restall.jpg",
    bio: "Matt Restall is the founder of The Phone Mast Advice Company Ltd and has over 30 years of specialist experience advising UK landlords on telecoms property matters — leases, rent reviews, new lettings, and lease sales. Matt was involved in instigating and advising on Compton Beauchamp Estates v CTIL [2022] UKSC 18 — the Supreme Court case that is the most significant UK telecoms ruling since the Telecommunications Act 1984. The case established that operators with existing Landlord and Tenant Act 1954 protected leases cannot use the Electronic Communications Code to impose significantly reduced rents. Matt has represented landlords across the UK — from individual rural landowners to large corporate property portfolios — and has developed one of the most comprehensive databases of comparable UK phone mast deals in the industry.",
    linkedin: "https://www.linkedin.com/in/matthew-restall-7a64669b/",
  },
  {
    name: "Andrew Chinn",
    role: "Head Surveyor",
    credentials: "Chartered Surveyor — RICS Registered",
    photo: "/images/team/Andrew-Chinn.jpg",
    bio: "Andrew Chinn is a Chartered Surveyor and RICS-registered Head Surveyor with The Phone Mast Advice Company Ltd. His primary focus is providing professional advice to site providers and landlords, helping them to optimise the financial returns from telecommunications equipment on their premises. Andrew brings a diverse background in surveying across the North West of England, having consulted widely and run his own practice for over a decade before joining the firm. His RICS registration reflects his professional standing and adherence to the highest standards in surveying practice.",
    linkedin: "https://www.linkedin.com/in/andrew-chinn-9836a828/",
  },
  {
    name: "Raquel Smook",
    role: "Senior Business Manager",
    credentials: "",
    photo: "/images/team/Raquel-Smook.jpg",
    bio: "Raquel Smook is our Senior Business Manager, responsible for client relationships, office administration, and working closely with the surveying team. Raquel specialises in reviewing lease agreements and tracking outstanding payments, ensuring clients maximise their financial returns from telecommunications equipment on their land or buildings. Her meticulous approach and deep knowledge of lease documentation means nothing is missed in the management of our clients' cases.",
    linkedin: "https://www.linkedin.com/in/raquel-smook-b479b4187/",
  },
  {
    name: "Charleen Van Blerk",
    role: "Business Manager",
    credentials: "",
    photo: "/images/team/Charleen-van-Blerk.jpg",
    bio: "Charleen Van Blerk is our Business Manager, working closely alongside Raquel in managing company operations and administration. Charleen also oversees our content, communications, and digital presence, ensuring The Phone Mast Advice Company's expertise is clearly communicated to the UK landlords we serve.",
    linkedin: "https://www.linkedin.com/in/charleen-van-blerk-38918a170/",
  },
  {
    name: "Mark Dernes",
    role: "Telecoms Consultant",
    credentials: "40+ Years Telecoms Experience",
    photo: "/images/team/Mark-Dernes.png",
    bio: "Mark Dernes is an experienced consultant whose career spans over four decades in telecoms, finance, and real estate. Mark specialises in facilitating lease negotiations — including renewals and mast sales — drawing on unique insight from having worked with both of the United Kingdom's leading mast investment companies. His breadth of negotiating experience across multiple sectors adds significant depth to The Phone Mast Advice Company's advisory offering.",
    linkedin: "https://www.linkedin.com/in/markdernes/",
  },
];

export default function TeamPage() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Phone Mast Advice Company Ltd",
    url: "https://phonemastadvice.co.uk",
    member: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.bio.substring(0, 200),
      ...(member.linkedin ? { sameAs: member.linkedin } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <Breadcrumbs items={[{ label: "Our Team" }]} />

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
            Meet Our Phone Mast Experts
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
            }}
          >
            A dedicated team of specialist surveyors and advisors, acting exclusively for UK landlords since 1999.
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "900px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {team.map((member) => (
              <div
                key={member.name}
                className="card"
                style={{ padding: "2rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                  }}
                >
                  {/* Photo */}
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={120}
                      height={120}
                      style={{
                        flexShrink: 0,
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #e5e7eb",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        flexShrink: 0,
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        backgroundColor: "#1B4F72",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontSize: "2.5rem",
                        fontWeight: 700,
                      }}
                      aria-hidden="true"
                    >
                      {member.name.split(" ").map((n) => n[0]).join("").substring(0, 2)}
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.375rem",
                        color: "#1B4F72",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {member.name}
                    </h2>
                    <p
                      style={{
                        fontWeight: 600,
                        color: "#a4ca62",
                        fontSize: "1rem",
                        marginBottom: member.credentials ? "0.25rem" : "0",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {member.role}
                    </p>
                    {member.credentials && (
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          color: "#6b7280",
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {member.credentials}
                      </p>
                    )}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "#374151",
                    lineHeight: 1.7,
                    marginBottom: member.linkedin ? "1rem" : "0",
                  }}
                >
                  {member.bio}
                </p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#1B4F72",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      minHeight: "44px",
                    }}
                  >
                    🔗 LinkedIn Profile ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our team */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
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
            Why Our Team Is Different
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Every member of The Phone Mast Advice Company team acts <strong>exclusively for landlords</strong>. No member of our team represents mobile phone operators — at The Phone Mast Advice Company or in any other capacity. This independence is not just a policy — it is fundamental to who we are and the advice we give.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Our team combines RICS-registered chartered surveying credentials with decades of real-world telecoms lease negotiation experience. We have RICS credentials, comparable deal databases, and case law expertise that most landlords simply cannot access on their own.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7 }}>
            Company Registration: 13115582. Offices in London (W1W 5PF), Bristol (BS9 3BY), and Oswestry (SY11 4AD).
          </p>
        </div>
      </section>

      <CTASection
        headline="Speak to a Phone Mast Specialist Today"
        subheadline="Our team offers a free initial consultation. We act only for landlords — never for mobile phone operators."
        ctaText="Contact Our Team"
        ctaHref="/contact"
      />
    </>
  );
}
