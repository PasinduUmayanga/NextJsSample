import Link from "next/link";
import { NAVIGATION_SAMPLES } from "./navigation-samples";

export default function NavigationPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>Navigation</h1>
        <p style={styles.description}>
          Learn the main App Router navigation tools. Open each topic for a
          fuller explanation and a focused code sample.
        </p>
        <div style={styles.grid}>
          {NAVIGATION_SAMPLES.map((sample) => (
            <Link
              href={`/features/navigation/${sample.slug}`}
              key={sample.slug}
              style={styles.card}
            >
              <span style={styles.cardTitle}>{sample.title}</span>
              <span style={styles.cardDescription}>{sample.description}</span>
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
    maxWidth: 960,
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
    maxWidth: 720,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
  card: {
    background: "#ffffff",
    border: "2px solid #2563eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    color: "#2563eb",
    display: "flex",
    flexDirection: "column",
    minHeight: 150,
    padding: 20,
    textDecoration: "none",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 800,
  },
  cardDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    marginTop: 10,
  },
};
