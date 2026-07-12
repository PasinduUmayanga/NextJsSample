"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./app-nav.module.css";

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

type BreadcrumbStyle = React.CSSProperties & {
  "--breadcrumb-bg": string;
  "--breadcrumb-color": string;
};

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
    <header className={styles.header}>
      <nav aria-label="Primary navigation" className={styles.nav}>
        {pathname !== "/" ? (
          <Link
            href={backHref}
            aria-label="Back"
            title="Back"
            className={styles.iconButton}
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
        <Link
          href="/"
          aria-label="Home"
          title="Home"
          className={styles.iconButton}
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
            <path d="m3 11 9-8 9 8" />
            <path d="M5 10v10h14V10" />
            <path d="M9 20v-6h6v6" />
          </svg>
        </Link>
        <Link href="/" className={styles.brand}>
          Next.js Learning Hub
        </Link>
      </nav>
      <nav aria-label="Current navigation path" className={styles.subNav}>
        <ol className={styles.breadcrumbs}>
          {breadcrumbs.map((item, index) => {
            const isCurrent = index === breadcrumbs.length - 1;
            const background =
              BLUE_FADE_COLORS[index % BLUE_FADE_COLORS.length];
            const isLight = index >= 5;
            const crumbClassName = [
              styles.crumb,
              index === 0 ? styles.firstCrumb : styles.middleCrumb,
              isCurrent ? styles.currentCrumb : "",
            ]
              .filter(Boolean)
              .join(" ");
            const crumbStyle: BreadcrumbStyle = {
              "--breadcrumb-bg": background,
              "--breadcrumb-color": isLight
                ? APP_COLORS.text
                : APP_COLORS.white,
            };

            return (
              <li
                key={item.href}
                className={styles.breadcrumbItem}
                style={{ zIndex: breadcrumbs.length - index }}
              >
                {isCurrent ? (
                  <span
                    aria-current="page"
                    className={crumbClassName}
                    style={crumbStyle}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={crumbClassName}
                    style={crumbStyle}
                  >
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
