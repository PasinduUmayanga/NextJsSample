import { CardGrid, PageShell } from "../_components";

const APP_ROUTER_TYPES = [
  {
    href: "/features/data-fetching/app-router/server-side",
    title: "Server-side data fetching",
    description: "Use fetch, ORM calls, or direct database queries on the server.",
  },
  {
    href: "/features/data-fetching/app-router/client-side",
    title: "Client-side data fetching",
    description: "Load data in the browser with useEffect, SWR, or TanStack Query.",
  },
  {
    href: "/features/data-fetching/app-router/streaming",
    title: "Streaming",
    description: "Show loading UI while route segments or suspended components stream in.",
  },
];

export default function AppRouterDataFetchingPage() {
  return (
    <PageShell
      backHref="/features/data-fetching"
      backText="Back to data fetching"
      description="App Router data fetching is centered on server components, client components, and streaming UI boundaries."
      title="App Router Data Fetching"
    >
      <CardGrid cards={APP_ROUTER_TYPES} />
    </PageShell>
  );
}
