import Link from "next/link";
import BackButton from "@/app/_components/back-button";
import ComponentFeaturesTable from "./component-features-table";
import ComponentRenderingComparison from "./component-rendering-comparison";

const COMPONENT_TYPES = [
  {
    href: "/features/component-types/server-components",
    title: "Server Components",
    description: "Render on the server and keep client JavaScript smaller.",
    color: "#2563eb",
  },
  {
    href: "/features/component-types/client-components",
    title: "Client Components",
    description: "Run in the browser for state, events, and interactions.",
    color: "#dc2626",
  },
  {
    href: "/features/component-types/shared-ui-components",
    title: "Shared UI Components",
    description: "Reusable UI pieces controlled through props.",
    color: "#059669",
  },
];

export default function ComponentTypesPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <BackButton href="/features" label="Back to features" />
        <h1 style={styles.title}>Component Types</h1>
        <p style={styles.description}>
          Choose a component type to see details, a live sample, and commented
          code.
        </p>
        <ComponentRenderingComparison />
        <ComponentFeaturesTable />
        <div style={styles.grid}>
          {COMPONENT_TYPES.map((type) => (
            <Link
              href={type.href}
              key={type.href}
              style={{
                ...styles.card,
                borderColor: type.color,
                color: type.color,
              }}
            >
              <span style={styles.cardTitle}>{type.title}</span>
              <span style={styles.cardDescription}>{type.description}</span>
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
    maxWidth: 920,
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
    maxWidth: 620,
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
    minHeight: 140,
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
