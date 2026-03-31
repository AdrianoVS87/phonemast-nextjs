import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Phone Mast Advice",
  description:
    "Contact The Phone Mast Advice Company. Call 01691 791543, email info@phonemastadvice.co.uk or use our online form. Offices in London, Bristol and Oswestry.",
  alternates: { canonical: "https://phonemastadvice.co.uk/contact" },
  openGraph: {
    title: "Contact Phone Mast Advice",
    description: "Get in touch with our specialist phone mast surveyors — offices in London, Bristol and Oswestry.",
    url: "https://phonemastadvice.co.uk/contact",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Contact Phone Mast Advice" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://phonemastadvice.co.uk" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://phonemastadvice.co.uk/contact" },
  ],
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <JsonLd
        data={{
          type: "ProfessionalService",
          name: "The Phone Mast Advice Company Ltd",
          url: "https://phonemastadvice.co.uk/contact",
          telephone: "01691 791543",
          email: "info@phonemastadvice.co.uk",
          description: "Independent specialist telecom surveyors acting only for UK landlords.",
        }}
      />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <section className="section-padding">
        <div className="container-max">
          <div style={{ display: "grid", gap: "3rem" }} className="lg:grid-cols-2">
            {/* Left — contact info */}
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#1a1a2e",
                  marginBottom: "1.25rem",
                }}
              >
                Contact Us
              </h1>
              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
                Get in touch for a free, no-obligation consultation. We respond to all enquiries within one working day.
              </p>

              {/* Contact methods */}
              {[
                { icon: "📞", label: "Phone", value: "01691 791543", href: "tel:01691791543" },
                { icon: "✉️", label: "Email", value: "info@phonemastadvice.co.uk", href: "mailto:info@phonemastadvice.co.uk" },
                { icon: "💬", label: "WhatsApp", value: "Message us on WhatsApp", href: "https://wa.me/447843352654" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.25rem" }}
                >
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#6b7280", margin: "0 0 0.25rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: "1.125rem", color: "#1B4F72", fontWeight: 600, textDecoration: "none" }}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Office addresses */}
              <div style={{ marginTop: "2.5rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#1a1a2e",
                    marginBottom: "1.5rem",
                  }}
                >
                  Our Offices
                </h2>

                <div style={{ display: "grid", gap: "1.25rem" }}>
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      style={{
                        padding: "1.25rem",
                        backgroundColor: "#f9f8f5",
                        border: "1px solid #e5e7eb",
                        borderRadius: "0.75rem",
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>📍</span>
                      <div style={{ flexGrow: 1 }}>
                        <p style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", margin: "0 0 0.25rem" }}>
                          {office.city}
                        </p>
                        <p style={{ fontSize: "0.9375rem", color: "#4b5563", margin: "0 0 0.5rem", lineHeight: 1.5 }}>
                          {office.address}
                          <br />
                          {office.postcode}
                        </p>
                        {/* Map placeholder */}
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontSize: "0.875rem",
                            color: "#1B4F72",
                            fontWeight: 600,
                            textDecoration: "none",
                          }}
                        >
                          View on map <span aria-hidden="true">→</span>
                        </a>
                      </div>
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
