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
            Independent telecom surveyors — We do not act for mobile phone operators.
          </p>
        </div>
      </div>
    </footer>
  );
}
