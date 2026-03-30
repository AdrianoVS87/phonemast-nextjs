import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
export const metadata: Metadata = {
  title: "Phone Mast Rent Reviews | Expert UK Surveyors | Phone Mast Advice",
  description: "Independent phone mast rent review specialists. We benchmark your rent against comparable UK deals and negotiate improved terms. Call 01691 791543.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-services/rent-reviews" },
};
export default function RentReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services" }, { label: "Rent Reviews" }]} />
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1a1a2e", marginBottom: "1.25rem" }}>Phone Mast Rent Reviews</h1>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>If you haven&apos;t had your phone mast rent reviewed recently, there is a good chance you are being significantly underpaid. Mobile operators regularly rely on landlords not seeking specialist advice to keep rents low.</p>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem" }}>We use our extensive database of comparable UK deals — built over 25+ years — to benchmark your rent and negotiate improved terms. Our specialists act exclusively for landlords, giving you unbiased, expert representation.</p>
          <a href="/free-rent-estimate" className="btn-primary">Get Your Free Rent Estimate</a>
        </div>
      </section>
      <CTASection />
    </>
  );
}
