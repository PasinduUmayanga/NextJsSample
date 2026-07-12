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
];

export default function HomePage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>Next.js Sample</h1>
        <p style={styles.description}>
          Choose a topic to learn with small examples.
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
    margin: "12px auto 24px",
    maxWidth: 520,
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
