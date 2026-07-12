const COMPARISON_ROWS = [
  {
    feature: "Runs on",
    server: "Server",
    client: "Browser",
    shared: "Server or browser",
  },
  {
    feature: "Needs directive",
    server: "No",
    client: '"use client"',
    shared: "Only if it uses client features",
  },
  {
    feature: "Can use state",
    server: "No",
    client: "Yes",
    shared: "Only as a client component",
  },
  {
    feature: "Can handle clicks",
    server: "No",
    client: "Yes",
    shared: "Only as a client component",
  },
  {
    feature: "Best for",
    server: "Data and static content",
    client: "Interactive UI",
    shared: "Reusable presentation",
  },
  {
    feature: "Fetch data",
    server: "Yes",
    client: "Yes, for browser APIs",
    shared: "Prefer passing data as props",
  },
  {
    feature: "Access backend resources",
    server: "Yes",
    client: "No",
    shared: "Only from server usage",
  },
  {
    feature: "Keep sensitive information on the server",
    server: "Yes",
    client: "No",
    shared: "Only if rendered on server",
  },
  {
    feature: "Keep large dependencies on the server",
    server: "Yes",
    client: "No",
    shared: "Prefer server-only usage",
  },
  {
    feature: "useState and lifecycle events",
    server: "No",
    client: "Yes",
    shared: "Only with use client",
  },
  {
    feature: "Use React components",
    server: "Yes",
    client: "Yes",
    shared: "Yes",
  },
];

export default function ComponentFeaturesTable() {
  // This table compares the most important behavior differences at a glance.
  // Keep the wording short so it stays readable on small screens.
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Component Features Comparison</h2>
      <p style={styles.description}>
        Use this table to quickly choose the right component type.
      </p>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Feature</th>
              <th style={styles.headerCell}>Server</th>
              <th style={styles.headerCell}>Client</th>
              <th style={styles.headerCell}>Shared UI</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.feature}>
                <th style={styles.rowHeader}>{row.feature}</th>
                <td style={styles.cell}>{row.server}</td>
                <td style={styles.cell}>{row.client}</td>
                <td style={styles.cell}>{row.shared}</td>
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
  tableWrap: {
    overflowX: "auto",
  },
  table: {
    borderCollapse: "collapse",
    color: "#374151",
    fontSize: 14,
    minWidth: 640,
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
  },
  cell: {
    border: "1px solid #e5e7eb",
    padding: "10px 12px",
    verticalAlign: "top",
  },
};
