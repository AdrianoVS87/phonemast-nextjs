import { COMPANY } from "@/content/company";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata(ROUTES.freeLeaseCheck);

export default function FreeLeaseCheckPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Free Lease Check" }]} />
      <section className="section-padding form-page-section">
        <div className="container-max">
          {/* Phones: heading, form, then the detail. Desktop: heading and detail left, form right. */}
          <div className="grid gap-6 lg:gap-x-12 lg:gap-y-0 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-[auto_1fr]">
            <div className="lg:col-start-1 lg:row-start-1">
              <h1
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#1a1a2e",
                  marginBottom: "1.25rem",
                }}
              >
                Free Phone Mast Lease Check
              </h1>
            </div>

            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div className="card form-page-card">
                <h2
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: "#1a1a2e",
                    marginBottom: "1.5rem",
                  }}
                >
                  Request Your Free Lease Check
                </h2>
                <LeadForm formType="lease-check" />
              </div>
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7, marginBottom: "2rem" }}>
                Send us your lease details and our specialist surveyors will review your agreement, identify any issues, and advise you on your options — completely free of charge.
              </p>

              {[
                { icon: "🔍", text: "Full review of your current lease terms" },
                { icon: "⚖️", text: "Identify if your rent is below market rate" },
                { icon: "📋", text: "Spot any problematic clauses or obligations" },
                { icon: "💡", text: "Advise on your options going forward" },
                { icon: "🤝", text: "No obligation — we only act if you choose us" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ fontSize: "1.125rem", color: "#374151", margin: 0, lineHeight: 1.55 }}>{item.text}</p>
                </div>
              ))}

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  backgroundColor: "rgba(4,43,77,0.05)",
                  border: "1px solid rgba(4,43,77,0.15)",
                  borderRadius: "1rem",
                }}
              >
                <p style={{ fontWeight: 700, color: "#042b4d", marginBottom: "0.375rem", fontSize: "1.125rem" }}>
                  📞 Prefer to speak to someone?
                </p>
                <p style={{ color: "#374151", fontSize: "1.125rem", margin: 0 }}>
                  Call{" "}
                  <a href={COMPANY.phone.href} style={{ color: "#042b4d", fontWeight: 600 }}>
                    {COMPANY.phone.display}
                  </a>{" "}
                  or{" "}
                  <a
                    href={COMPANY.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#042b4d", fontWeight: 600 }}
                  >
                    WhatsApp us
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
