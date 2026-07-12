import { CardGrid, PageShell } from "../../_components";

export default function ServerSideRenderingPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/pages-router"
      backText="Back to Pages Router data fetching"
      description="SSR renders each request on the server."
      title="Server-Side Rendering - SSR"
    >
      <CardGrid
        cards={[
          {
            href: "/features/data-fetching/pages-router/server-side-rendering/get-server-side-props",
            title: "getServerSideProps()",
            description: "Fetch request-specific data on every request.",
          },
        ]}
      />
    </PageShell>
  );
}
