import BackButton from "@/app/_components/back-button";

const ABOUT_SECTIONS = [
  {
    title: "Purpose",
    description:
      "This project is a small Next.js learning hub for practicing App Router routes, component types, data fetching, and setup steps.",
  },
  {
    title: "Learning style",
    description:
      "Each section uses short pages, focused examples, and visible navigation so you can move through one concept at a time.",
  },
  {
    title: "Project shape",
    description:
      "Routes live under src/app, reusable UI lives in shared component folders, and examples stay close to the concept they explain.",
  },
];

export default function AboutPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <BackButton href="/" label="Back to home" />
        <h1 style={styles.title}>About This Next.js Learning App</h1>
        <p style={styles.description}>
          This app is built as a hands-on reference for learning modern Next.js
          with the App Router. It keeps examples small, clear, and easy to
          compare.
        </p>
        <div style={styles.grid}>
          {ABOUT_SECTIONS.map((section) => (
            <section key={section.title} style={styles.card}>
              <h2 style={styles.cardTitle}>{section.title}</h2>
              <p style={styles.cardDescription}>{section.description}</p>
            </section>
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
    maxWidth: 820,
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
    maxWidth: 640,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  },
  card: {
    background: "#ffffff",
    border: "2px solid #0891b2",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    minHeight: 160,
    padding: 20,
  },
  cardTitle: {
    color: "#0891b2",
    fontSize: 22,
    fontWeight: 800,
    margin: 0,
  },
  cardDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "10px 0 0",
  },
};
