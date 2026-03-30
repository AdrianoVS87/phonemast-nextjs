import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  headline = "Ready to Get Expert Phone Mast Advice?",
  subheadline = "Contact us today for a free, no-obligation consultation. We only act for landlords — never for mobile phone operators.",
  ctaText = "Get Your Free Rent Estimate",
  ctaHref = "/free-rent-estimate",
}: CTASectionProps) {
  return (
    <section
      style={{ backgroundColor: "#1B4F72" }}
      className="section-padding"
      aria-labelledby="cta-headline"
    >
      <div className="container-max" style={{ textAlign: "center" }}>
        <h2
          id="cta-headline"
          style={{
            color: "#ffffff",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            marginBottom: "1.25rem",
            lineHeight: 1.2,
          }}
        >
          {headline}
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
          }}
        >
          {subheadline}
        </p>

        {/* Primary CTA */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <Link
            href={ctaHref}
            className="btn-primary"
            style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
          >
            {ctaText}
          </Link>
          <Link
            href="/contact"
            className="btn-secondary"
            style={{ fontSize: "1.0625rem", padding: "1rem 2rem" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Contact options */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <a
            href="tel:01691791543"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.125rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            📞 01691 791543
          </a>
          <a
            href="mailto:info@phonemastadvice.co.uk"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.125rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            ✉️ info@phonemastadvice.co.uk
          </a>
          <a
            href="https://wa.me/447843352654"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.125rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            💬 WhatsApp: 447843352654
          </a>
        </div>
      </div>
    </section>
  );
}
