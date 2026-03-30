import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free Phone Mast Rent Estimate | Phone Mast Advice",
  description:
    "Get a free estimate of your phone mast rental value from independent UK specialists. No obligation. We only act for landlords. Call 01691 791543.",
  alternates: { canonical: "https://phonemastadvice.co.uk/free-rent-estimate" },
};

export default function FreeRentEstimatePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Free Rent Estimate" }]} />
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "720px" }}>
          <h1
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#1a1a2e",
              marginBottom: "1rem",
            }}
          >
            Free Phone Mast Rent Estimate
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            Tell us about your phone mast site and we&apos;ll provide a free, no-obligation estimate of the current market rental value. We use our extensive database of comparable UK deals to give you a realistic picture of what you should be receiving.
          </p>
          <div
            style={{
              backgroundColor: "rgba(27,79,114,0.05)",
              border: "1px solid rgba(27,79,114,0.15)",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p style={{ fontWeight: 700, color: "#1B4F72", marginBottom: "0.5rem", fontSize: "1rem" }}>
              ✓ Completely free — no obligation
            </p>
            <p style={{ fontWeight: 700, color: "#1B4F72", marginBottom: "0.5rem", fontSize: "1rem" }}>
              ✓ We only act for landlords — never operators
            </p>
            <p style={{ fontWeight: 700, color: "#1B4F72", margin: 0, fontSize: "1rem" }}>
              ✓ Response within one working day
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
