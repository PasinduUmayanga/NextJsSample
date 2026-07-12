import { InfoPanel, PageShell } from "../../../_components";

export default function AppRouterFetchPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/app-router/server-side"
      backText="Back to server-side fetching"
      description="Use fetch in a server component to load data before the UI is sent to the browser."
      title="App Router fetch()"
    >
      <InfoPanel
        code={`export default async function Page() {
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
