"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuSection = {
  group: string;
  links: { href: string; label: string }[];
};

const MENU: MenuSection[] = [
  {
    group: "Single Routing",
    links: [
      { href: "/about", label: "1) About" },
      { href: "/contact", label: "2) Contact" },
    ],
  },
  {
    group: "Nested Routes",
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
    links: [
      { href: "/blog", label: "5) Blog main page" },
      { href: "/blog/1", label: "6) Blog post 1" },
      { href: "/blog/2", label: "7) Blog post 2" },
    ],
  },
  {
    group: "Catch-all Segments",
    links: [
      {
        href: "/routing/catch-all-required/a/b/c",
        label: "5) Required Catch-All ([...slug])",
      },
      {
        href: "/routing/catch-all-optional",
        label: "6) Optional Catch-All ([[...slug]]) – none",
      },
      {
        href: "/routing/catch-all-optional/a/b",
        label: "6) Optional Catch-All ([[...slug]]) – with segments",
      },
    ],
  },
];

export default function LearnMenu() {
  const pathname = usePathname();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Next.js Routing Playground</h2>
      {MENU.map((section) => (
        <div key={section.group} style={styles.section}>
          <div style={styles.groupTitle}>{section.group}</div>
          <ul style={styles.ul}>
            {section.links.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      ...styles.link,
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
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    borderRight: "1px solid #e5e7eb",
    padding: "1rem",
    minWidth: 240,
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  },
  title: { margin: 0, fontSize: 18, fontWeight: 600 },
  section: { marginTop: 16 },
  groupTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: "#6b7280",
    textTransform: "uppercase",
  },
  ul: { listStyle: "none", margin: "8px 0 0", padding: 0 },
  link: {
    display: "block",
    padding: "6px 8px",
    borderRadius: 6,
    textDecoration: "none",
    color: "#111827",
  },
  linkActive: { background: "#f3f4f6", fontWeight: 600 },
};
