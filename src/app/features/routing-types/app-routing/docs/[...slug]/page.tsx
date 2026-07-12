import BackButton from "@/app/_components/back-button";

interface DocsPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;

  return (
    <div>
      <BackButton href="/features/routing-types/app-routing" label="Back to app routing" />
      <h1>Docs Route</h1>
      <p>Segments: {slug?.join(" / ")}</p>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: ["introduction"] },
    { slug: ["getting-started", "installation"] },
    { slug: ["api", "reference"] },
    { slug: ["examples", "basic-usage"] },
  ];
}
