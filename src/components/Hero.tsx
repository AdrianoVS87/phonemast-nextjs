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
      className="hero-section"
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
        className="container-max hero-container"
        style={{
          position: "relative",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Trust badge */}
        <div
          className="hero-trust-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "rgba(164,202,98,0.15)",
            border: "1px solid rgba(164,202,98,0.3)",
            borderRadius: "50px",
            padding: "0.375rem 1rem",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
            color: "#a4ca62",
            fontWeight: 600,
          }}
        >
          ✓ Only Acting For Landlords — Never Operators
        </div>

        {/* Headline */}
        <h1
          className="hero-headline"
          style={{
            color: "#ffffff",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1.2,
            maxWidth: "720px",
            marginBottom: "1.5rem",
          }}
        >
          {headline}
        </h1>

        {/* Sub-headline */}
        <p
          className="hero-subheadline"
          style={{
            color: "rgba(255,255,255,0.92)",
            fontSize: "1.1875rem",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "2.5rem",
          }}
        >
          {subheadline}
        </p>

        {/* Mobile-only tap-to-call button (Fix 2) — hidden on desktop */}
        <a
          href="tel:01691791543"
          className="hero-mobile-call"
          aria-label="Call us on 01691 791543"
          style={{
            display: "none", /* shown via CSS on mobile */
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.625rem",
            backgroundColor: "#1B4F72",
            border: "2px solid rgba(255,255,255,0.5)",
            color: "#ffffff",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            borderRadius: "0.625rem",
            textDecoration: "none",
            minHeight: "56px",
            marginBottom: "0.75rem",
          }}
        >
          📞 Call 01691 791543
        </a>

        {/* CTA buttons */}
        <div
          className="hero-cta-group"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <Link
            href={ctaHref}
            className="btn-primary hero-cta-primary"
            style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
          >
            {ctaText}
          </Link>
          <Link
            href={secondaryCtaHref}
            className="btn-secondary hero-cta-secondary"
            style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
          >
            {secondaryCtaText}
          </Link>
        </div>

        {/* Phone call strip — hidden on mobile (replaced by tap-to-call button above + sticky bar) */}
        <div
          className="hero-phone-strip"
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
          <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem" }}>
            Mon–Fri 9am–5:30pm
          </span>
          <a
            href="https://wa.me/447843352654"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        /* Mobile hero: tighten layout so both CTAs are above the fold on 375px/360px viewports */
        @media (max-width: 639px) {
          .hero-container {
            padding-top: 1.25rem !important;
            padding-bottom: 1.25rem !important;
          }
          .hero-trust-badge {
            font-size: 0.8125rem !important;
            padding: 0.25rem 0.75rem !important;
            margin-bottom: 0.625rem !important;
          }
          .hero-headline {
            font-size: 1.625rem !important;
            line-height: 1.15 !important;
            margin-bottom: 0.625rem !important;
          }
          .hero-subheadline {
            font-size: 1rem !important;
            line-height: 1.55 !important;
            margin-bottom: 0.875rem !important;
          }
          .hero-mobile-call {
            display: flex !important;
          }
          .hero-cta-group {
            margin-bottom: 0.875rem !important;
            gap: 0.625rem !important;
          }
          /* Hide the phone strip on mobile — tap-to-call button above + sticky bar covers it */
          .hero-phone-strip {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
