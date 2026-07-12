"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BackButton from "@/app/_components/back-button";

type MenuSection = {
  group: string;
  color: string;
  description: string;
  links: { href: string; label: string; detail: string }[];
};

const MENU: MenuSection[] = [
  {
    group: "Single Routing",
    color: "#2563eb",
    description:
      "One folder creates one page URL, such as /features/routing-types/app-routing/about.",
    links: [
      {
        href: "/features/routing-types/app-routing/about",
        label: "About",
        detail: "src/app/features/routing-types/app-routing/about/page.tsx",
      },
      {
        href: "/features/routing-types/app-routing/contact",
        label: "Contact",
        detail: "src/app/features/routing-types/app-routing/contact/page.tsx",
      },
    ],
  },
  {
    group: "Nested Routes",
    color: "#059669",
    description:
      "Folders inside folders create deeper paths, such as /features/routing-types/app-routing/dashboard/analytics.",
    links: [
      {
        href: "/features/routing-types/app-routing/dashboard",
        label: "Dashboard",
        detail: "src/app/features/routing-types/app-routing/dashboard/page.tsx",
      },
      {
        href: "/features/routing-types/app-routing/dashboard/analytics",
        label: "Dashboard -> Analytics",
        detail:
          "src/app/features/routing-types/app-routing/dashboard/analytics/page.tsx",
      },
    ],
  },
  {
    group: "Dynamic Routes",
    color: "#7c3aed",
    description: "Bracket names like [slug] read changing URL values as params.",
    links: [
      {
        href: "/features/routing-types/app-routing/blog",
        label: "Blog main page",
        detail: "src/app/features/routing-types/app-routing/blog/page.tsx",
      },
      {
        href: "/features/routing-types/app-routing/blog/1",
        label: "Blog post 1",
        detail: "src/app/features/routing-types/app-routing/blog/[slug]/page.tsx",
      },
      {
        href: "/features/routing-types/app-routing/blog/2",
        label: "Blog post 2",
        detail: "src/app/features/routing-types/app-routing/blog/[slug]/page.tsx",
      },
    ],
  },
  {
    group: "Catch-all Segments",
    color: "#dc2626",
    description: "Catch-all routes match multiple path parts with [...slug] or [[...slug]].",
    links: [
      {
        href: "/features/routing-types/app-routing/docs/getting-started/installation",
        label: "Required Catch-All ([...slug])",
        detail: "src/app/features/routing-types/app-routing/docs/[...slug]/page.tsx",
      },
      {
        href: "/features/routing-types/app-routing/help",
        label: "Optional Catch-All ([[...slug]]) - none",
        detail: "src/app/features/routing-types/app-routing/help/[[...slug]]/page.tsx",
      },
      {
        href: "/features/routing-types/app-routing/help/contact/support",
        label: "Optional Catch-All ([[...slug]]) - with segments",
        detail: "src/app/features/routing-types/app-routing/help/[[...slug]]/page.tsx",
      },
    ],
  },
];

export default function RoutingsPage() {
  const pathname = usePathname();

  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <BackButton href="/features/routing-types" label="Back to routing types" />
        <h1 style={styles.title}>App Routing Examples</h1>
        <p style={styles.description}>
          Choose an App Router example and open the matching route.
        </p>
        <div style={styles.grid}>
          {MENU.map((section) => (
            <div
              key={section.group}
              style={{ ...styles.section, borderColor: section.color }}
            >
              <div style={{ ...styles.groupTitle, color: section.color }}>
                {section.group}
              </div>
              <p style={styles.groupDescription}>
                <span style={styles.groupDescriptionLabel}>Meaning: </span>
                {section.description}
              </p>
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
                        <span style={styles.linkLabel}>{item.label}</span>
                        <span
                          style={{
                            ...styles.linkDetail,
                            color: active ? "#e5e7eb" : "#4b5563",
                          }}
                        >
                          {item.detail}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
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
    maxWidth: 560,
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },
  section: {
    background: "#ffffff",
    border: "2px solid",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    padding: 18,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 800,
    textTransform: "uppercase",
  },
  groupDescription: {
    color: "#4b5563",
    fontSize: 14,
    lineHeight: 1.5,
    margin: "8px 0 14px",
  },
  groupDescriptionLabel: {
    color: "#111827",
    fontWeight: 800,
  },
  ul: { listStyle: "none", margin: "8px 0 0", padding: 0 },
  link: {
    alignItems: "flex-start",
    border: "1px solid",
    borderRadius: 8,
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08)",
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
    fontWeight: 600,
    gap: 4,
    marginTop: 8,
    minHeight: 58,
    padding: "12px 14px",
    textDecoration: "none",
    transition: "background 160ms ease, color 160ms ease, transform 160ms ease",
  },
  linkLabel: {
    fontSize: 15,
    fontWeight: 800,
  },
  linkDetail: {
    fontSize: 12,
    fontWeight: 600,
  },
  linkActive: {
    boxShadow: "0 8px 18px rgba(15, 23, 42, 0.16)",
    transform: "translateY(-1px)",
  },
};
