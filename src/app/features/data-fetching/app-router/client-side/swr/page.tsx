import { InfoPanel, PageShell } from "../../../_components";

export default function AppRouterSwrPage() {
  return (
    <PageShell
      description="SWR is a client data-fetching library for caching and revalidation."
      title="Client Fetching with SWR"
    >
      <InfoPanel
        code={`"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data, error, isLoading } = useSWR("/api/profile", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load.</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`}
      >
        Use SWR for small client-side data flows with automatic cache updates.
      </InfoPanel>
    </PageShell>
  );
}
