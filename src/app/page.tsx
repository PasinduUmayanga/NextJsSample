import Link from "next/link";

const HOME_ITEMS = [
  {
    href: "/features",
    title: "Features",
    description: "Explore examples for routing and component patterns.",
    color: "#2563eb",
  },
  {
    href: "/setting-up-nextjs",
    title: "Setting up Next.js",
    description: "Create a new app, install dependencies, and start dev mode.",
    color: "#059669",
  },
  {
    href: "/about",
    title: "About",
    description: "Learn what this sample app covers and how it is organized.",
    color: "#0891b2",
  },
];

export default function HomePage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>Next.js Learning Hub</h1>
        <p style={styles.description}>
          Next.js is a React framework for building fast web apps with routing,
          rendering, data loading, and production tooling built in.
        </p>
        <p style={styles.descriptionSmall}>
          Use this learning sample to explore setup, routing, and component
          patterns step by step.
        </p>
        <div style={styles.grid}>
          {HOME_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              style={{
                ...styles.card,
                borderColor: item.color,
                color: item.color,
              }}
            >
              <span style={styles.cardTitle}>{item.title}</span>
              <span style={styles.cardDescription}>{item.description}</span>
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
    margin: "12px auto 8px",
    maxWidth: 520,
    textAlign: "center",
  },
  descriptionSmall: {
    color: "#6b7280",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "0 auto 24px",
    maxWidth: 560,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
  card: {
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
  cardTitle: {
    fontSize: 24,
    fontWeight: 800,
  },
  cardDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    marginTop: 10,
  },
};
