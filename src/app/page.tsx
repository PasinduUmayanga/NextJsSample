import Link from "next/link";

export default function HomePage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>Next.js Sample</h1>
        <p style={styles.description}>
          Explore examples for single routes, nested routes, dynamic routes,
          and catch-all segments.
        </p>
        <Link href="/features/routingtypes" style={styles.button}>
          Open routing examples
        </Link>
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
    maxWidth: 560,
    textAlign: "center",
  },
  title: {
    color: "#111827",
    fontSize: 40,
    fontWeight: 800,
    margin: 0,
  },
  description: {
    color: "#4b5563",
    fontSize: 18,
    lineHeight: 1.6,
    margin: "16px 0 24px",
  },
  button: {
    alignItems: "center",
    background: "#2563eb",
    border: "1px solid #1d4ed8",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(37, 99, 235, 0.22)",
    color: "#ffffff",
    display: "inline-flex",
    fontSize: 16,
    fontWeight: 700,
    justifyContent: "center",
    minHeight: 44,
    padding: "12px 18px",
    textDecoration: "none",
  },
};
