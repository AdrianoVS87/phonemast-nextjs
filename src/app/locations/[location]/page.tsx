import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

// ── Location data ─────────────────────────────────────────────────────────────

interface LocationData {
  slug: string;
  city: string;
  officeName: string;
  address: string;
  postcode: string;
  addressFull: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string[];
  services: string[];
  testimonial?: { quote: string; author: string; location: string };
  localContext: string;
}

const locations: Record<string, LocationData> = {
  london: {
    slug: "london",
    city: "London",
    officeName: "London Office",
    address: "167-169 Great Portland Road, 5th Floor",
    postcode: "W1W 5PF",
    addressFull: "167-169 Great Portland Road, 5th Floor, London, W1W 5PF",
    metaTitle: "Phone Mast Lease Advice London | Expert Surveyors W1W 5PF",
    metaDescription:
      "Phone mast lease advice from our London office. Independent UK landlord specialists at 167-169 Great Portland Road, W1W 5PF. Free consultation — 01691 791543.",
    heroHeadline: "Phone Mast Lease Advice — London Office",
    heroSubheadline:
      "Independent specialist surveyors acting for London and South East landlords. Office in the heart of London's West End.",
    intro: [
      "The Phone Mast Advice Company maintains its London office at 167-169 Great Portland Road, 5th Floor, W1W 5PF — in the heart of London's West End. Our London team advises landlords across Greater London, the Home Counties, and the South East on all aspects of phone mast leases.",
      "London presents a unique landscape for phone mast advice. Urban rooftop installations, street furniture sites, and high-density commercial properties each carry distinct considerations for rent, access rights, and lease structure. Our London specialists bring deep expertise in navigating these issues.",
      "We act exclusively for landlords — never for mobile phone operators — ensuring independent, objective advice that protects your interests.",
    ],
    services: [
      "Phone mast lease renewals with Vodafone, O2, EE, Three, CTIL/Cornerstone, On Tower, Cellnex, Airwave, and WIG",
      "Rent reviews for London and South East mast sites",
      "New lettings advice — rooftop, ground-level, and street furniture installations",
      "Mast sales and lease premium negotiations",
      "Removal and redevelopment advice",
      "Electronic Communications Code guidance",
    ],
    testimonial: {
      quote: "The team handled our London rooftop mast renewal professionally and achieved significantly better terms than the operator's initial offer. Clear advice throughout.",
      author: "Commercial Property Manager",
      location: "Central London",
    },
    localContext:
      "London landlords face particular complexity with phone mast leases. Urban sites often have multiple operators sharing infrastructure, rooftop leases carry access and structural considerations, and the density of competing sites affects valuation. Our London team understands these nuances and brings the comparable evidence to support strong negotiations.",
  },

  bristol: {
    slug: "bristol",
    city: "Bristol",
    officeName: "Bristol Office",
    address: "5 High Street, Westbury on Trym, 2nd Floor",
    postcode: "BS9 3BY",
    addressFull: "The Bristol Office, 2nd Floor, 5 High Street, Westbury on Trym, Bristol, BS9 3BY",
    metaTitle: "Phone Mast Lease Advice Bristol | Expert Surveyors BS9 3BY",
    metaDescription:
      "Phone mast lease advice from our Bristol office. Independent landlord specialists at 5 High Street, Westbury on Trym, BS9 3BY. Free consultation — 01691 791543.",
    heroHeadline: "Phone Mast Lease Advice — Bristol Office",
    heroSubheadline:
      "Independent specialist surveyors advising Bristol and South West landlords from our Westbury on Trym office.",
    intro: [
      "Our Bristol office is located at 5 High Street, Westbury on Trym, BS9 3BY — a convenient location for landlords across Bristol, Somerset, Gloucestershire, Wiltshire, and the wider South West of England.",
      "The South West presents a diverse range of phone mast sites — from rural agricultural land with standalone towers to urban rooftop installations and coastal locations. Our Bristol team understands the full range of property types and operator approaches in the region.",
      "We act exclusively for UK landlords, never for mobile phone operators. Whatever your situation — a new operator approach, a pending lease renewal, or a rent reduction notice — our Bristol team provides free initial advice.",
    ],
    services: [
      "Lease renewals with all major operators across Bristol, Somerset, and the South West",
      "Rent reviews for South West mast sites",
      "Agricultural and rural phone mast lease advice",
      "New lettings — from rural greenfield towers to urban rooftop installations",
      "Mast sales and lease premium negotiations",
      "Removal and redevelopment support",
    ],
    testimonial: {
      quote: "Excellent service from the Bristol team. They negotiated a much better rent review outcome than we had anticipated, and explained everything clearly throughout the process.",
      author: "Farm Owner",
      location: "Somerset",
    },
    localContext:
      "Bristol and the South West offer significant variety in phone mast types and settings. Agricultural land masts, coastal sites, and urban Bristol rooftop installations each require different approaches. Our Bristol team has extensive experience with South West landlords and operators and maintains a strong database of regional comparable deals.",
  },

  oswestry: {
    slug: "oswestry",
    city: "Oswestry",
    officeName: "Oswestry Office",
    address: "The Fort Offices, Artillery Business Park",
    postcode: "SY11 4AD",
    addressFull: "The Fort Offices, Artillery Business Park, Oswestry, SY11 4AD",
    metaTitle: "Phone Mast Lease Advice Oswestry | Expert Surveyors SY11 4AD",
    metaDescription:
      "Phone mast lease advice from our Oswestry office. Independent landlord specialists at Artillery Business Park, SY11 4AD. Free consultation — 01691 791543.",
    heroHeadline: "Phone Mast Lease Advice — Oswestry Office",
    heroSubheadline:
      "Independent specialist surveyors advising landlords across Wales and the Welsh Borders from our Oswestry base.",
    intro: [
      "Our Oswestry office is based at The Fort Offices, Artillery Business Park, SY11 4AD — in the historic market town of Oswestry on the Welsh Borders. This office serves landlords across Shropshire, North Wales, Mid Wales, Powys, Cheshire, and the surrounding regions.",
      "Rural and upland areas of Wales and the Welsh Borders present particular challenges and opportunities for phone mast landlords. Operators are actively seeking to extend coverage in rural areas for 5G and rural broadband targets, creating both new letting opportunities and renewal pressures.",
      "Our Oswestry team has deep experience with Welsh and Borders agricultural estates, rural landowners, and the specific considerations of rural mast negotiations. We act only for landlords.",
    ],
    services: [
      "Lease renewals across Wales, Shropshire, Cheshire, and the Welsh Borders",
      "Rural and upland phone mast lease advice",
      "Agricultural estate mast portfolio management",
      "New lettings — including rural and remote site negotiations",
      "Rent reviews for rural and semi-rural mast sites",
      "Electronic Communications Code guidance for Welsh and Borders landlords",
    ],
    testimonial: {
      quote: "The Oswestry team understood our rural estate very well. They dealt with the operator firmly and achieved a much better outcome on our lease renewal than we had expected.",
      author: "Estate Manager",
      location: "North Wales",
    },
    localContext:
      "Wales and the Welsh Borders have a distinctive landscape for phone mast negotiations. Rural coverage requirements, agricultural land valuations under the ECC, and the mix of Welsh and English land law create a complex environment. Our Oswestry office brings specialist knowledge of regional operators, local comparable evidence, and the specific needs of rural and estate landlords.",
  },
};

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ location: slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const data = locations[location];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://phonemastadvice.co.uk/locations/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://phonemastadvice.co.uk/locations/${data.slug}`,
      type: "website",
    },
  };
}

// ── Page component ────────────────────────────────────────────────────────────

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const data = locations[location];
  if (!data) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `The Phone Mast Advice Company Ltd — ${data.city}`,
    url: `https://phonemastadvice.co.uk/locations/${data.slug}`,
    telephone: "01691 791543",
    email: "info@phonemastadvice.co.uk",
    description: `Independent specialist phone mast lease advisors serving ${data.city} and surrounding areas.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address,
      addressLocality: data.city,
      postalCode: data.postcode,
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: data.city,
    },
    priceRange: "££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: data.city },
        ]}
      />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "#1B4F72",
          padding: "4rem 1.5rem",
        }}
      >
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
            {data.heroHeadline}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            {data.heroSubheadline}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="/free-rent-estimate"
              className="btn-primary"
              style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
            >
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

      {/* Office details */}
      <section className="section-padding">
        <div
          className="container-max"
          style={{
            maxWidth: "1100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Address card */}
          <div
            className="card"
            style={{ padding: "2rem" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.375rem",
                color: "#1B4F72",
                marginBottom: "1rem",
              }}
            >
              📍 {data.officeName}
            </h2>
            <address
              style={{
                fontStyle: "normal",
                fontSize: "1.0625rem",
                color: "#374151",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              {data.addressFull
                .split(", ")
                .map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
            </address>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="tel:01691791543"
                style={{
                  color: "#1B4F72",
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  minHeight: "44px",
                }}
              >
                📞 01691 791543
              </a>
              <a
                href="mailto:info@phonemastadvice.co.uk"
                style={{
                  color: "#1B4F72",
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  minHeight: "44px",
                }}
              >
                ✉️ info@phonemastadvice.co.uk
              </a>
              <a
                href="https://wa.me/447843352654"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1B4F72",
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  minHeight: "44px",
                }}
              >
                💬 WhatsApp: 07843 352654
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div
            style={{
              backgroundColor: "#e5e7eb",
              borderRadius: "1rem",
              height: "280px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.75rem",
              color: "#6b7280",
              fontSize: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem" }}>🗺️</span>
            <span>Map — {data.postcode}</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.addressFull)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1B4F72",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "0.9375rem",
              }}
            >
              View on Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#f9f8f5", padding: "3rem 1.5rem" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          {data.intro.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.125rem",
                color: "#374151",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {paragraph}
            </p>
          ))}
          <p
            style={{
              fontSize: "1.125rem",
              color: "#374151",
              lineHeight: 1.7,
            }}
          >
            {data.localContext}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "#1a1a2e",
              marginBottom: "1.5rem",
            }}
          >
            Services Available from Our {data.city} Office
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.services.map((service, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  marginBottom: "1rem",
                  fontSize: "1.0625rem",
                  color: "#374151",
                  lineHeight: 1.6,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#a4ca62",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1a1a2e",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    marginTop: "0.125rem",
                  }}
                >
                  ✓
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      {data.testimonial && (
        <section style={{ backgroundColor: "#1B4F72", padding: "3rem 1.5rem" }}>
          <div className="container-max" style={{ maxWidth: "700px", textAlign: "center" }}>
            <blockquote
              style={{
                margin: 0,
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.92)",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: "1.25rem",
              }}
            >
              &ldquo;{data.testimonial.quote}&rdquo;
            </blockquote>
            <cite
              style={{
                color: "#a4ca62",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              — {data.testimonial.author}, {data.testimonial.location}
            </cite>
          </div>
        </section>
      )}

      <CTASection
        headline={`Speak to Our ${data.city} Phone Mast Specialists`}
        subheadline={`Our ${data.city} team offers a free, no-obligation consultation. We act only for landlords.`}
        ctaText="Get a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
