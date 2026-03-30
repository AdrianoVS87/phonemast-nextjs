import type { Metadata } from "next";
import ServiceCard, { type ServiceCardProps } from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Phone Mast Services | Expert Telecom Surveyors | Phone Mast Advice",
  description:
    "Specialist phone mast services for UK landlords: rent reviews, lease renewals, new lettings, mast sales, removal and more. Independent advisors — never acting for operators.",
  alternates: { canonical: "https://phonemastadvice.co.uk/phone-mast-services" },
};

const services: ServiceCardProps[] = [
  { icon: "📋", title: "Rent Reviews", description: "Regularly benchmark and update your rental income using our extensive database of comparable UK deals.", href: "/phone-mast-services/rent-reviews" },
  { icon: "🔄", title: "Lease Renewals", description: "Navigate the Electronic Communications Code confidently. We secure favourable terms when operators try to renew on their terms.", href: "/phone-mast-services/lease-renewals" },
  { icon: "📝", title: "New Lettings", description: "Get the right lease from day one — strong rents, access restrictions, and redevelopment protections built in.", href: "/phone-mast-services/new-lettings" },
  { icon: "💷", title: "Mast Sales", description: "Capitalise on your valuable lease asset. We advise on and facilitate mast sales to maximise your consideration.", href: "/phone-mast-services/mast-sales" },
  { icon: "🏗️", title: "Removal & Redevelopment", description: "Reclaim your land when needed. Expert advice on removing masts and protecting redevelopment rights.", href: "/phone-mast-services/removal-and-redevelopment" },
  { icon: "⚡", title: "Electricity Costs Recovery", description: "Many landlords unknowingly subsidise operator electricity costs. We identify and recover these charges.", href: "/phone-mast-services/electricity-costs-recovery" },
  { icon: "📁", title: "Lease Retrievals", description: "Lost or misplaced your original lease? We assist with documentation retrieval and record clarification.", href: "/phone-mast-services/lease-retrievals" },
  { icon: "➕", title: "Other Services", description: "Portfolio valuations, dispute resolution, lease interpretation — tailored advice for any telecoms property situation.", href: "/phone-mast-services/other-services" },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <section className="section-padding" style={{ backgroundColor: "#f9f8f5" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1a1a2e", marginBottom: "1rem" }}>
              Phone Mast Services
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#6b7280", maxWidth: "560px", margin: "0 auto", lineHeight: 1.65 }}>
              Comprehensive specialist support for every aspect of your telecom property — from new lettings to lease renewals and mast sales.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {services.map((s) => <ServiceCard key={s.href} {...s} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
