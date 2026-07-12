import { InfoPanel, PageShell } from "../../../_components";

export default function LoadingTsxPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/app-router/streaming"
      backText="Back to streaming"
      description="A loading.tsx file creates instant loading UI for a route segment."
      title="Streaming with loading.tsx"
    >
      <InfoPanel
        code={`// app/dashboard/loading.tsx
export default function Loading() {
  return <p>Loading dashboard...</p>;
}`}
      >
        Place loading.tsx next to a page or layout to show fallback UI during
        navigation.
      </InfoPanel>
    </PageShell>
  );
}
