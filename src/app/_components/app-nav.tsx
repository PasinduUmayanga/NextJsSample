"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppNav() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const backHref =
    pathParts.length > 1 ? `/${pathParts.slice(0, -1).join("/")}` : "/";
  const breadcrumbs = [
    { href: "/", label: "Home" },
    ...pathParts.map((part, index) => ({
      href: `/${pathParts.slice(0, index + 1).join("/")}`,
      label: formatSegment(part),
    })),
  ];

  return (
    <header style={styles.header}>
      <nav aria-label="Primary navigation" style={styles.nav}>
        {pathname !== "/" ? (
          <Link
            href={backHref}
            aria-label="Back"
            title="Back"
            style={styles.iconButton}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </Link>
        ) : null}
        <Link href="/" aria-label="Home" title="Home" style={styles.iconButton}>
          <svg
            aria-hidden="true"
            fill="none"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
          >
            <path d="m3 11 9-8 9 8" />
            <path d="M5 10v10h14V10" />
            <path d="M9 20v-6h6v6" />
          </svg>
        </Link>
      </nav>
      <nav aria-label="Current navigation path" style={styles.subNav}>
        <ol style={styles.breadcrumbs}>
          {breadcrumbs.map((item, index) => {
            const isCurrent = index === breadcrumbs.length - 1;

            return (
              <li key={item.href} style={styles.breadcrumbItem}>
                {index > 0 ? <span style={styles.separator}>/</span> : null}
                {isCurrent ? (
                  <span aria-current="page" style={styles.currentCrumb}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} style={styles.crumbLink}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </header>
  );
}

function formatSegment(segment: string) {
  return decodeURIComponent(segment)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    boxShadow: "0 6px 16px rgba(15, 23, 42, 0.06)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  nav: {
    alignItems: "center",
    display: "flex",
    gap: 8,
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: 1100,
    padding: "10px 24px",
    width: "100%",
  },
  iconButton: {
    alignItems: "center",
    background: "#111827",
    border: "1px solid #111827",
    borderRadius: 8,
    color: "#ffffff",
    display: "inline-flex",
    height: 40,
    justifyContent: "center",
    textDecoration: "none",
    width: 40,
  },
  subNav: {
    borderTop: "1px solid #f3f4f6",
  },
  breadcrumbs: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    listStyle: "none",
    margin: "0 auto",
    maxWidth: 1100,
    padding: "8px 24px 10px",
    width: "100%",
  },
  breadcrumbItem: {
    alignItems: "center",
    display: "inline-flex",
    gap: 6,
  },
  crumbLink: {
    color: "#2563eb",
    fontSize: 13,
    fontWeight: 800,
    textDecoration: "none",
  },
  currentCrumb: {
    color: "#111827",
    fontSize: 13,
    fontWeight: 800,
  },
  separator: {
    color: "#9ca3af",
    fontSize: 13,
    fontWeight: 800,
  },
};
