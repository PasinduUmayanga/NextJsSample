import { CardGrid, PageShell } from "../../_components";

export default function IncrementalStaticRegenerationPage() {
  return (
    <PageShell
      description="ISR keeps static pages fast while allowing background regeneration."
      title="Incremental Static Regeneration - ISR"
    >
      <CardGrid
        cards={[
          {
            href: "/features/data-fetching/pages-router/incremental-static-regeneration/get-static-props-revalidate",
            title: "getStaticProps() with revalidate",
            description: "Regenerate a static page after a chosen interval.",
          },
        ]}
      />
    </PageShell>
  );
}
