interface UserPageProps {
  params: Promise<{
    userId: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { userId } = await params;
  return <h1>User ID: {userId}</h1>;
}

export function generateStaticParams() {
  return [{ userId: "1" }, { userId: "2" }, { userId: "3" }];
}
