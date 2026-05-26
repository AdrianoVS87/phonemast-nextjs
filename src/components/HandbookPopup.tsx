"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { sendHandbookEmail } from "@/app/actions/sendLeadEmail";
import { fireConversion } from "@/lib/gtagConversion";

type Status = "idle" | "sending" | "success" | "error";

type Props = {
  onClose: () => void;
  /** Where the lead came from (path or campaign id) — passed to server action for attribution. */
  source: string;
};

export default function HandbookPopup({ onClose, source }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Focus the first input when opened
  useEffect(() => {
    const t = setTimeout(() => {
      const firstInput = dialogRef.current?.querySelector<HTMLInputElement>(
        'input[name="name"]',
      );
      firstInput?.focus();
    }, 80);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("sending");
      setErrorMsg("");

      const form = e.currentTarget;
      const get = (name: string) =>
        (form.elements.namedItem(name) as HTMLInputElement)?.value ?? "";

      const result = await sendHandbookEmail(
        {
          name: get("name"),
          email: get("email"),
          phone: get("phone"),
          _trap: get("_trap"),
        },
        source,
      );

      if (result.success) {
        fireConversion("handbook");
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong.");
      }
    },
    [source],
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      ref={dialogRef}
      onClick={(e) => {
        // Click on backdrop closes; clicks inside the panel do not
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(2px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "1rem",
          maxWidth: "480px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close handbook offer"
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid #e5e7eb",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "1.125rem",
            color: "#1a1a2e",
            zIndex: 2,
          }}
        >
          ×
        </button>

        {status === "success" ? (
          <SuccessPanel titleId={titleId} descId={descId} onClose={onClose} />
        ) : (
          <FormPanel
            titleId={titleId}
            descId={descId}
            status={status}
            errorMsg={errorMsg}
            formRef={formRef}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

/* ---------- inner panels (presentational only) ----------------------- */

function FormPanel({
  titleId,
  descId,
  status,
  errorMsg,
  formRef,
  onSubmit,
}: {
  titleId: string;
  descId: string;
  status: Status;
  errorMsg: string;
  formRef: React.RefObject<HTMLFormElement | null>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#1B4F72",
          padding: "2rem 1.75rem 1.75rem",
          borderRadius: "1rem 1rem 0 0",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }} aria-hidden="true">📖</div>
        <h2
          id={titleId}
          style={{
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "1.5rem",
            lineHeight: 1.25,
            margin: "0 0 0.5rem",
          }}
        >
          Stay Informed as a Phone Mast Landlord
        </h2>
        <p
          id={descId}
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.9)",
            margin: 0,
          }}
        >
          Download our free handbook — fully updated for the <strong>PSTI Act 2022</strong>,
          the <em>Vache Farm</em> Upper Tribunal decision, and the 7 April 2026 changes.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        noValidate
        aria-label="Handbook download form"
        style={{ padding: "1.5rem 1.75rem 1.75rem" }}
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

        <div style={{ display: "grid", gap: "1rem" }}>
          <Field label="Full Name" name="name" required type="text" autoComplete="name" placeholder="e.g. John Smith" />
          <Field label="Email Address" name="email" required type="email" autoComplete="email" placeholder="you@example.com" />
          <Field label="Phone Number (optional)" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 01691 791543" />

          {status === "error" && (
            <div
              role="alert"
              style={{
                backgroundColor: "#fef2f2",
                border: "1px solid #fca5a5",
                borderRadius: "0.5rem",
                padding: "0.875rem 1rem",
                color: "#991b1b",
                fontSize: "0.9375rem",
              }}
            >
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              fontSize: "1.0625rem",
              padding: "0.9375rem 1rem",
              minHeight: "48px",
              opacity: status === "sending" ? 0.7 : 1,
              cursor: status === "sending" ? "not-allowed" : "pointer",
            }}
          >
            {status === "sending" ? "Sending…" : "Download Free Handbook"}
          </button>

          <p style={{ textAlign: "center", color: "#6b7280", fontSize: "0.8125rem", margin: 0, lineHeight: 1.5 }}>
            Your details will only be used to send you the handbook and relevant updates. We never share your information.
          </p>
        </div>
      </form>
    </div>
  );
}

function SuccessPanel({
  titleId,
  descId,
  onClose,
}: {
  titleId: string;
  descId: string;
  onClose: () => void;
}) {
  return (
    <div style={{ padding: "2.5rem 1.75rem", textAlign: "center" }}>
      <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }} aria-hidden="true">📥</div>
      <h2
        id={titleId}
        style={{
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "1.5rem",
          color: "#1a1a2e",
          margin: "0 0 0.75rem",
          lineHeight: 1.25,
        }}
      >
        Check Your Inbox
      </h2>
      <p
        id={descId}
        style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.65, margin: "0 0 1.5rem" }}
      >
        Thank you — the link to download your handbook has been sent to your email.
        If you don&apos;t see it within a few minutes, please check your spam or promotions folder.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="btn-primary"
        style={{
          minHeight: "44px",
          padding: "0.75rem 1.75rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
}

function Field({
  label,
  name,
  required = false,
  type,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  const id = `handbook-popup-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontWeight: 600,
          fontSize: "0.9375rem",
          color: "#1a1a2e",
          marginBottom: "0.375rem",
        }}
      >
        {label} {required && <span style={{ color: "#dc2626" }}>*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "0.75rem 0.875rem",
          border: "1px solid #d1d5db",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          color: "#1a1a2e",
          backgroundColor: "#ffffff",
          outline: "none",
          minHeight: "44px",
        }}
      />
    </div>
  );
}
