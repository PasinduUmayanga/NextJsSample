import React from "react";

const HelpPage = ({ params }: { params: { slug?: string[] } }) => {
  const slug = params?.slug || [];

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
