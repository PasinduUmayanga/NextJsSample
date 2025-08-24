import React from "react";
/**
 * This is a dynamic route page for blog posts.
 * The slug parameter is used to fetch and display the content of the blog post.
 */
interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is the blog post content for &quot;{slug}&quot;.</p>
    </div>
  );
};

export default BlogPage;

export function generateStaticParams() {
  return [
    { slug: "first-post" },
    { slug: "second-post" },
    { slug: "third-post" },
  ];
}
