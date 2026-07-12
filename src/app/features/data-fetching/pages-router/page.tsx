import { CardGrid, PageShell } from "../_components";

const PAGES_ROUTER_TYPES = [
  {
    href: "/features/data-fetching/pages-router/static-site-generation",
    title: "Static Site Generation - SSG",
    description: "Generate HTML at build time with getStaticProps.",
  },
  {
    href: "/features/data-fetching/pages-router/server-side-rendering",
    title: "Server-Side Rendering - SSR",
    description: "Generate HTML on each request with getServerSideProps.",
  },
  {
    href: "/features/data-fetching/pages-router/incremental-static-regeneration",
    title: "Incremental Static Regeneration - ISR",
    description: "Regenerate static pages after deployment with revalidate.",
  },
  {
    href: "/features/data-fetching/pages-router/client-side-rendering",
    title: "Client-Side Rendering - CSR",
    description: "Fetch data in the browser with useEffect, SWR, or TanStack Query.",
  },
];

export default function PagesRouterDataFetchingPage() {
  return (
    <PageShell
      description="Pages Router data fetching uses special page exports for pre-rendering and request-time rendering."
      title="Pages Router Data Fetching"
    >
      <CardGrid cards={PAGES_ROUTER_TYPES} />
    </PageShell>
  );
}
