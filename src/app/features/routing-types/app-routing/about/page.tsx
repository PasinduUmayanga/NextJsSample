const ROUTE_DETAILS = [
  {
    label: "Route path",
    value: "/features/routing-types/app-routing/about",
  },
  {
    label: "File path",
    value: "src/app/features/routing-types/app-routing/about/page.tsx",
  },
  {
    label: "Routing type",
    value: "Single App Router page",
  },
];

export default function AboutPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>About Route Sample</h1>
        <p style={styles.description}>
          This page shows a single App Router route. In the App Router, the
          folder name becomes the URL segment and `page.tsx` renders the route.
        </p>
        <div style={styles.grid}>
          {ROUTE_DETAILS.map((detail) => (
            <section key={detail.label} style={styles.card}>
              <h2 style={styles.cardTitle}>{detail.label}</h2>
              <p style={styles.cardDescription}>{detail.value}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    alignItems: "center",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    padding: 24,
  },
  content: {
    maxWidth: 820,
    width: "100%",
  },
  title: {
    color: "#111827",
    fontSize: 40,
    fontWeight: 800,
    margin: 0,
    textAlign: "center",
  },
  description: {
    color: "#4b5563",
    fontSize: 18,
    lineHeight: 1.6,
    margin: "12px auto 24px",
    maxWidth: 640,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  },
  card: {
    background: "#ffffff",
    border: "2px solid #2563eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    minHeight: 140,
    padding: 20,
  },
  cardTitle: {
    color: "#2563eb",
    fontSize: 20,
    fontWeight: 800,
    margin: 0,
  },
  cardDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "10px 0 0",
    overflowWrap: "anywhere",
  },
};
