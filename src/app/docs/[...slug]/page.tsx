"use client";
import { useParams } from "next/navigation";

export default function DocsPage() {
  const params = useParams();
  const slug = params.slug as string[]; // catch-all returns an array

  return (
    <div>
      <h1>Docs Route</h1>
      <p>Segments: {slug?.join(" / ")}</p>
    </div>
  );
}
