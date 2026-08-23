export type NavigationSample = {
  code: string;
  description: string;
  details: string[];
  slug: string;
  title: string;
};

export const NAVIGATION_SAMPLES: NavigationSample[] = [
  {
    slug: "link",
    title: "<Link>",
    description:
      "Use Link for normal navigation between pages inside a Next.js app.",
    details: [
      "Link is the default choice when the user clicks visible navigation, such as menus, cards, and page links.",
      "It renders an anchor element, supports accessibility naturally, and lets Next.js handle fast client-side transitions.",
      "Use it instead of a plain anchor for internal routes so the app can keep navigation smooth.",
    ],
    code: `import Link from "next/link";

export default function Menu() {
  return <Link href="/features">Open features</Link>;
}`,
  },
  {
    slug: "use-router",
    title: "useRouter()",
    description:
      "Use useRouter when navigation should happen from client-side logic.",
    details: [
      "useRouter is available only in Client Components, so the file needs the use client directive.",
      "It is useful after form submission, button clicks, wizard steps, or other event-driven flows.",
      "Common methods include push for adding a history entry, replace for replacing the current entry, and refresh for reloading route data.",
    ],
    code: `"use client";

import { useRouter } from "next/navigation";

export default function SaveButton() {
  const router = useRouter();

  return <button onClick={() => router.push("/features")}>Save</button>;
}`,
  },
  {
    slug: "use-pathname",
    title: "usePathname()",
    description:
      "Use usePathname to read the current path in Client Components.",
    details: [
      "usePathname returns the current URL path without query string values.",
      "It is commonly used for active navigation styles, breadcrumbs, page labels, and route-aware UI.",
      "Because it reads browser navigation state, it belongs in Client Components.",
    ],
    code: `"use client";

import { usePathname } from "next/navigation";

export default function CurrentPath() {
  const pathname = usePathname();

  return <p>Current path: {pathname}</p>;
}`,
  },
  {
    slug: "use-search-params",
    title: "useSearchParams()",
    description:
      "Use useSearchParams to read query string values in Client Components.",
    details: [
      "useSearchParams reads values after the question mark in a URL, such as ?q=nextjs.",
      "It is useful for filters, tabs, search terms, sorting, and other URL-controlled UI state.",
      "For server-rendered pages, use the page searchParams prop instead.",
    ],
    code: `"use client";

import { useSearchParams } from "next/navigation";

export default function SearchView() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return <p>Search query: {query}</p>;
}`,
  },
  {
    slug: "redirects",
    title: "Redirects",
    description:
      "Use redirect when a route should immediately move to another route.",
    details: [
      "redirect is useful for protected pages, old route handling, missing data, and post-action navigation.",
      "It can be used in Server Components, Route Handlers, and Server Actions.",
      "When redirect runs, rendering stops and Next.js sends the user to the target route.",
    ],
    code: `import { redirect } from "next/navigation";

export default function ProtectedPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return <h1>Protected content</h1>;
}`,
  },
  {
    slug: "route-parameters",
    title: "Route parameters",
    description:
      "Use route parameters to read values from dynamic route segments.",
    details: [
      "Dynamic route folders use square brackets, such as [slug] or [userId].",
      "The value from the URL is passed into the page through the params prop.",
      "Route parameters are best for values that identify the page itself, such as product ids, user ids, or blog slugs.",
    ],
    code: `type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return <h1>Post: {slug}</h1>;
}`,
  },
  {
    slug: "query-parameters",
    title: "Query parameters",
    description:
      "Use query parameters for optional URL state such as filters and search.",
    details: [
      "Query parameters live after the question mark in a URL, such as ?category=books.",
      "They are a good fit for state that changes how a page is viewed without changing the main route.",
      "In Server Components, read them from the page searchParams prop.",
    ],
    code: `type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category = "all" } = await searchParams;

  return <h1>Category: {category}</h1>;
}`,
  },
  {
    slug: "prefetching",
    title: "Prefetching",
    description:
      "Use prefetching to prepare routes before the user opens them.",
    details: [
      "Next.js can prefetch routes linked with Link so navigation feels faster.",
      "Prefetching is most useful for likely next pages, such as dashboard links, product details, or next-step flows.",
      "You can disable or control prefetching with the Link prefetch prop when needed.",
    ],
    code: `import Link from "next/link";

export default function ProductLink() {
  return (
    <Link href="/features/data-fetching" prefetch>
      Open data fetching
    </Link>
  );
}`,
  },
  {
    slug: "client-side-navigation",
    title: "Client-side navigation",
    description:
      "Client-side navigation changes routes without a full page reload.",
    details: [
      "Client-side navigation keeps shared layout state alive and makes route changes feel faster.",
      "Link handles most client-side navigation automatically for internal routes.",
      "useRouter is useful when the route change depends on browser events or component state.",
    ],
    code: `"use client";

import { useRouter } from "next/navigation";

export default function NextStepButton() {
  const router = useRouter();

  function goNext() {
    router.replace("/features/navigation");
  }

  return <button onClick={goNext}>Go to next step</button>;
}`,
  },
];
