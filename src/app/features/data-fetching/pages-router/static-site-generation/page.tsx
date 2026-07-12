import { CardGrid, PageShell } from "../../_components";

export default function StaticSiteGenerationPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/pages-router"
      backText="Back to Pages Router data fetching"
      description="SSG builds pages ahead of time for fast static delivery."
      title="Static Site Generation - SSG"
    >
      <CardGrid
        cards={[
          {
            href: "/features/data-fetching/pages-router/static-site-generation/get-static-props",
            title: "getStaticProps()",
            description: "Fetch data at build time for a static page.",
          },
        ]}
      />
    </PageShell>
  );
}
