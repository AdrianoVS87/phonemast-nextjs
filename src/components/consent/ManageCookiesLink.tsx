"use client";

/**
 * Footer "Manage cookies" link — dispatches `reopen-consent-banner` event
 * which ConsentBanner listens for. Used both in the legal column of the
 * footer and in the bottom bar.
 */
export default function ManageCookiesLink({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("reopen-consent-banner"));
      }}
      data-testid="manage-cookies-link"
      className={className}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        color: "inherit",
        cursor: "pointer",
        font: "inherit",
        textAlign: "left",
        ...style,
      }}
    >
      Manage cookies
    </button>
  );
}
