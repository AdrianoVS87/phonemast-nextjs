"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  showJsonLd?: boolean;
}

export default function FAQAccordion({ items, showJsonLd = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {showJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                border: `1px solid ${isOpen ? "#a4ca62" : "#e5e7eb"}`,
                borderRadius: "0.75rem",
                overflow: "hidden",
                transition: "border-color 0.2s ease",
                backgroundColor: "#ffffff",
              }}
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                  minHeight: "44px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    color: "#1a1a2e",
                    lineHeight: 1.4,
                  }}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "50%",
                    backgroundColor: isOpen ? "#a4ca62" : "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isOpen ? "#1a1a2e" : "#6b7280",
                    fontSize: "1rem",
                    fontWeight: 700,
                    transition: "background-color 0.2s ease, transform 0.2s ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer — simple CSS height transition */}
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isOpen ? "800px" : "0",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem",
                    color: "#374151",
                    fontSize: "1.0625rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
