import { InfoPanel, PageShell } from "../../../_components";

export default function GetStaticPropsPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/pages-router/static-site-generation"
      backText="Back to SSG"
      description="getStaticProps fetches data at build time in the Pages Router."
      title="getStaticProps()"
    >
      <InfoPanel
        code={`export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}`}
      >
        Use SSG for content that can be generated before users request it.
      </InfoPanel>
    </PageShell>
  );
}
