"use client";
import { useParams } from "next/navigation";

export default function PostPage() {
  const params = useParams();
  return (
    <div>
      <h1>User ID: {params.userId}</h1>
      <h2>Post ID: {params.postId}</h2>
    </div>
  );
}
