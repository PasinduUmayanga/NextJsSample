import React from "react";

const HelpPage = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || [];

  return (
    <div>
      <h1>Help Page</h1>
      {slug.length > 0 ? (
        <p>You are viewing: {slug.join(" / ")}</p>
      ) : (
        <p>Welcome to the help section.</p>
      )}
    </div>
  );
};

export default HelpPage;

export function generateStaticParams() {
  return [
    { slug: undefined },
    { slug: ["getting-started"] },
    { slug: ["faq"] },
    { slug: ["contact", "support"] },
  ];
}
