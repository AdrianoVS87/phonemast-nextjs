import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
export const metadata: Metadata = {
  title: "Phone Mast Lease Renewals | Phone Mast Advice",
  description: "Expert phone mast lease renewals advice for UK landlords. Independent specialists acting only for landowners. Call 01691 791543.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-services/lease-renewals" },
};
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Lease Renewals" }]} />
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1a1a2e", marginBottom: "1.25rem" }}>Lease Renewals</h1>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>Our specialist team provides expert lease renewals advice for UK landlords and landowners with phone mast sites. We act exclusively for landlords — never for mobile phone operators.</p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>Contact us today for a free, no-obligation consultation. Call <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>01691 791543</a> or use our online enquiry form.</p>
          <a href="/contact" className="btn-primary">Get Free Advice</a>
        </div>
      </section>
      <CTASection />
    </>
  );
}
