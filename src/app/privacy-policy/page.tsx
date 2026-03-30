import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Privacy Policy | Phone Mast Advice",
  description: "Privacy Policy for The Phone Mast Advice Company Ltd — Reg. 13115582.",
  alternates: { canonical: "https://phonemastadvice.co.uk/privacy-policy" },
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <section className="section-padding">
        <div className="container-max" style={{ maxWidth: "720px" }}>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1a1a2e", marginBottom: "1.25rem" }}>Privacy Policy</h1>
          <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7 }}>This page is being updated. Please contact us at <a href="mailto:info@phonemastadvice.co.uk" style={{ color: "#1B4F72" }}>info@phonemastadvice.co.uk</a> with any queries.</p>
        </div>
      </section>
    </>
  );
}
