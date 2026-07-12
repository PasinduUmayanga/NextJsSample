import { InfoPanel, PageShell } from "../../../_components";

export default function AppRouterOrmDatabasePage() {
  return (
    <PageShell
      description="Server components can call an ORM or database layer without exposing credentials to the browser."
      title="ORM or Database Queries"
    >
      <InfoPanel
        code={`export default async function Page() {
  const users = await db.user.findMany();

  return <UserList users={users} />;
}`}
      >
        Keep database clients and sensitive connection details in server-only code.
      </InfoPanel>
    </PageShell>
  );
}
