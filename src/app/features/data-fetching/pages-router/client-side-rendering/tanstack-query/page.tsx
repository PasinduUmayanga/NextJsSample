import { InfoPanel, PageShell } from "../../../_components";

export default function PagesRouterCsrTanStackQueryPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/pages-router/client-side-rendering"
      backText="Back to CSR"
      description="TanStack Query can manage client-side server-state in Pages Router apps."
      title="CSR with TanStack Query"
    >
      <InfoPanel
        code={`import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const result = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch("/api/data").then((res) => res.json()),
  });

  return <pre>{JSON.stringify(result.data, null, 2)}</pre>;
}`}
      >
        Use this for richer client-side data workflows with cache, retry, and
        mutation needs.
      </InfoPanel>
    </PageShell>
  );
}
