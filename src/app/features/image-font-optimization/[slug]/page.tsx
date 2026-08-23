import Image from "next/image";
import { notFound } from "next/navigation";
import CodeBlock from "@/app/_components/code-block";
import { publicAssetPath } from "@/app/_lib/site-paths";
import { OPTIMIZATION_SAMPLES } from "../optimization-samples";

type OptimizationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OptimizationDetailPage({
  params,
}: OptimizationDetailPageProps) {
  const { slug } = await params;
  const sample = OPTIMIZATION_SAMPLES.find((item) => item.slug === slug);

  if (!sample) {
    notFound();
  }

  return (
    <main style={styles.page}>
      <section style={styles.content}>
        <p style={styles.eyebrow}>Optimization sample</p>
        <h1 style={styles.title}>{sample.title}</h1>
        <p style={styles.description}>{sample.description}</p>
        <section style={styles.panel}>
          <h2 style={styles.panelTitle}>Rendered sample</h2>
          <OptimizationPreview slug={sample.slug} />
          <h2 style={styles.panelTitle}>How it works</h2>
          <div style={styles.detailList}>
            {sample.details.map((detail) => (
              <p key={detail} style={styles.detailItem}>
                {detail}
              </p>
            ))}
          </div>
          <h2 style={styles.panelTitle}>Code sample</h2>
          {sample.codeBlocks ? (
            <div style={styles.codeBlockList}>
              {sample.codeBlocks.map((block) => (
                <section key={block.title}>
                  <h3 style={styles.codeTitle}>{block.title}</h3>
                  <CodeBlock>{block.code}</CodeBlock>
                </section>
              ))}
            </div>
          ) : (
            <CodeBlock>{sample.code ?? ""}</CodeBlock>
          )}
        </section>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return OPTIMIZATION_SAMPLES.map((sample) => ({ slug: sample.slug }));
}

function OptimizationPreview({ slug }: Readonly<{ slug: string }>) {
  if (slug === "responsive-image-sizes") {
    return (
      <section style={styles.preview}>
        <div style={styles.responsiveFrame}>
          <Image
            src={publicAssetPath("/app-logo.png")}
            alt="Responsive sample logo"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p style={styles.previewText}>
          This uses a flexible parent with `fill`, `sizes`, and `objectFit`.
        </p>
      </section>
    );
  }

  if (slug === "local-images") {
    return (
      <section style={styles.previewGrid}>
        <PreviewImageCard label="Public path" />
        <PreviewImageCard label="Static import pattern" />
      </section>
    );
  }

  if (slug === "remote-images") {
    return (
      <section style={styles.preview}>
        <div style={styles.flowRow}>
          <span style={styles.flowBox}>Remote host</span>
          <span style={styles.flowArrow}>to</span>
          <PreviewImageCard label="Optimized Image output" />
        </div>
        <p style={styles.previewText}>
          The preview uses this app logo locally; the code sample shows the
          remote host configuration needed for real remote images.
        </p>
      </section>
    );
  }

  if (slug === "image-placeholders") {
    return (
      <section style={styles.preview}>
        <div style={styles.placeholderFrame}>
          <Image
            src={publicAssetPath("/app-logo.png")}
            alt="Logo with placeholder styling"
            width={160}
            height={160}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB"
          />
        </div>
        <p style={styles.previewText}>
          A blur placeholder gives the image area a lightweight loading state.
        </p>
      </section>
    );
  }

  if (slug === "image-loading-priority") {
    return (
      <section style={styles.preview}>
        <div style={styles.priorityFrame}>
          <span style={styles.priorityBadge}>priority</span>
          <Image
            src={publicAssetPath("/app-logo.png")}
            alt="Priority logo sample"
            width={180}
            height={180}
            priority
          />
        </div>
        <p style={styles.previewText}>
          Priority is for important images that should load as soon as possible.
        </p>
      </section>
    );
  }

  if (slug === "next-font" || slug === "local-fonts" || slug === "google-fonts") {
    return (
      <section style={styles.fontPreview}>
        <Image
          src={publicAssetPath("/app-logo.png")}
          alt=""
          aria-hidden="true"
          width={72}
          height={72}
          style={styles.fontPreviewLogo}
        />
        <div>
          <p style={styles.fontPreviewTitle}>Next.js Learning Hub</p>
          <p style={styles.fontPreviewText}>
            Optimized fonts keep text stable, fast, and consistent.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.preview}>
      <PreviewImageCard label="next/image output" />
      <p style={styles.previewText}>
        The image reserves space with width and height to reduce layout shift.
      </p>
    </section>
  );
}

function PreviewImageCard({ label }: Readonly<{ label: string }>) {
  return (
    <div style={styles.previewCard}>
      <Image
        src={publicAssetPath("/app-logo.png")}
        alt="Next.js Learning Hub logo"
        width={150}
        height={150}
      />
      <span style={styles.previewLabel}>{label}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    alignItems: "center",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    padding: 24,
  },
  content: {
    maxWidth: 820,
    width: "100%",
  },
  eyebrow: {
    color: "#2563eb",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 0,
    margin: "0 0 8px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  title: {
    color: "#111827",
    fontSize: 40,
    fontWeight: 800,
    margin: 0,
    textAlign: "center",
  },
  description: {
    color: "#4b5563",
    fontSize: 18,
    lineHeight: 1.6,
    margin: "12px auto 24px",
    maxWidth: 680,
    textAlign: "center",
  },
  panel: {
    background: "#ffffff",
    border: "2px solid #2563eb",
    borderRadius: 8,
    boxShadow: "0 10px 18px rgba(15, 23, 42, 0.08)",
    padding: 20,
  },
  panelTitle: {
    color: "#2563eb",
    fontSize: 22,
    fontWeight: 800,
    margin: "0 0 10px",
  },
  preview: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    marginBottom: 18,
    padding: 16,
  },
  previewGrid: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    marginBottom: 18,
  },
  previewCard: {
    alignItems: "center",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    minHeight: 220,
    padding: 16,
  },
  previewLabel: {
    color: "#2563eb",
    fontSize: 13,
    fontWeight: 800,
    textAlign: "center",
  },
  previewText: {
    color: "#4b5563",
    fontSize: 14,
    lineHeight: 1.5,
    margin: "12px 0 0",
  },
  responsiveFrame: {
    aspectRatio: "16 / 9",
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  placeholderFrame: {
    alignItems: "center",
    background: "linear-gradient(135deg, #dbeafe, #f5d0fe)",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    minHeight: 220,
  },
  priorityFrame: {
    alignItems: "center",
    background: "#eff6ff",
    border: "1px solid #bfdbfe",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    minHeight: 240,
    position: "relative",
  },
  priorityBadge: {
    background: "#2563eb",
    borderRadius: 8,
    color: "#ffffff",
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 9px",
    position: "absolute",
    right: 12,
    top: 12,
    textTransform: "uppercase",
  },
  flowRow: {
    alignItems: "center",
    display: "grid",
    gap: 12,
    gridTemplateColumns: "minmax(120px, 1fr) auto minmax(180px, 1.4fr)",
  },
  flowBox: {
    background: "#ffffff",
    border: "2px solid #2563eb",
    borderRadius: 8,
    color: "#2563eb",
    fontSize: 15,
    fontWeight: 800,
    padding: 16,
    textAlign: "center",
  },
  flowArrow: {
    color: "#111827",
    fontSize: 12,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  fontPreview: {
    alignItems: "center",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    display: "flex",
    gap: 16,
    marginBottom: 18,
    padding: 16,
  },
  fontPreviewLogo: {
    borderRadius: 8,
  },
  fontPreviewTitle: {
    color: "#111827",
    fontSize: 28,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
  },
  fontPreviewText: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: "8px 0 0",
  },
  detailList: {
    display: "grid",
    gap: 10,
    marginBottom: 18,
  },
  detailItem: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.5,
    margin: 0,
    padding: 12,
  },
  codeBlockList: {
    display: "grid",
    gap: 14,
  },
  codeTitle: {
    color: "#111827",
    fontSize: 15,
    fontWeight: 800,
    margin: "0 0 6px",
  },
};
