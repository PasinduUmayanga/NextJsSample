import Image from "next/image";
import Link from "next/link";
import { publicAssetPath } from "@/app/_lib/site-paths";

const HOME_ITEMS = [
  {
    href: "/features",
    title: "Features",
    description: "Explore examples for routing and component patterns.",
    color: "#2563eb",
  },
  {
    href: "/setting-up-nextjs",
    title: "Setting up Next.js",
    description: "Create a new app, install dependencies, and start dev mode.",
    color: "#059669",
  },
  {
    href: "/about",
    title: "About",
    description: "Learn what this sample app covers and how it is organized.",
    color: "#0891b2",
  },
];

export default function HomePage() {
  return (
    <main style={styles.page}>
      <Image
        src={publicAssetPath("/app-logo.png")}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        style={styles.backgroundLogo}
      />
      <section style={styles.content}>
        <h1 style={styles.title}>Next.js Learning Hub</h1>
        <p style={styles.description}>
          Next.js is a React framework for building fast web apps with routing,
          rendering, data loading, and production tooling built in.
        </p>
        <p style={styles.descriptionSmall}>
          Use this learning sample to explore setup, routing, and component
          patterns step by step.
        </p>
        <div style={styles.grid}>
          {HOME_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              style={{
                ...styles.card,
                borderColor: item.color,
                color: item.color,
              }}
            >
              <span style={styles.cardTitle}>{item.title}</span>
              <span style={styles.cardDescription}>{item.description}</span>
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
    minHeight: "calc(100svh - 106px)",
    overflow: "hidden",
    padding: "clamp(14px, 3vw, 24px)",
    position: "relative",
  },
  content: {
    maxWidth: 820,
    position: "relative",
    width: "100%",
    zIndex: 1,
  },
  backgroundLogo: {
    objectFit: "contain",
    objectPosition: "center",
    opacity: 0.08,
    pointerEvents: "none",
    transform: "scale(1.18)",
  },
  title: {
    color: "#111827",
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: 800,
    margin: 0,
    textAlign: "center",
  },
  description: {
    color: "#4b5563",
    fontSize: "clamp(16px, 2vw, 18px)",
    lineHeight: 1.6,
    margin: "12px auto 8px",
    maxWidth: 520,
    textAlign: "center",
  },
  descriptionSmall: {
    color: "#6b7280",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "0 auto clamp(16px, 3vw, 24px)",
    maxWidth: 560,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: "clamp(10px, 2vw, 16px)",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  },
  card: {
    background: "#ffffff",
    border: "2px solid",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    display: "flex",
    flexDirection: "column",
    minHeight: 124,
    padding: "clamp(14px, 2.5vw, 20px)",
    textDecoration: "none",
  },
  cardTitle: {
    fontSize: "clamp(20px, 3vw, 24px)",
    fontWeight: 800,
  },
  cardDescription: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    marginTop: 10,
  },
};
