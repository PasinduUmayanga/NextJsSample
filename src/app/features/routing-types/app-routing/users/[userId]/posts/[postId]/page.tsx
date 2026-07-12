interface PostPageProps {
  params: Promise<{
    userId: string;
    postId: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { userId, postId } = await params;
  return (
    <div>
      <h1>User ID: {userId}</h1>
      <h2>Post ID: {postId}</h2>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { userId: "1", postId: "1" },
    { userId: "1", postId: "2" },
    { userId: "2", postId: "1" },
    { userId: "2", postId: "2" },
  ];
}
