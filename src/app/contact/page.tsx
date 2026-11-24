import { COMPANY } from "@/content/company";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";
import { organization } from "@/seo/schema";

export const metadata = buildMetadata(ROUTES.contact);

const offices = [
  {
    city: "London",
    address: "167–169 Great Portland Street, 5th Floor",
    postcode: "W1W 5PF",
    mapQuery: "167+Great+Portland+Street+London+W1W+5PF",
  },
  {
    city: "Bristol",
    address: "5 High Street, Westbury on Trym",
    postcode: "BS9 3BY",
    mapQuery: "5+High+Street+Westbury+on+Trym+Bristol+BS9+3BY",
  },
  {
    city: "Oswestry",
    address: "Artillery Business Park",
    postcode: "SY11 4AD",
    mapQuery: "Artillery+Business+Park+Oswestry+SY11+4AD",
  },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData nodes={[organization()]} />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Navy hero banner */}
      <section style={{ backgroundColor: "#042b4d", padding: "3rem 1.5rem" }}>
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
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "1.1875rem",
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.65,
              maxWidth: "560px",
            }}
          >
            Get in touch for a free, no-obligation consultation. We respond to all enquiries within one working day and act exclusively for UK landlords.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-max">
          <div style={{ display: "grid", gap: "3rem" }} className="lg:grid-cols-2">
            {/* Left — contact info */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.375rem, 2.5vw, 1.625rem)",
                  color: "#1a1a2e",
                  marginBottom: "0.75rem",
                }}
              >
                Get in Touch
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
                Whether you have received a rent review notice, need advice on a lease renewal, or simply want to understand the value of your phone mast site — we are here to help.
              </p>

              {/* Contact methods */}
              <div style={{ marginBottom: "2rem" }}>
                {/* Phone — prominent tap-to-call */}
                <a
                  href={COMPANY.phone.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "#042b4d",
                    borderRadius: "0.75rem",
                    marginBottom: "1rem",
                    textDecoration: "none",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>📞</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "1.125rem", color: "rgba(255,255,255,0.75)", margin: "0 0 0.125rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Call Us Free
                    </p>
                    <p style={{ fontSize: "1.375rem", color: "#ffffff", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                      {COMPANY.phone.display}
                    </p>
                    <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", margin: "0.25rem 0 0" }}>
                      Mon–Fri 9am–5:30pm
                    </p>
                  </div>
                </a>

                {[
                  { icon: "✉️", label: "Email", value: `${COMPANY.email}`, href: `mailto:${COMPANY.email}` },
                  { icon: "💬", label: "WhatsApp", value: "Message us on WhatsApp", href: COMPANY.whatsapp.href },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.25rem" }}
                  >
                    <span style={{ fontSize: "1.5rem", flexShrink: 0, marginTop: "0.125rem" }}>{item.icon}</span>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "1.125rem", color: "#6b7280", margin: "0 0 0.25rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.href.startsWith("https") ? "_blank" : undefined}
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        style={{ fontSize: "1.125rem", color: "#042b4d", fontWeight: 600, textDecoration: "none" }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office addresses — 3-col on desktop */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                    color: "#1a1a2e",
                    marginBottom: "1.25rem",
                  }}
                >
                  Our Offices
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      style={{
                        padding: "1.25rem",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderLeft: "4px solid #b6f414",
                        borderRadius: "0.5rem",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                    >
                      <p style={{ fontWeight: 700, fontSize: "1.125rem", color: "#1a1a2e", margin: "0 0 0.375rem" }}>
                        {office.city}
                      </p>
                      <p style={{ fontSize: "1.125rem", color: "#4b5563", margin: "0 0 0.625rem", lineHeight: 1.5 }}>
                        {office.address}
                        <br />
                        {office.postcode}
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          fontSize: "1.125rem",
                          color: "#042b4d",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        View on map <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div className="card" style={{ padding: "2rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: "#1a1a2e",
                    marginBottom: "1.5rem",
                  }}
                >
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
