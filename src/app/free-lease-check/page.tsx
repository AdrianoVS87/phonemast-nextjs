import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free Phone Mast Lease Check | Phone Mast Advice",
  description:
    "Get a free review of your phone mast lease from independent UK specialists. We check your terms, identify issues, and advise on your options. Call 01691 791543.",
  alternates: { canonical: "https://phonemastadvice.co.uk/free-lease-check" },
};

export default function FreeLeaseCheckPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Free Lease Check" }]} />
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
            Free Phone Mast Lease Check
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
            Send us your lease details and our specialist surveyors will review your agreement, identify any issues, and advise you on your options — completely free of charge.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
