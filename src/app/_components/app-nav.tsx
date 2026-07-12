"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const APP_COLORS = {
  text: "#374151",
  white: "#ffffff",
};

const BLUE_FADE_COLORS = [
  "#1e40af",
  "#1d4ed8",
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
  "#93c5fd",
  "#bfdbfe",
  "#dbeafe",
];

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
            const background =
              BLUE_FADE_COLORS[index % BLUE_FADE_COLORS.length];
            const isLight = index >= 5;
            const crumbStyle = {
              ...styles.crumb,
              ...(index === 0 ? styles.firstCrumb : styles.middleCrumb),
              ...(isCurrent ? styles.currentCrumb : {}),
              background,
              color: isLight ? APP_COLORS.text : APP_COLORS.white,
            };

            return (
              <li
                key={item.href}
                style={{
                  ...styles.breadcrumbItem,
                  marginLeft: index === 0 ? 0 : -18,
                  zIndex: breadcrumbs.length - index,
                }}
              >
                {isCurrent ? (
                  <span aria-current="page" style={crumbStyle}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} style={crumbStyle}>
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
    background:
      "repeating-linear-gradient(135deg, #d1d5db 0, #d1d5db 1px, #e5e7eb 1px, #e5e7eb 18px)",
  },
  breadcrumbs: {
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    listStyle: "none",
    margin: "0 auto",
    maxWidth: 1100,
    overflowX: "auto",
    padding: "8px 24px 9px",
    width: "100%",
  },
  breadcrumbItem: {
    alignItems: "center",
    display: "inline-flex",
    flex: "0 0 auto",
  },
  crumb: {
    alignItems: "center",
    border: "1px solid rgba(17, 24, 39, 0.14)",
    boxShadow: "0 3px 8px rgba(15, 23, 42, 0.12)",
    display: "inline-flex",
    fontSize: 14,
    fontWeight: 800,
    height: 38,
    justifyContent: "center",
    minWidth: 112,
    overflow: "hidden",
    padding: "0 28px 0 34px",
    textDecoration: "none",
    textOverflow: "ellipsis",
    textShadow: "0 1px 1px rgba(0, 0, 0, 0.18)",
    whiteSpace: "nowrap",
  },
  firstCrumb: {
    clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
    paddingLeft: 20,
  },
  middleCrumb: {
    clipPath:
      "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%)",
  },
  currentCrumb: {
    outline: "2px solid rgba(255, 255, 255, 0.85)",
    outlineOffset: -4,
  },
};
