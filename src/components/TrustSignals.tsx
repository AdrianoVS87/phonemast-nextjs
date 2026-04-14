export default function TrustSignals() {
  return (
    <section
      style={{
        backgroundColor: "#1B4F72",
        padding: "3rem 1.5rem",
      }}
      aria-label="Trust signals and credentials"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#ffffff",
            marginBottom: "0.75rem",
          }}
        >
          Trusted by UK Landlords
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          Independent specialist advisors — we never act for operators
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {/* RICS Badge */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: "12px",
              padding: "1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#a4ca62",
                color: "#1a1a2e",
                fontWeight: 700,
                fontSize: "0.8125rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "50px",
                letterSpacing: "0.05em",
                marginBottom: "0.25rem",
              }}
            >
              RICS REGULATED
            </span>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.9375rem",
                margin: 0,
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              Regulated by the Royal Institution of Chartered Surveyors
            </p>
          </div>

          {/* Company Reg */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: "12px",
              padding: "1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.75rem" }} aria-hidden="true">🏛️</span>
            <p
              style={{
                color: "#ffffff",
                fontSize: "1rem",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Company Reg: 13115582
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.875rem",
                margin: 0,
                textAlign: "center",
              }}
            >
              The Phone Mast Advice Company Ltd
            </p>
          </div>

          {/* Experience */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: "12px",
              padding: "1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.75rem" }} aria-hidden="true">⏱️</span>
            <p
              style={{
                color: "#ffffff",
                fontSize: "1rem",
                fontWeight: 700,
                margin: 0,
              }}
            >
              30+ Years Combined Experience
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.875rem",
                margin: 0,
                textAlign: "center",
              }}
            >
              10,000+ deals completed across England and Wales
            </p>
          </div>

          {/* Independent */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: "12px",
              padding: "1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.75rem" }} aria-hidden="true">🛡️</span>
            <p
              style={{
                color: "#ffffff",
                fontSize: "1rem",
                fontWeight: 700,
                margin: 0,
                textAlign: "center",
              }}
            >
              Independent — We Never Act for Operators
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.875rem",
                margin: 0,
                textAlign: "center",
              }}
            >
              Exclusively on the landlord&apos;s side, always
            </p>
          </div>

          {/* Google Reviews */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: "12px",
              padding: "1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{ display: "flex", gap: "0.2rem", marginBottom: "0.25rem" }}
              aria-label="Five stars"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} style={{ color: "#a4ca62", fontSize: "1.375rem" }} aria-hidden="true">
                  ★
                </span>
              ))}
            </div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "1rem",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Rated 5/5 on Google
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.875rem",
                margin: 0,
                textAlign: "center",
              }}
            >
              Verified client reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
