import type { Ref } from "react";
import { OFFICE_PHONE } from "@/lib/submitSafely";

/** Form failure message. It takes focus when shown, and the office number in it is tappable. */
export default function FormError({ message, ref }: { message: string; ref: Ref<HTMLDivElement> }) {
  const [before, ...after] = message.split(OFFICE_PHONE);
  return (
    <div
      ref={ref}
      role="alert"
      tabIndex={-1}
      style={{
        backgroundColor: "#fef2f2",
        border: "1px solid #fca5a5",
        borderRadius: "0.5rem",
        padding: "1rem",
        color: "#991b1b",
        fontSize: "1.125rem",
        lineHeight: 1.6,
        outline: "none",
      }}
    >
      {before}
      {after.length > 0 && (
        <a
          href="tel:01691791543"
          style={{ display: "inline-block", minHeight: "44px", lineHeight: "44px", color: "#991b1b", fontWeight: 700 }}
        >
          {OFFICE_PHONE}
        </a>
      )}
      {after.join(OFFICE_PHONE)}
    </div>
  );
}
