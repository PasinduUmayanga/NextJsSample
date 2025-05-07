import React from "react";
/**
 * This is a dynamic route page for blog posts.
 * The slug parameter is used to fetch and display the content of the blog post.
 */
interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is the blog post content for "{slug}".</p>
    </div>
  );
};

export default BlogPage;
