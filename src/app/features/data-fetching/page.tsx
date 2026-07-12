import { CardGrid, PageShell } from "./_components";

const DATA_FETCHING_TYPES = [
  {
    href: "/features/data-fetching/app-router",
    title: "App Router",
    description:
      "Modern data fetching with server components, client fetching, and streaming.",
  },
  {
    href: "/features/data-fetching/pages-router",
    title: "Pages Router",
    description:
      "Classic data fetching with SSG, SSR, ISR, and client-side rendering.",
  },
];

export default function DataFetchingPage() {
  return (
    <PageShell
      backHref="/features"
      backText="Back to features"
      description="Choose the router model first, then explore its data-fetching categories and concrete techniques."
      title="Data Fetching"
    >
      <CardGrid cards={DATA_FETCHING_TYPES} />
    </PageShell>
  );
}
