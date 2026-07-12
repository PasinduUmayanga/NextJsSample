import BackButton from "@/app/_components/back-button";
import CodeBlock from "@/app/_components/code-block";
import SharedUiCard from "./shared-ui-card";

const SAMPLE_CODE = `type InfoCardProps = {
  title: string;
  description: string;
};

// Shared UI Component: reusable and controlled by props.
export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}`;

export default function SharedUiComponentsPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <BackButton href="/features/component-types" label="Back to component types" />
        <h1 style={styles.title}>Shared UI Components</h1>
        <p style={styles.description}>
          Reusable presentational components controlled by props. They keep
          pages smaller and make repeated UI easier to maintain.
        </p>
        <InfoBox label="Use when">
          Building cards, badges, buttons, headers, layout blocks, or repeated
          presentation patterns.
        </InfoBox>
        <InfoBox label="File">
          src/app/features/component-types/shared-ui-components/shared-ui-card.tsx
        </InfoBox>
        <SharedUiCard
          title="Reusable Feature Card"
          description="This card can be reused anywhere by passing a title and description."
        />
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
    border: "2px solid #059669",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    maxWidth: 760,
    padding: 24,
    width: "100%",
  },
  title: {
    color: "#059669",
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
