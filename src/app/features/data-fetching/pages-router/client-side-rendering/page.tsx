import { CardGrid, PageShell } from "../../_components";

const CSR_TYPES = [
  {
    href: "/features/data-fetching/pages-router/client-side-rendering/use-effect",
    title: "useEffect",
    description: "Fetch data in the browser after initial render.",
  },
  {
    href: "/features/data-fetching/pages-router/client-side-rendering/swr",
    title: "SWR",
    description: "Fetch and cache browser data with stale-while-revalidate behavior.",
  },
  {
    href: "/features/data-fetching/pages-router/client-side-rendering/tanstack-query",
    title: "TanStack Query",
    description: "Manage browser server-state with caching and mutations.",
  },
];

export default function ClientSideRenderingPage() {
  return (
    <PageShell
      description="CSR fetches data after the page loads in the browser."
      title="Client-Side Rendering - CSR"
    >
      <CardGrid cards={CSR_TYPES} />
    </PageShell>
  );
}
