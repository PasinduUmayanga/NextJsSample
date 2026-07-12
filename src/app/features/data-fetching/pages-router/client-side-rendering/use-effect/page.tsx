import { InfoPanel, PageShell } from "../../../_components";

export default function PagesRouterCsrUseEffectPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/pages-router/client-side-rendering"
      backText="Back to CSR"
      description="useEffect fetches data in the browser after the Pages Router page loads."
      title="CSR with useEffect"
    >
      <InfoPanel
        code={`import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`}
      >
        Use this for simple data that does not need to be pre-rendered.
      </InfoPanel>
    </PageShell>
  );
}
