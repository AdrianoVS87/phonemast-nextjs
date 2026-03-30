"use client";

import { useState, useRef } from "react";
import { sendContactEmail } from "@/app/actions/sendContact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _trap: (form.elements.namedItem("_trap") as HTMLInputElement)?.value ?? "",
    };

    const result = await sendContactEmail(data);

    if (result.success) {
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
          Message Sent!
        </h3>
        <p style={{ color: "#374151", fontSize: "1.0625rem", margin: 0 }}>
          Thank you for getting in touch. We&apos;ll come back to you within one
          working day. For urgent enquiries, call us on{" "}
          <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>
            01691 791543
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
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
        {/* Name */}
        <div>
          <label htmlFor="contact-name" style={labelStyle}>
            Full Name <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            id="contact-name"
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
          <label htmlFor="contact-email" style={labelStyle}>
            Email Address <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            style={inputStyle}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" style={labelStyle}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="01691 791543"
            style={inputStyle}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" style={labelStyle}>
            Message <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your phone mast situation — operator name, current rent, what you need help with..."
            style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
          />
        </div>

        {/* Error message */}
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
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "0.875rem",
            margin: 0,
          }}
        >
          Or call us now:{" "}
          <a href="tel:01691791543" style={{ color: "#1B4F72", fontWeight: 600 }}>
            01691 791543
          </a>
        </p>
      </div>
    </form>
  );
}
