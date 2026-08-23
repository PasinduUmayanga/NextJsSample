import Link from "next/link";

export default function NotFound() {
  return (
    <main style={styles.page}>
      <section style={styles.panel}>
        <p style={styles.status}>404</p>
        <h1 style={styles.title}>Page not found</h1>
        <p style={styles.description}>
          The route you opened does not exist in this Next.js learning sample.
          Go back to the learning hub or explore the feature examples.
        </p>
        <div style={styles.actions}>
          <Link href="/features" style={styles.button}>
            View features
          </Link>
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
  panel: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    maxWidth: 560,
    padding: 28,
    textAlign: "center",
    width: "100%",
  },
  status: {
    color: "#2563eb",
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: 0,
    margin: 0,
  },
  title: {
    color: "#111827",
    fontSize: 40,
    fontWeight: 800,
    margin: "8px 0 0",
  },
  description: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 1.6,
    margin: "12px auto 24px",
    maxWidth: 460,
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    background: "#ffffff",
    border: "1px solid",
    borderRadius: 8,
    borderColor: "#2563eb",
    color: "#2563eb",
    display: "inline-flex",
    fontSize: 15,
    fontWeight: 800,
    justifyContent: "center",
    minHeight: 42,
    padding: "10px 14px",
    textDecoration: "none",
  },
};
