import { CardGrid, PageShell } from "../../_components";

const SERVER_SIDE_TYPES = [
  {
    href: "/features/data-fetching/app-router/server-side/fetch",
    title: "fetch()",
    description: "Use the built-in fetch API from a server component.",
  },
  {
    href: "/features/data-fetching/app-router/server-side/orm-database",
    title: "ORM or database queries",
    description: "Query a database or ORM directly from server-only code.",
  },
];

export default function AppRouterServerSidePage() {
  return (
    <PageShell
      backHref="/features/data-fetching/app-router"
      backText="Back to App Router data fetching"
      description="Server-side fetching runs before the page is sent to the browser."
      title="Server-side Data Fetching"
    >
      <CardGrid cards={SERVER_SIDE_TYPES} />
    </PageShell>
  );
}
