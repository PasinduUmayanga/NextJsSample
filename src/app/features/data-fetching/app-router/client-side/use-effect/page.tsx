import { InfoPanel, PageShell } from "../../../_components";

export default function AppRouterUseEffectPage() {
  return (
    <PageShell
      backHref="/features/data-fetching/app-router/client-side"
      backText="Back to client-side fetching"
      description="useEffect fetches data after a client component renders in the browser."
      title="Client Fetching with useEffect"
    >
      <InfoPanel
        code={`"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  return <pre>{JSON.stringify(profile, null, 2)}</pre>;
}`}
      >
        Use this for simple browser-only data needs. For caching and retries,
        prefer a data library.
      </InfoPanel>
    </PageShell>
  );
}
