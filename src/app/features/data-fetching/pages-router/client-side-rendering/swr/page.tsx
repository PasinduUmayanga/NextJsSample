import { InfoPanel, PageShell } from "../../../_components";

export default function PagesRouterCsrSwrPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/pages-router/client-side-rendering"
      backText="Back to CSR"
      description="SWR is commonly used in Pages Router apps for client-side fetching."
      title="CSR with SWR"
    >
      <InfoPanel
        code={`import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, isLoading } = useSWR("/api/data", fetcher);

  if (isLoading) return <p>Loading...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`}
      >
        Use SWR when browser data should be cached and revalidated.
      </InfoPanel>
    </PageShell>
  );
}
