import Head from "next/head";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - My Next.js App</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1>About Us</h1>
        <p>
          Welcome to our application! This is the About page where you can learn
          more about who we are and what we do.
        </p>

        <section>
          <h2>Our Mission</h2>
          <p>
            To build modern, scalable web applications that are fast,
            user-friendly, and developer-focused.
          </p>
        </section>

        <section>
          <h2>Our Team</h2>
          <p>
            We're a group of passionate developers, designers, and creators
            committed to delivering great software.
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
