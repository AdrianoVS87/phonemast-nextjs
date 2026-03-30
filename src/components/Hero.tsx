import Link from "next/link";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  headline = "Expert Phone Mast Lease Advice",
  subheadline = "Independent specialist telecom surveyors acting only for UK landlords. We help you secure fair rents, strong contracts, and long-term protection — not the operator's interests.",
  ctaText = "Get Your Free Rent Estimate",
  ctaHref = "/free-rent-estimate",
  secondaryCtaText = "Free Lease Check",
  secondaryCtaHref = "/free-lease-check",
}: HeroProps) {
  return (
    <section
      style={{
        backgroundColor: "#1B4F72",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(164,202,98,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-max"
        style={{
          position: "relative",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Trust badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "rgba(164,202,98,0.15)",
            border: "1px solid rgba(164,202,98,0.3)",
            borderRadius: "50px",
            padding: "0.375rem 1rem",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
            color: "#a4ca62",
            fontWeight: 600,
          }}
        >
          ✓ Only Acting For Landlords — Never Operators
        </div>

        {/* Headline */}
        <h1
          style={{
            color: "#ffffff",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1.15,
            maxWidth: "720px",
            marginBottom: "1.5rem",
          }}
        >
          {headline}
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "1.1875rem",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "2.5rem",
          }}
        >
          {subheadline}
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <Link href={ctaHref} className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
            {ctaText}
          </Link>
          <Link href={secondaryCtaHref} className="btn-secondary" style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}>
            {secondaryCtaText}
          </Link>
        </div>

        {/* Phone call strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <a
            href="tel:01691791543"
            style={{
              color: "#ffffff",
              fontSize: "1.25rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            📞 01691 791543
          </a>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
            Mon–Fri 9am–5:30pm
          </span>
          <a
            href="https://wa.me/447843352654"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.9375rem",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
