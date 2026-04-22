"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Phone Mast Advice — Cookie Consent Banner (Google EU UCP compliant).
 *
 * First layer (required by Google Ads Issue 1.1):
 *  - Explicitly mentions "ads personalisation"
 *  - Mentions "cookies and mobile ad identifiers"
 *  - Mentions "personalised and non-personalised advertising"
 *  - Direct link to https://business.safety.google/privacy/ (Issue 1.2)
 *  - 3 buttons with equivalent visual weight: Reject / Manage / Accept
 *
 * Consent Mode v2 integration:
 *  - Default state `denied` is set in <ConsentDefault /> (head, beforeInteractive)
 *  - User decision fires gtag('consent','update', ...) + persists to localStorage
 *  - Manage preferences modal controls Analytics + Advertising granularly
 *
 * Re-open: footer "Manage cookies" button dispatches a `reopen-consent-banner`
 * CustomEvent which this component listens for.
 */

const STORAGE_KEY = "cookie_consent_v1";
const REOPEN_EVENT = "reopen-consent-banner";

interface ConsentPrefs {
  analytics: boolean;
  advertising: boolean;
}

interface StoredConsent {
  status: "accepted" | "rejected" | "custom";
  prefs: ConsentPrefs;
  timestamp: string;
  version: 1;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtagUpdate(prefs: ConsentPrefs) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    // Fallback: push to dataLayer directly if gtag wasn't defined yet
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["consent", "update", {
      ad_storage: prefs.advertising ? "granted" : "denied",
      ad_user_data: prefs.advertising ? "granted" : "denied",
      ad_personalization: prefs.advertising ? "granted" : "denied",
      analytics_storage: prefs.analytics ? "granted" : "denied",
    }]);
    return;
  }
  window.gtag("consent", "update", {
    ad_storage: prefs.advertising ? "granted" : "denied",
    ad_user_data: prefs.advertising ? "granted" : "denied",
    ad_personalization: prefs.advertising ? "granted" : "denied",
    analytics_storage: prefs.analytics ? "granted" : "denied",
  });
}

function persist(status: StoredConsent["status"], prefs: ConsentPrefs) {
  try {
    const record: StoredConsent = {
      status,
      prefs,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* ignore storage errors */
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const manageRef = useRef<HTMLDivElement>(null);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  // Decide whether to show the banner on mount (and on reopen events)
  useEffect(() => {
    const decide = () => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          setVisible(true);
          return;
        }
        // Already decided — stay hidden
        setVisible(false);
      } catch {
        setVisible(true);
      }
    };
    decide();

    const handleReopen = () => {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setShowManage(false);
      setVisible(true);
    };
    window.addEventListener(REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(REOPEN_EVENT, handleReopen);
  }, []);

  // Keyboard: ESC closes Manage modal but keeps banner visible
  useEffect(() => {
    if (!showManage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowManage(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showManage]);

  const acceptAll = useCallback(() => {
    const prefs = { analytics: true, advertising: true };
    gtagUpdate(prefs);
    persist("accepted", prefs);
    setVisible(false);
    setShowManage(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const prefs = { analytics: false, advertising: false };
    gtagUpdate(prefs);
    persist("rejected", prefs);
    setVisible(false);
    setShowManage(false);
  }, []);

  const savePreferences = useCallback(() => {
    const prefs = { analytics, advertising };
    gtagUpdate(prefs);
    persist("custom", prefs);
    setVisible(false);
    setShowManage(false);
  }, [analytics, advertising]);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(10, 15, 25, 0.35)",
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        aria-describedby="consent-desc"
        data-testid="consent-banner"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: "#ffffff",
          borderTop: "3px solid #1B4F72",
          boxShadow: "0 -8px 30px rgba(0,0,0,0.18)",
          padding: "1.25rem 1rem",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          <div>
            <h2
              id="consent-title"
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 700,
                color: "#1a1a2e",
                margin: "0 0 0.5rem 0",
              }}
            >
              Your privacy choices
            </h2>
            <p
              id="consent-desc"
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#1a1a2e",
                margin: 0,
              }}
            >
              We use cookies and similar technologies (including{" "}
              <strong>mobile ad identifiers</strong>) on this website. Some are
              essential, while others are used for{" "}
              <strong>ads personalisation</strong>, analytics, and to understand
              how you use our site. By clicking &ldquo;Accept all&rdquo;, you
              consent to the use of cookies for{" "}
              <strong>personalised and non-personalised advertising</strong>.{" "}
              See{" "}
              <a
                href="https://business.safety.google/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1B4F72", fontWeight: 600, textDecoration: "underline" }}
                data-testid="consent-google-link"
              >
                Google's Business Data Responsibility Site
              </a>{" "}
              for how Google uses your data.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.625rem",
              justifyContent: "flex-end",
            }}
          >
            <button
              type="button"
              ref={firstBtnRef}
              onClick={rejectNonEssential}
              data-testid="consent-reject"
              aria-label="Reject non-essential cookies"
              style={buttonStyle("ghost")}
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => setShowManage(true)}
              data-testid="consent-manage"
              aria-label="Manage cookie preferences"
              style={buttonStyle("ghost")}
            >
              Manage preferences
            </button>
            <button
              type="button"
              onClick={acceptAll}
              data-testid="consent-accept"
              aria-label="Accept all cookies"
              style={buttonStyle("primary")}
            >
              Accept all
            </button>
          </div>
        </div>
      </div>

      {/* Manage preferences modal */}
      {showManage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="manage-title"
          ref={manageRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            background: "rgba(10, 15, 25, 0.55)",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              maxWidth: "520px",
              width: "100%",
              padding: "1.75rem",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <h3
              id="manage-title"
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#1a1a2e",
                margin: "0 0 0.75rem 0",
              }}
            >
              Manage cookie preferences
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.55, margin: "0 0 1.25rem 0" }}>
              Choose which categories of cookies you allow. Essential cookies
              are always on — they are required for the site to work.
            </p>

            <ToggleRow label="Essential" description="Required for core site functionality (security, session, forms)." checked disabled />
            <ToggleRow
              label="Analytics"
              description="Helps us understand how the site is used. Sets analytics_storage."
              checked={analytics}
              onChange={setAnalytics}
            />
            <ToggleRow
              label="Advertising"
              description="Enables personalised and non-personalised Google advertising, remarketing and conversion tracking. Sets ad_storage, ad_user_data, ad_personalization."
              checked={advertising}
              onChange={setAdvertising}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "1.25rem" }}>
              <button type="button" onClick={() => setShowManage(false)} style={buttonStyle("ghost")}>
                Cancel
              </button>
              <button type="button" onClick={savePreferences} style={buttonStyle("primary")} data-testid="consent-save">
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onChange,
  disabled,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        padding: "0.75rem 0",
        borderTop: "1px solid #e5e7eb",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{ marginTop: "0.25rem", width: "18px", height: "18px" }}
      />
      <span>
        <span style={{ display: "block", fontWeight: 600, color: "#1a1a2e" }}>{label}</span>
        <span style={{ display: "block", fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.5 }}>{description}</span>
      </span>
    </label>
  );
}

function buttonStyle(variant: "primary" | "ghost"): React.CSSProperties {
  const base: React.CSSProperties = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "0.9375rem",
    fontWeight: 600,
    padding: "0.625rem 1.125rem",
    minHeight: "44px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "1.5px solid #1B4F72",
    transition: "all 0.18s ease",
  };
  if (variant === "primary") {
    return {
      ...base,
      backgroundColor: "#1B4F72",
      color: "#ffffff",
    };
  }
  return {
    ...base,
    backgroundColor: "transparent",
    color: "#1B4F72",
  };
}
