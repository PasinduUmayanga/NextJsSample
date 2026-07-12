import { InfoPanel, PageShell } from "../../../_components";

export default function AppRouterFetchPage() {
  return (
    <PageShell
      description="Use fetch in a server component to load data before the UI is sent to the browser."
      title="App Router fetch()"
    >
      <InfoPanel
        code={`export default async function Page() {
  // This fetch runs on the server before the page renders.
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return <PostList posts={posts} />;
}`}
      >
        This pattern is best for API data that should be loaded on the server.
      </InfoPanel>
    </PageShell>
  );
}
