import Link from "next/link";
import CodeBlock from "@/app/_components/code-block";

type Card = {
  description: string;
  href: string;
  title: string;
};

export function PageShell({
  backHref,
  backText,
  children,
  description,
  title,
}: Readonly<{
  backHref: string;
  backText: string;
  children: React.ReactNode;
  description: string;
  title: string;
}>) {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.description}>{description}</p>
        {children}
      </section>
    </main>
  );
}

export function CardGrid({ cards }: Readonly<{ cards: Card[] }>) {
  return (
    <div style={styles.grid}>
      {cards.map((card) => (
        <Link href={card.href} key={card.href} style={styles.card}>
          <span style={styles.cardTitle}>{card.title}</span>
          <span style={styles.cardDescription}>{card.description}</span>
        </Link>
      ))}
    </div>
  );
}

export function InfoPanel({
  children,
  code,
}: Readonly<{ children: React.ReactNode; code: string }>) {
  return (
    <section style={styles.panel}>
      <p style={styles.panelText}>{children}</p>
      <CodeBlock>{code}</CodeBlock>
    </section>
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
    maxWidth: 680,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
  card: {
    background: "#ffffff",
    border: "2px solid #dc2626",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    color: "#dc2626",
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
  panel: {
    background: "#ffffff",
    border: "2px solid #dc2626",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    padding: 20,
  },
  panelText: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 1.6,
    margin: "0 0 14px",
  },
};
