import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Phone Mast Advice",
  description:
    "Contact The Phone Mast Advice Company. Call 01691 791543, email info@phonemastadvice.co.uk or use our online form. Offices in London, Bristol and Oswestry.",
  alternates: { canonical: "https://phonemastadvice.co.uk/contact" },
};

export default function ContactPage() {
  return (
    <>
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

              {[
                { icon: "📞", label: "Phone", value: "01691 791543", href: "tel:01691791543" },
                { icon: "✉️", label: "Email", value: "info@phonemastadvice.co.uk", href: "mailto:info@phonemastadvice.co.uk" },
                { icon: "💬", label: "WhatsApp", value: "447843352654", href: "https://wa.me/447843352654" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#6b7280", margin: "0 0 0.25rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{item.label}</p>
                    <a href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined} style={{ fontSize: "1.125rem", color: "#1B4F72", fontWeight: 600 }}>{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
