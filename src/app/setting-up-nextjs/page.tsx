import Link from "next/link";

const SETUP_STEPS = [
  {
    title: "Install Node.js",
    description:
      "Use Node.js 20 LTS or newer. It includes npm, which installs and runs the project scripts.",
    command: "node -v\nnpm -v",
  },
  {
    title: "Create a Next.js app",
    description:
      "Use create-next-app to scaffold a new project with the recommended defaults.",
    command: "npx create-next-app@latest my-next-app",
  },
  {
    title: "Open the project",
    description: "Move into the generated project folder before running commands.",
    command: "cd my-next-app",
  },
  {
    title: "Start development",
    description:
      "Run the development server and open the local URL printed in the terminal.",
    command: "npm run dev",
  },
  {
    title: "Build for production",
    description:
      "Create an optimized production build before deploying or testing production mode.",
    command: "npm run build\nnpm run start",
  },
];

export default function SettingUpNextJsPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <Link href="/" style={styles.backLink}>
          Back to home
        </Link>
        <h1 style={styles.title}>Setting up Next.js</h1>
        <p style={styles.description}>
          Follow these steps to create, run, and build a basic Next.js project.
        </p>
        <div style={styles.steps}>
          {SETUP_STEPS.map((step) => (
            <section key={step.title} style={styles.step}>
              <h2 style={styles.stepTitle}>{step.title}</h2>
              <p style={styles.stepDescription}>{step.description}</p>
              <pre style={styles.codeBlock}>
                <code>{step.command}</code>
              </pre>
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
    maxWidth: 760,
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
  steps: {
    display: "grid",
    gap: 14,
  },
  step: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    padding: 18,
  },
  stepTitle: {
    color: "#059669",
    fontSize: 20,
    fontWeight: 800,
    margin: 0,
  },
  stepDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "8px 0 12px",
  },
  codeBlock: {
    background: "#111827",
    borderRadius: 8,
    color: "#f9fafb",
    fontSize: 14,
    lineHeight: 1.5,
    margin: 0,
    overflowX: "auto",
    padding: 14,
    whiteSpace: "pre",
  },
};
