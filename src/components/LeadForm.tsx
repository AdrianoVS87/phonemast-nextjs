"use client";

import { useState, useRef } from "react";
import { sendLeadEmail } from "@/app/actions/sendLeadEmail";
import { fireConversion } from "@/lib/gtagConversion";

const OPERATORS = [
  "Vodafone",
  "O2",
  "EE",
  "Three (Hutchison 3G)",
  "CTIL / Cornerstone",
  "On Tower (formerly Arqiva)",
  "Cellnex",
  "Airwave Solutions",
  "Wireless Infrastructure Group (WIG)",
  "Other",
  "Not sure",
];

const ENQUIRY_TYPES = [
  "Rent Review",
  "Lease Renewal",
  "New Letting",
  "Removal",
  "Other",
];

interface LeadFormProps {
  formType: "lease-check" | "rent-estimate";
}

export default function LeadForm({ formType }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)
        ?.value ?? "";

    const data = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      address: get("address"),
      operator: get("operator"),
      currentRent: get("currentRent"),
      enquiryType: formType === "lease-check" ? get("enquiryType") : undefined,
      message: get("message"),
      formType,
      _trap: get("_trap"),
    };

    const result = await sendLeadEmail(data);

    if (result.success) {
      fireConversion("lead");
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    fontSize: "1.0625rem",
    color: "#1a1a2e",
    backgroundColor: "#ffffff",
    outline: "none",
    transition: "border-color 0.2s ease",
    minHeight: "44px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: 600,
    fontSize: "1rem",
    color: "#1a1a2e",
    marginBottom: "0.5rem",
  };

  if (status === "success") {
    return (
      <div
        style={{
          backgroundColor: "#f0faf0",
          border: "2px solid #a4ca62",
          borderRadius: "1rem",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
        <h3
          style={{
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "1.375rem",
            color: "#1a1a2e",
            marginBottom: "0.75rem",
          }}
        >
          Request Received!
        </h3>
        <p style={{ color: "#374151", fontSize: "1.0625rem", margin: 0, lineHeight: 1.65 }}>
          Thank you for getting in touch. One of our specialist surveyors will review your details and come back to you within one working day. For urgent enquiries, call{" "}
          <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>
            01691 791543
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label={formType === "lease-check" ? "Lease check form" : "Rent estimate form"}>
      {/* Honeypot */}
      <input
        type="text"
        name="_trap"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <div style={{ display: "grid", gap: "1.25rem" }}>
        {/* Two-column grid on wider screens */}
        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {/* Name */}
          <div>
            <label htmlFor="lead-name" style={labelStyle}>
              Full Name <span style={{ color: "#dc2626" }}>*</span>
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. John Smith"
              style={inputStyle}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="lead-email" style={labelStyle}>
              Email Address <span style={{ color: "#dc2626" }}>*</span>
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" style={labelStyle}>
            Phone Number
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 01691 791543"
            style={inputStyle}
          />
        </div>

        {/* Property Address */}
        <div>
          <label htmlFor="lead-address" style={labelStyle}>
            Property Address
          </label>
          <input
            id="lead-address"
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="Full address of the phone mast site"
            style={inputStyle}
          />
        </div>

        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {/* Operator */}
          <div>
            <label htmlFor="lead-operator" style={labelStyle}>
              Operator / Network
            </label>
            <select
              id="lead-operator"
              name="operator"
              style={{ ...inputStyle, cursor: "pointer" }}
              defaultValue=""
            >
              <option value="" disabled>
                Select operator…
              </option>
              {OPERATORS.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>

          {/* Current Rent */}
          <div>
            <label htmlFor="lead-rent" style={labelStyle}>
              Current Annual Rent
            </label>
            <input
              id="lead-rent"
              name="currentRent"
              type="text"
              placeholder="e.g. £5,000 per year"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Enquiry Type — lease check only */}
        {formType === "lease-check" && (
          <div>
            <label htmlFor="lead-enquiry" style={labelStyle}>
              Enquiry Type
            </label>
            <select
              id="lead-enquiry"
              name="enquiryType"
              style={{ ...inputStyle, cursor: "pointer" }}
              defaultValue=""
            >
              <option value="" disabled>
                Select enquiry type…
              </option>
              {ENQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="lead-message" style={labelStyle}>
            Additional Information
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            placeholder="Any additional details about your situation, documents you have, or questions you'd like to ask…"
            style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <div
            role="alert"
            style={{
              backgroundColor: "#fef2f2",
              border: "1px solid #fca5a5",
              borderRadius: "0.5rem",
              padding: "1rem",
              color: "#991b1b",
              fontSize: "1rem",
            }}
          >
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary"
          style={{
            width: "100%",
            justifyContent: "center",
            fontSize: "1.0625rem",
            padding: "1rem",
            opacity: status === "sending" ? 0.7 : 1,
            cursor: status === "sending" ? "not-allowed" : "pointer",
          }}
        >
          {status === "sending"
            ? "Sending…"
            : formType === "lease-check"
              ? "Submit Free Lease Check"
              : "Submit for Free Estimate"}
        </button>

        <p style={{ textAlign: "center", color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>
          Or call us:{" "}
          <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>
            01691 791543
          </a>{" "}
          ·{" "}
          <a
            href="https://wa.me/447843352654"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1B4F72", fontWeight: 600 }}
          >
            WhatsApp
          </a>
        </p>
      </div>
    </form>
  );
}
