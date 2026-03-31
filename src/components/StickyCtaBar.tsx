"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~400px (past the hero)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: fixed bottom bar */}
      <div
        role="complementary"
        aria-label="Quick contact bar"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          backgroundColor: "#1B4F72",
          padding: "0 1rem",
          minHeight: "56px",
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        className="sticky-cta-mobile"
      >
        {/* Phone */}
        <a
          href="tel:01691791543"
          aria-label="Call us on 01691 791543"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            minHeight: "44px",
            padding: "0 0.5rem",
          }}
        >
          📞 <span>01691 791543</span>
        </a>

        {/* Free Rent Estimate CTA */}
        <Link
          href="/free-rent-estimate"
          aria-label="Get a free rent estimate"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#a4ca62",
            color: "#1a1a2e",
            fontWeight: 700,
            fontSize: "0.9375rem",
            padding: "0.6rem 1.25rem",
            borderRadius: "10px",
            textDecoration: "none",
            minHeight: "44px",
            flexShrink: 0,
          }}
        >
          Free Rent Estimate
        </Link>

        {/* WhatsApp */}
        <a
          href="https://wa.me/447843352654"
          aria-label="Contact us on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#25D366",
            fontSize: "1.5rem",
            minHeight: "44px",
            minWidth: "44px",
            textDecoration: "none",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Desktop: fixed right sidebar */}
      <div
        role="complementary"
        aria-label="Quick contact sidebar"
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: visible
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 990,
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
        className="sticky-cta-desktop"
      >
        <a
          href="tel:01691791543"
          aria-label="Call us on 01691 791543"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "#1B4F72",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.9375rem",
            padding: "0.875rem 1rem",
            textDecoration: "none",
            borderRadius: "10px 0 0 0",
            minHeight: "44px",
            whiteSpace: "nowrap",
          }}
        >
          📞 01691 791543
        </a>
        <Link
          href="/free-rent-estimate"
          aria-label="Get a free rent estimate"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#a4ca62",
            color: "#1a1a2e",
            fontWeight: 700,
            fontSize: "0.9375rem",
            padding: "0.875rem 1rem",
            textDecoration: "none",
            minHeight: "44px",
            whiteSpace: "nowrap",
          }}
        >
          Free Rent Estimate
        </Link>
        <a
          href="https://wa.me/447843352654"
          aria-label="Contact us on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#25D366",
            color: "#ffffff",
            padding: "0.875rem 1rem",
            textDecoration: "none",
            borderRadius: "0 0 0 10px",
            minHeight: "44px",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .sticky-cta-mobile { display: none !important; }
          .sticky-cta-desktop { display: flex !important; }
        }
        @media (max-width: 767px) {
          .sticky-cta-mobile { display: flex !important; }
          .sticky-cta-desktop { display: none !important; }
        }
      `}</style>
    </>
  );
}
