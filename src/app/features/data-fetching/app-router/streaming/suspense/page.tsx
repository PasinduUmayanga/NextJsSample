import { InfoPanel, PageShell } from "../../../_components";

export default function SuspenseStreamingPage() {
  return (
    <PageShell
      description="React Suspense lets slower component sections stream behind a fallback."
      title="Streaming with Suspense"
    >
      <InfoPanel
        code={`import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading chart...</p>}>
      <SlowChart />
    </Suspense>
  );
}`}
      >
        Use Suspense when one part of a page can load later while the rest of
        the UI appears sooner.
      </InfoPanel>
    </PageShell>
  );
}
