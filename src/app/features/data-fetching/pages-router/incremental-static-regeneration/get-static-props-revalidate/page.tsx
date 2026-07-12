import { InfoPanel, PageShell } from "../../../_components";

export default function GetStaticPropsRevalidatePage() {
  return (
    <PageShell
      backHref="/features/data-fetching/pages-router/incremental-static-regeneration"
      backText="Back to ISR"
      description="ISR uses getStaticProps with revalidate to refresh static pages over time."
      title="getStaticProps() with revalidate"
    >
      <InfoPanel
        code={`export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 60,
  };
}`}
      >
        Use ISR when pages should be static but still update after deployment.
      </InfoPanel>
    </PageShell>
  );
}
