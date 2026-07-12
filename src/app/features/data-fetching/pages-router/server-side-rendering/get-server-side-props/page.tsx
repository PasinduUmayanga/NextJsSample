import { InfoPanel, PageShell } from "../../../_components";

export default function GetServerSidePropsPage() {
  return (
    <PageShell
      description="getServerSideProps fetches data for every request in the Pages Router."
      title="getServerSideProps()"
    >
      <InfoPanel
        code={`export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  return {
    props: { user },
  };
}`}
      >
        Use SSR for request-specific data such as authenticated dashboards.
      </InfoPanel>
    </PageShell>
  );
}
