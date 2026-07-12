import { notFound } from "next/navigation";
import CodeBlock from "@/app/_components/code-block";
import { STATE_SAMPLES } from "../state-samples";

type StateDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StateDetailPage({
  params,
}: StateDetailPageProps) {
  const { slug } = await params;
  const sample = STATE_SAMPLES.find((item) => item.slug === slug);

  if (!sample) {
    notFound();
  }

  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <p style={styles.eyebrow}>State management sample</p>
        <h1 style={styles.title}>{sample.title}</h1>
        <p style={styles.description}>{sample.description}</p>
        <section style={styles.panel}>
          <h2 style={styles.panelTitle}>How it works</h2>
          <div style={styles.detailList}>
            {sample.details.map((detail) => (
              <p key={detail} style={styles.detailItem}>
                {detail}
              </p>
            ))}
          </div>
          <h2 style={styles.panelTitle}>Code sample</h2>
          {sample.codeBlocks ? (
            <div style={styles.codeBlockList}>
              {sample.codeBlocks.map((block) => (
                <section key={block.title}>
                  <h3 style={styles.codeTitle}>{block.title}</h3>
                  <CodeBlock>{block.code}</CodeBlock>
                </section>
              ))}
            </div>
          ) : (
            <CodeBlock>{sample.code ?? ""}</CodeBlock>
          )}
        </section>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return STATE_SAMPLES.map((sample) => ({ slug: sample.slug }));
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
    maxWidth: 820,
    width: "100%",
  },
  eyebrow: {
    color: "#7c3aed",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 0,
    margin: "0 0 8px",
    textAlign: "center",
    textTransform: "uppercase",
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
    maxWidth: 680,
    textAlign: "center",
  },
  panel: {
    background: "#ffffff",
    border: "2px solid #7c3aed",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    padding: 20,
  },
  panelTitle: {
    color: "#7c3aed",
    fontSize: 22,
    fontWeight: 800,
    margin: "0 0 10px",
  },
  detailList: {
    display: "grid",
    gap: 10,
    marginBottom: 18,
  },
  detailItem: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: 0,
    padding: 12,
  },
  codeBlockList: {
    display: "grid",
    gap: 14,
  },
  codeTitle: {
    color: "#111827",
    fontSize: 15,
    fontWeight: 800,
    margin: "0 0 6px",
  },
};
