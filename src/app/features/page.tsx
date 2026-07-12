import Link from "next/link";

const FEATURES = [
  {
    href: "/features/routing-types",
    title: "Routing",
    description:
      "Explore App Router examples, page routing, dynamic routes, and catch-all segments.",
    color: "#2563eb",
  },
  {
    href: "/features/component-types",
    title: "Component",
    description:
      "Compare server components, client components, and shared UI components.",
    color: "#7c3aed",
  },
  {
    href: "/features/data-fetching",
    title: "Data Fetching",
    description:
      "Learn server-side data loading, static data, and refresh patterns.",
    color: "#dc2626",
  },
  {
    href: "/features/navigation",
    title: "Navigation",
    description:
      "Practice links, router hooks, redirects, route params, query params, and prefetching.",
    color: "#0891b2",
  },
  {
    href: "/features/mutating-data",
    title: "Mutating Data",
    description:
      "Learn Server Actions, form mutations, validation, optimistic UI, and revalidation.",
    color: "#059669",
  },
];

export default function FeaturesPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>Features</h1>
        <p style={styles.description}>
          Choose a Next.js concept to explore with small examples.
        </p>
        <div style={styles.grid}>
          {FEATURES.map((feature) => (
            <Link
              href={feature.href}
              key={feature.href}
              style={{
                ...styles.cardButton,
                borderColor: feature.color,
                color: feature.color,
              }}
            >
              <span style={styles.buttonTitle}>{feature.title}</span>
              <span style={styles.buttonDescription}>
                {feature.description}
              </span>
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
};
