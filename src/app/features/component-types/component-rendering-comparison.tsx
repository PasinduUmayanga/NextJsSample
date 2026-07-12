const RENDERING_ROWS = [
  {
    topic: "Where rendering starts",
    server:
      "Rendered on the server first. The browser receives ready HTML for the component output.",
    client:
      "Rendered and updated in the browser after the client JavaScript loads.",
  },
  {
    topic: "JavaScript sent to browser",
    server:
      "Less JavaScript, because the component logic stays on the server unless it renders client children.",
    client:
      "More JavaScript, because the component code must be downloaded and executed in the browser.",
  },
  {
    topic: "Interactivity",
    server:
      "Cannot use browser events, state, or lifecycle hooks directly.",
    client:
      "Can use events, state, effects, refs, and browser APIs.",
  },
  {
    topic: "Data access",
    server:
      "Can safely read server data sources, environment variables, and backend-only code.",
    client:
      "Should call public APIs or receive data through props from a server component.",
  },
];

export default function ComponentRenderingComparison() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Rendering Comparison</h2>
      <p style={styles.description}>
        Server Components prepare UI on the server. Client Components take over
        browser-only behavior such as clicks, state, and effects.
      </p>
      <div style={styles.grid}>
        <section style={{ ...styles.summaryCard, borderColor: "#2563eb" }}>
          <h3 style={{ ...styles.summaryTitle, color: "#2563eb" }}>
            Server-side rendering
          </h3>
          <p style={styles.summaryText}>
            Best for fast initial content, secure data access, and reducing the
            amount of JavaScript sent to the browser.
          </p>
        </section>
        <section style={{ ...styles.summaryCard, borderColor: "#dc2626" }}>
          <h3 style={{ ...styles.summaryTitle, color: "#dc2626" }}>
            Client-side rendering
          </h3>
          <p style={styles.summaryText}>
            Best for interactive UI that needs browser state, user events,
            lifecycle effects, or browser-only APIs.
          </p>
        </section>
      </div>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Rendering topic</th>
              <th style={styles.headerCell}>Server Component</th>
              <th style={styles.headerCell}>Client Component</th>
            </tr>
          </thead>
          <tbody>
            {RENDERING_ROWS.map((row) => (
              <tr key={row.topic}>
                <th style={styles.rowHeader}>{row.topic}</th>
                <td style={styles.cell}>{row.server}</td>
                <td style={styles.cell}>{row.client}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    marginBottom: 18,
    padding: 20,
  },
  title: {
    color: "#111827",
    fontSize: 24,
    fontWeight: 800,
    margin: 0,
  },
  description: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "8px 0 14px",
  },
  grid: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginBottom: 14,
  },
  summaryCard: {
    background: "#f9fafb",
    border: "2px solid",
    borderRadius: 8,
    padding: 14,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 800,
    margin: 0,
  },
  summaryText: {
    color: "#4b5563",
    fontSize: 14,
    lineHeight: 1.5,
    margin: "8px 0 0",
  },
  tableWrap: {
    overflowX: "auto",
  },
  table: {
    borderCollapse: "collapse",
    color: "#374151",
    fontSize: 14,
    minWidth: 720,
    width: "100%",
  },
  headerCell: {
    background: "#111827",
    border: "1px solid #374151",
    color: "#ffffff",
    fontWeight: 800,
    padding: "10px 12px",
    textAlign: "left",
  },
  rowHeader: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    color: "#111827",
    fontWeight: 800,
    padding: "10px 12px",
    textAlign: "left",
    verticalAlign: "top",
  },
  cell: {
    border: "1px solid #e5e7eb",
    padding: "10px 12px",
    verticalAlign: "top",
  },
};
