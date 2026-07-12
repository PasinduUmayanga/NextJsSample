import Link from "next/link";

const ROUTING_TYPES = [
  {
    href: "/features/routing-types/app-routing",
    title: "App Routing",
    description:
      "Uses the modern Next.js App Router. Routes are created inside src/app with page.tsx, layout.tsx, dynamic segments, and nested folders.",
    bestFor: "Best for new Next.js apps.",
    color: "#2563eb",
  },
  {
    href: "/features/routing-types/page-routing",
    title: "Page Routing",
    description:
      "Shows the basic idea of page-based routing: a file path maps directly to a browser URL.",
    bestFor: "Best for learning file-to-URL mapping.",
    color: "#059669",
  },
];

export default function RoutingTypesPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>Routing Types</h1>
        <p style={styles.description}>
          Choose which routing concept you want to explore.
        </p>
        <div style={styles.grid}>
          {ROUTING_TYPES.map((type) => (
            <Link
              href={type.href}
              key={type.href}
              style={{
                ...styles.cardButton,
                borderColor: type.color,
                color: type.color,
              }}
            >
              <span style={styles.buttonTitle}>{type.title}</span>
              <span style={styles.buttonDescription}>{type.description}</span>
              <span style={styles.buttonHint}>{type.bestFor}</span>
            </Link>
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
    maxWidth: 760,
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
    maxWidth: 520,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
  cardButton: {
    background: "#ffffff",
    border: "2px solid",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    display: "flex",
    flexDirection: "column",
    minHeight: 150,
    padding: 20,
    textDecoration: "none",
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: 800,
  },
  buttonDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    marginTop: 10,
  },
  buttonHint: {
    color: "#111827",
    fontSize: 13,
    fontWeight: 700,
    marginTop: 14,
  },
};
