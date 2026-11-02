/** First-screen line that says who the landing pages are for. `tone` follows the background. */
export default function ExistingMastNote({ tone }: { tone: "light" | "dark" }) {
  return (
    <p
      style={{
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.5,
        color: tone === "dark" ? "#ffffff" : "#1B4F72",
        margin: "0 0 0.75rem",
      }}
    >
      For landowners who already have a phone mast on their land or building.
    </p>
  );
}
