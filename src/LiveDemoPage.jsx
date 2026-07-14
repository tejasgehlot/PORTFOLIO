function LiveDemoPage({ setCurrentPage }) {
  return (
    <main
      className="live-demo-page"
      style={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(1rem, 4vw, 2rem)",
        background: "var(--bg)",
        color: "var(--text)"
      }}
    >
      <div
        className="live-demo-card"
        style={{
          maxWidth: "650px",
          width: "100%",
          textAlign: "center"
        }}
      >
        <p className="live-demo-label">
  LIVE PROJECTS
</p>

        <h1 className="live-demo-title">
  LiVe DeMoS<br />
  aRe cOmInG...
</h1>

        <p className="live-demo-description">
  Every project on this portfolio is actively being improved.
  Public deployments will be available once they're production ready.
  Until then, you can explore the complete case studies and source code.
</p>

        <button
    className="live-demo-button"
    onClick={() => setCurrentPage("portfolio")}
>
    ← Back to Portfolio
</button>
      </div>
    </main>
  );
}

export default LiveDemoPage;
