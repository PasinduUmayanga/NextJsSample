import React from "react";
import BackButton from "@/app/_components/back-button";

const ContactPage = () => {
  return (
    <div>
      <BackButton href="/features/routing-types/app-routing" label="Back to app routing" />
      <h1>Contact Us</h1>
      <p>This is the contact page. Feel free to reach out to us!</p>
    </div>
  );
};

export default ContactPage;
