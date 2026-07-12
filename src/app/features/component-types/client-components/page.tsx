import Link from "next/link";
import CodeBlock from "@/app/_components/code-block";
import ClientComponentSample from "./client-component-sample";

const SAMPLE_CODE = `"use client";

import { useState } from "react";

// Client Component: state and click handlers run in the browser.
export default function CounterButton() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Clicked {count}</button>;
}`;

export default function ClientComponentsPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <Link href="/features/component-types" style={styles.backLink}>
          Back to component types
        </Link>
        <h1 style={styles.title}>Client Components</h1>
        <p style={styles.description}>
          Run in the browser. Use them when a component needs state, lifecycle
          hooks, event handlers, or browser-only APIs.
        </p>
        <InfoBox label="Use when">
          Building counters, forms, tabs, modals, menus, or any interactive UI.
        </InfoBox>
        <InfoBox label="File">
          src/app/features/component-types/client-components/client-component-sample.tsx
        </InfoBox>
        <ClientComponentSample />
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
    border: "2px solid #dc2626",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    maxWidth: 760,
    padding: 24,
    width: "100%",
  },
  backLink: {
    color: "#4b5563",
    display: "inline-flex",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 16,
    textDecoration: "none",
  },
  title: {
    color: "#dc2626",
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
