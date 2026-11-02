const optionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  minHeight: "48px",
  padding: "0.5rem 1rem",
  border: "1.5px solid #d1d5db",
  borderRadius: "10px",
  background: "#ffffff",
  color: "#1a1a2e",
  fontSize: "18px",
  cursor: "pointer",
};

/** Qualifying question for every website form. The value is read as form field `hasMast`. */
export default function MastQuestion() {
  return (
    <fieldset style={{ border: 0, margin: 0, padding: 0, minWidth: 0 }}>
      <legend style={{ padding: 0, marginBottom: "0.5rem", fontSize: "18px", fontWeight: 600, color: "#1a1a2e" }}>
        Do you already have a mast on your land or property? <span style={{ color: "#dc2626" }}>*</span>
      </legend>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "1fr 1fr" }}>
        <label style={optionStyle}>
          <input type="radio" name="hasMast" value="yes" required style={{ width: "20px", height: "20px" }} />
          Yes
        </label>
        <label style={optionStyle}>
          <input type="radio" name="hasMast" value="no" required style={{ width: "20px", height: "20px" }} />
          No
        </label>
      </div>
    </fieldset>
  );
}
