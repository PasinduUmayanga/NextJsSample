import CodeBlock from "@/app/_components/code-block";

export default function PageRoutingSample() {
  return (
    <main style={styles.page}>
      <section style={styles.panel}>
        <h1 style={styles.title}>Page Routing Sample</h1>
        <p style={styles.description}>
          This page is rendered from{" "}
          `src/app/features/routing-types/page-routing/page.tsx`.
          In the App Router, folders become URL segments and `page.tsx` makes
          the segment publicly accessible.
        </p>
        <div style={styles.example}>
          <div style={styles.label}>File path</div>
          <CodeBlock compact>
            src/app/features/routing-types/page-routing/page.tsx
          </CodeBlock>
          <div style={styles.label}>Browser URL</div>
          <CodeBlock compact>/features/routing-types/page-routing</CodeBlock>
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
    maxWidth: 640,
    padding: 24,
  },
  title: {
    color: "#111827",
    fontSize: 32,
    fontWeight: 800,
    margin: 0,
  },
  description: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 1.6,
    margin: "12px 0 20px",
  },
  example: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 16,
  },
  label: {
    color: "#374151",
    fontSize: 12,
    fontWeight: 800,
    margin: "8px 0 6px",
    textTransform: "uppercase",
  },
};
