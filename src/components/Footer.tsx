import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Rent Reviews", href: "/phone-mast-services/rent-reviews" },
  { label: "Lease Renewals", href: "/phone-mast-services/lease-renewals" },
  { label: "New Lettings", href: "/phone-mast-services/new-lettings" },
  { label: "Mast Sales", href: "/phone-mast-services/mast-sales" },
  { label: "Removal & Redevelopment", href: "/phone-mast-services/removal-and-redevelopment" },
  { label: "Electricity Costs Recovery", href: "/phone-mast-services/electricity-costs-recovery" },
  { label: "Lease Retrievals", href: "/phone-mast-services/lease-retrievals" },
  { label: "Other Services", href: "/phone-mast-services/other-services" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/about-us" },
  { label: "Team", href: "/team" },
];

const offices = [
  {
    city: "London",
    address: "167–169 Great Portland Road, 5th Floor",
    postcode: "W1W 5PF",
  },
  {
    city: "Bristol",
    address: "5 High Street, Westbury on Trym",
    postcode: "BS9 3BY",
  },
  {
    city: "Oswestry",
    address: "Artillery Business Park",
    postcode: "SY11 4AD",
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B4F72", color: "#ffffff" }}>
      <div
        className="container-max"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        {/* Logo + strapline */}
        <div style={{ marginBottom: "3rem" }}>
          <Image
            src="/images/logo-all-white.svg"
            alt="Phone Mast Advice"
            width={180}
            height={48}
            className="h-10 w-auto"
          />
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1rem",
              opacity: 0.85,
              maxWidth: "420px",
              lineHeight: 1.6,
            }}
          >
            Independent specialist telecom surveyors acting only for UK
            landlords — not for operators.
          </p>
        </div>

        {/* 4-column grid */}
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {/* Services */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#a4ca62",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={s.href}
                    style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Company */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#a4ca62",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {legal.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={l.href}
                    style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#a4ca62",
              }}
            >
              Offices
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {offices.map((o) => (
                <li key={o.city} style={{ marginBottom: "1.25rem" }}>
                  <p
                    style={{
                      fontWeight: 600,
                      color: "#ffffff",
                      fontSize: "0.9375rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {o.city}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", lineHeight: 1.5 }}>
                    {o.address}
                    <br />
                    {o.postcode}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#a4ca62",
              }}
            >
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.875rem" }}>
                <a
                  href="tel:01691791543"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.9375rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  📞 01691 791543
                </a>
              </li>
              <li style={{ marginBottom: "0.875rem" }}>
                <a
                  href="mailto:info@phonemastadvice.co.uk"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}
                >
                  ✉️ info@phonemastadvice.co.uk
                </a>
              </li>
              <li style={{ marginBottom: "0.875rem" }}>
                <a
                  href="https://wa.me/447843352654"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}
                >
                  💬 WhatsApp Us
                </a>
              </li>
              <li style={{ marginTop: "1.5rem" }}>
                <Link href="/free-rent-estimate" className="btn-pill" style={{ fontSize: "0.875rem" }}>
                  Free Rent Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          backgroundColor: "rgba(0,0,0,0.15)",
          padding: "1.25rem 0",
        }}
      >
        <div
          className="container-max"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", margin: 0 }}>
            © {new Date().getFullYear()} The Phone Mast Advice Company Ltd — Reg. 13115582. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem", margin: 0 }}>
            We represent landlords, never operators. Independent specialist telecoms surveyors.
          </p>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              href="https://www.linkedin.com/company/the-phone-mast-advice-company"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "36px", height: "36px", borderRadius: "6px",
                backgroundColor: "#0A66C2", color: "#ffffff",
                transition: "opacity 0.2s",
              }}
              
              
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fphonemastadvice.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "36px", height: "36px", borderRadius: "6px",
                backgroundColor: "#1877F2", color: "#ffffff",
                transition: "opacity 0.2s",
              }}
              
              
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fphonemastadvice.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "36px", height: "36px", borderRadius: "6px",
                backgroundColor: "#000000", color: "#ffffff",
                transition: "opacity 0.2s",
              }}
              
              
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
