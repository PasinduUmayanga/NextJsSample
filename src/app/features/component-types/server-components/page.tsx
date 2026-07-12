import BackButton from "@/app/_components/back-button";
import CodeBlock from "@/app/_components/code-block";
import ServerComponentSample from "./server-component-sample";

const SAMPLE_CODE = `// Server Component: no "use client" directive is needed.
// This can safely run on the server in the App Router.
export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductList products={products} />;
}`;

export default function ServerComponentsPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <BackButton href="/features/component-types" label="Back to component types" />
        <h1 style={styles.title}>Server Components</h1>
        <p style={styles.description}>
          Render on the server by default in the App Router. Use them for data
          loading, static content, backend resources, and keeping sensitive
          information off the browser.
        </p>
        <InfoBox label="Use when">
          Fetching data, accessing backend resources, or keeping large
          dependencies on the server.
        </InfoBox>
        <InfoBox label="File">
          src/app/features/component-types/server-components/server-component-sample.tsx
        </InfoBox>
        <ServerComponentSample />
        <p style={styles.sampleLabel}>Sample:</p>
        <CodeBlock>{SAMPLE_CODE}</CodeBlock>
      </section>
    </main>
  );
}

function InfoBox({
  children,
  label,
}: Readonly<{ children: React.ReactNode; label: string }>) {
  return (
    <p style={styles.infoBox}>
      <span style={styles.infoLabel}>{label}: </span>
      {children}
    </p>
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
    background: "#ffffff",
    border: "2px solid #2563eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    maxWidth: 760,
    padding: 24,
    width: "100%",
  },
  title: {
    color: "#2563eb",
    fontSize: 36,
    fontWeight: 800,
    margin: 0,
  },
  description: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 1.6,
    margin: "12px 0 16px",
  },
  infoBox: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    color: "#374151",
    fontSize: 14,
    lineHeight: 1.5,
    margin: "0 0 12px",
    padding: 12,
  },
  infoLabel: {
    color: "#111827",
    fontWeight: 800,
  },
  sampleLabel: {
    color: "#111827",
    fontSize: 13,
    fontWeight: 800,
    margin: "14px 0 0",
  },
};
