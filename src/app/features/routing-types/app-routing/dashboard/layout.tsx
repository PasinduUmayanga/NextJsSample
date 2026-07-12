import BackButton from "@/app/_components/back-button";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BackButton href="/features/routing-types/app-routing" label="Back to app routing" />
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
