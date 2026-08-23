import { CardGrid, PageShell } from "../../_components";

const CLIENT_SIDE_TYPES = [
  {
    href: "/features/data-fetching/app-router/client-side/use-effect",
    title: "useEffect",
    description: "Fetch after the component loads in the browser.",
  },
  {
    href: "/features/data-fetching/app-router/client-side/swr",
    title: "SWR",
    description: "Use a client data library for cache and revalidation.",
  },
  {
    href: "/features/data-fetching/app-router/client-side/tanstack-query",
    title: "TanStack Query",
    description: "Manage server state, cache, retries, and mutations.",
  },
];

export default function AppRouterClientSidePage() {
  return (
    <PageShell
      description="Client-side fetching runs in client components after JavaScript loads."
      title="Client-side Data Fetching"
    >
      <CardGrid cards={CLIENT_SIDE_TYPES} />
    </PageShell>
  );
}
