import { CardGrid, PageShell } from "../../_components";

const STREAMING_TYPES = [
  {
    href: "/features/data-fetching/app-router/streaming/loading-tsx",
    title: "loading.tsx",
    description: "Create instant route-level loading UI.",
  },
  {
    href: "/features/data-fetching/app-router/streaming/suspense",
    title: "React Suspense",
    description: "Stream slower component sections behind a fallback.",
  },
];

export default function AppRouterStreamingPage() {
  return (
    <PageShell
      description="Streaming lets users see useful UI while slower data or route segments finish."
      title="Streaming"
    >
      <CardGrid cards={STREAMING_TYPES} />
    </PageShell>
  );
}
