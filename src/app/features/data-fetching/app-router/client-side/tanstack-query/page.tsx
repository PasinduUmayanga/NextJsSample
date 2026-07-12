import { InfoPanel, PageShell } from "../../../_components";

export default function AppRouterTanStackQueryPage() {
  return (
    <PageShell
      description="TanStack Query manages browser server-state, caching, retries, and mutations."
      title="Client Fetching with TanStack Query"
    >
      <InfoPanel
        code={`"use client";

import { useQuery } from "@tanstack/react-query";

export default function Profile() {
  const profile = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetch("/api/profile").then((res) => res.json()),
  });

  if (profile.isLoading) return <p>Loading...</p>;

  return <pre>{JSON.stringify(profile.data, null, 2)}</pre>;
}`}
      >
        Use this for larger interactive apps with complex cache and mutation
        needs.
      </InfoPanel>
    </PageShell>
  );
}
