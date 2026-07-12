import CodeBlock from "@/app/_components/code-block";

const SETUP_STEPS = [
  {
    title: "Install Node.js and npm",
    description:
      "Install Node.js 20 LTS or newer. npm is included with Node.js and is used to install packages and run scripts.",
    command: "node -v\nnpm -v",
  },
  {
    title: "Create a Next.js app",
    description:
      "Use create-next-app to generate a new project. The CLI asks which options you want, such as TypeScript and App Router.",
    command: "npx create-next-app@latest my-next-app",
  },
  {
    title: "Open the project",
    description:
      "Move into the generated project folder. Run the rest of the commands from inside this folder.",
    command: "cd my-next-app",
  },
  {
    title: "Install dependencies",
    description:
      "For a newly created app this is usually already done. For a cloned project, install dependencies from package-lock.json.",
    command: "npm install\n# or, for clean CI-style installs:\nnpm ci",
  },
  {
    title: "Start development",
    description:
      "Run the local development server. Open the URL printed in the terminal, usually http://localhost:3000.",
    command: "npm run dev",
  },
  {
    title: "Edit the app",
    description:
      "Update files inside the app folder. With the App Router, folders become routes and page.tsx files render pages.",
    command: "src/app/page.tsx\nsrc/app/layout.tsx",
  },
  {
    title: "Build for production",
    description:
      "Create an optimized production build. Then run the built app locally to test production behavior.",
    command: "npm run build\nnpm run start",
  },
];

const CREATE_APP_OPTIONS = [
  {
    label: "Project name",
    value: "my-next-app",
    description: "The folder name for the new project.",
  },
  {
    label: "TypeScript",
    value: "Yes",
    description: "Adds type checking and safer component props.",
  },
  {
    label: "ESLint",
    value: "Yes",
    description: "Adds linting rules for cleaner code.",
  },
  {
    label: "Tailwind CSS",
    value: "Optional",
    description: "Choose Yes if you want utility-first styling.",
  },
  {
    label: "src directory",
    value: "Yes",
    description: "Keeps application code organized under src/app.",
  },
  {
    label: "App Router",
    value: "Yes",
    description: "Uses the modern Next.js routing system.",
  },
  {
    label: "Turbopack",
    value: "Optional",
    description: "Use only if your local setup supports it cleanly.",
  },
  {
    label: "Import alias",
    value: "@/*",
    description: "Makes imports shorter, such as @/app/_components.",
  },
];

export default function SettingUpNextJsPage() {
  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <h1 style={styles.title}>Setting up Next.js</h1>
        <p style={styles.description}>
          Follow these ordered installation steps to create, run, edit, and
          build a basic Next.js project.
        </p>
        <section style={styles.process}>
          <h2 style={styles.processTitle}>Create new app process</h2>
          <p style={styles.processDescription}>
            Run the create command, answer the prompts, then open the generated
            project folder.
          </p>
          <CodeBlock>npx create-next-app@latest my-next-app</CodeBlock>
          <div style={styles.optionGrid}>
            {CREATE_APP_OPTIONS.map((option) => (
              <div key={option.label} style={styles.option}>
                <div style={styles.optionHeader}>
                  <span style={styles.optionLabel}>{option.label}</span>
                  <span style={styles.optionValue}>{option.value}</span>
                </div>
                <p style={styles.optionDescription}>{option.description}</p>
              </div>
            ))}
          </div>
        </section>
        <div style={styles.steps}>
          {SETUP_STEPS.map((step, index) => (
            <section key={step.title} style={styles.step}>
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber}>{index + 1}</span>
                <h2 style={styles.stepTitle}>{step.title}</h2>
              </div>
              <p style={styles.stepDescription}>{step.description}</p>
              <CodeBlock>{step.command}</CodeBlock>
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
  process: {
    background: "#ffffff",
    border: "2px solid #059669",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    marginBottom: 18,
    padding: 18,
  },
  processTitle: {
    color: "#059669",
    fontSize: 24,
    fontWeight: 800,
    margin: 0,
  },
  processDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "8px 0 12px",
  },
  optionGrid: {
    display: "grid",
    gap: 10,
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginTop: 14,
  },
  option: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 12,
  },
  optionHeader: {
    alignItems: "center",
    display: "flex",
    gap: 8,
    justifyContent: "space-between",
  },
  optionLabel: {
    color: "#111827",
    fontSize: 13,
    fontWeight: 800,
  },
  optionValue: {
    color: "#059669",
    fontSize: 13,
    fontWeight: 800,
  },
  optionDescription: {
    color: "#4b5563",
    fontSize: 13,
    lineHeight: 1.5,
    margin: "6px 0 0",
  },
  step: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    padding: 18,
  },
  stepHeader: {
    alignItems: "center",
    display: "flex",
    gap: 10,
  },
  stepNumber: {
    alignItems: "center",
    background: "#059669",
    borderRadius: 8,
    color: "#ffffff",
    display: "inline-flex",
    fontSize: 14,
    fontWeight: 800,
    height: 30,
    justifyContent: "center",
    minWidth: 30,
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
};
