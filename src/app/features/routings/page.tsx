"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuSection = {
  group: string;
  color: string;
  links: { href: string; label: string }[];
};

const MENU: MenuSection[] = [
  {
    group: "Single Routing",
    color: "#2563eb",
    links: [
      { href: "/about", label: "1) About" },
      { href: "/contact", label: "2) Contact" },
    ],
  },
  {
    group: "Nested Routes",
    color: "#059669",
    links: [
      {
        href: "/dashboard",
        label: "3) Dashboard",
      },
      {
        href: "/dashboard/analytics",
        label: "4) Dashboard -> Analytics",
      },
    ],
  },
  {
    group: "Dynamic Routes",
    color: "#7c3aed",
    links: [
      { href: "/blog", label: "5) Blog main page" },
      { href: "/blog/1", label: "6) Blog post 1" },
      { href: "/blog/2", label: "7) Blog post 2" },
    ],
  },
  {
    group: "Catch-all Segments",
    color: "#dc2626",
    links: [
      {
        href: "/docs/getting-started/installation",
        label: "8) Required Catch-All ([...slug])",
      },
      {
        href: "/help",
        label: "9) Optional Catch-All ([[...slug]]) - none",
      },
      {
        href: "/help/contact/support",
        label: "10) Optional Catch-All ([[...slug]]) - with segments",
      },
    ],
  },
];

export default function RoutingsPage() {
  const pathname = usePathname();

  return (
    <main style={styles.page}>
      <section style={styles.panel}>
        <Link href="/" style={styles.backLink}>
          Back to home
        </Link>
        <h1 style={styles.title}>Next.js Routing Playground</h1>
        <p style={styles.description}>
          Choose a routing example to open the matching App Router page.
        </p>
        {MENU.map((section) => (
          <div key={section.group} style={styles.section}>
            <div style={{ ...styles.groupTitle, color: section.color }}>
              {section.group}
            </div>
            <ul style={styles.ul}>
              {section.links.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      style={{
                        ...styles.link,
                        borderColor: section.color,
                        color: active ? "#ffffff" : section.color,
                        background: active ? section.color : "#ffffff",
                        ...(active ? styles.linkActive : {}),
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "#f3f4f6",
    minHeight: "100vh",
    padding: 24,
  },
  panel: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    margin: "0 auto",
    maxWidth: 520,
    padding: 24,
  },
  backLink: {
    color: "#4b5563",
    display: "inline-flex",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 16,
    textDecoration: "none",
  },
  title: { margin: 0, fontSize: 28, fontWeight: 700, color: "#111827" },
  description: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "8px 0 0",
  },
  section: { marginTop: 20 },
  groupTitle: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  ul: { listStyle: "none", margin: "8px 0 0", padding: 0 },
  link: {
    alignItems: "center",
    border: "1px solid",
    borderRadius: 8,
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08)",
    display: "flex",
    fontSize: 14,
    fontWeight: 600,
    justifyContent: "center",
    marginTop: 8,
    minHeight: 40,
    padding: "10px 12px",
    textDecoration: "none",
    transition: "background 160ms ease, color 160ms ease, transform 160ms ease",
  },
  linkActive: {
    boxShadow: "0 8px 18px rgba(15, 23, 42, 0.16)",
    transform: "translateY(-1px)",
  },
};
