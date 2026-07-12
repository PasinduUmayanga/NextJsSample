import BackButton from "@/app/_components/back-button";

interface UserPageProps {
  params: Promise<{
    userId: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { userId } = await params;
  return (
    <div>
      <BackButton href="/features/routing-types/app-routing" label="Back to app routing" />
      <h1>User ID: {userId}</h1>
    </div>
  );
}

export function generateStaticParams() {
  return [{ userId: "1" }, { userId: "2" }, { userId: "3" }];
}
