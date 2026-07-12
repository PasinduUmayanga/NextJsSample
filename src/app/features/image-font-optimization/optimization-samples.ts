export type OptimizationSample = {
  code?: string;
  codeBlocks?: {
    code: string;
    title: string;
  }[];
  description: string;
  details: string[];
  slug: string;
  title: string;
};

export const OPTIMIZATION_SAMPLES: OptimizationSample[] = [
  {
    slug: "next-image",
    title: "next/image",
    description:
      "Use the Next.js Image component for optimized images with required alt text and stable sizing.",
    details: [
      "The Image component extends the HTML img element with automatic optimization features.",
      "Always provide meaningful alt text, or an empty alt string for decorative images.",
      "Provide width and height, use a static import, or use fill so the browser can reserve space and avoid layout shift.",
    ],
    code: `import Image from "next/image";

export default function ProfileImage() {
  return (
    <Image
      src="/app-logo.png"
      alt="Next.js Learning Hub logo"
      width={240}
      height={240}
    />
  );
}`,
  },
  {
    slug: "local-images",
    title: "Local images",
    description:
      "Use public paths or static imports for images that live inside your project.",
    details: [
      "Files in public can be referenced by URL paths such as /app-logo.png.",
      "Static imports let Next.js infer image dimensions automatically.",
      "Local images are the easiest option when the asset ships with the app.",
    ],
    codeBlocks: [
      {
        title: "Image from public",
        code: `import Image from "next/image";

export default function PublicImage() {
  return (
    <Image
      src="/app-logo.png"
      alt="Application logo"
      width={160}
      height={160}
    />
  );
}`,
      },
      {
        title: "Image with static import",
        code: `import Image from "next/image";
import heroImage from "./hero.png";

export default function HeroImage() {
  return <Image src={heroImage} alt="Hero illustration" />;
}`,
      },
    ],
  },
  {
    slug: "remote-images",
    title: "Remote images",
    description:
      "Use remote images when assets come from another host, and allow that host in Next config.",
    details: [
      "Remote image URLs must be configured with remotePatterns when using the default Next.js image optimizer.",
      "Remote images need explicit width and height unless you use fill.",
      "Keep remotePatterns specific so only trusted image hosts are allowed.",
    ],
    codeBlocks: [
      {
        title: "next.config.ts",
        code: `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.example.com",
        pathname: "/products/**",
      },
    ],
  },
};

export default nextConfig;`,
      },
      {
        title: "Remote image component",
        code: `import Image from "next/image";

export default function ProductImage() {
  return (
    <Image
      src="https://images.example.com/products/shoe.png"
      alt="Blue running shoe"
      width={640}
      height={480}
    />
  );
}`,
      },
    ],
  },
  {
    slug: "responsive-image-sizes",
    title: "Responsive image sizes",
    description:
      "Use fill with sizes when an image changes size across screen widths.",
    details: [
      "The sizes prop tells the browser how wide the image will render at different breakpoints.",
      "Use sizes with fill or CSS-responsive images to avoid downloading an image that is larger than needed.",
      "The parent element needs position relative when an Image uses fill.",
    ],
    code: `import Image from "next/image";

export default function ResponsiveCardImage() {
  return (
    <div style={{ position: "relative", aspectRatio: "16 / 9" }}>
      <Image
        src="/app-logo.png"
        alt="Next.js Learning Hub"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}`,
  },
  {
    slug: "image-placeholders",
    title: "Image placeholders",
    description:
      "Use placeholders to show a lightweight visual while the final image loads.",
    details: [
      "placeholder=\"blur\" works automatically for many static imports.",
      "For string paths or remote images, provide a blurDataURL when you want a blur placeholder.",
      "Placeholders are most useful for large images that appear above or near the first viewport.",
    ],
    code: `import Image from "next/image";

export default function ImageWithPlaceholder() {
  return (
    <Image
      src="/app-logo.png"
      alt="Next.js Learning Hub"
      width={320}
      height={320}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB"
    />
  );
}`,
  },
  {
    slug: "image-loading-priority",
    title: "Image loading priority",
    description:
      "Prioritize important images that are visible immediately when the page loads.",
    details: [
      "Use priority for important above-the-fold images such as a main hero image or logo hero.",
      "Avoid marking many images as priority because that can compete with other critical resources.",
      "For normal below-the-fold images, let the browser and Next.js lazy-load them.",
    ],
    code: `import Image from "next/image";

export default function HeroLogo() {
  return (
    <Image
      src="/app-logo.png"
      alt="Next.js Learning Hub logo"
      width={420}
      height={420}
      priority
    />
  );
}`,
  },
  {
    slug: "next-font",
    title: "next/font",
    description:
      "Use next/font to load and self-host fonts with automatic optimization.",
    details: [
      "next/font helps avoid external font requests at runtime by self-hosting optimized font files.",
      "It exposes className and variable values that you can apply in layouts or components.",
      "Font loading should usually be configured high in the tree, such as in app/layout.tsx.",
    ],
    code: `import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}`,
  },
  {
    slug: "local-fonts",
    title: "Local fonts",
    description:
      "Use next/font/local when the font files live in your project.",
    details: [
      "Local fonts are useful for licensed brand fonts or custom typefaces.",
      "Use woff2 when possible for modern web font delivery.",
      "You can define a CSS variable and use it in global CSS or component styles.",
    ],
    code: `import localFont from "next/font/local";

const brandFont = localFont({
  src: "./fonts/BrandSans.woff2",
  variable: "--font-brand",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={brandFont.variable}>
      <body>{children}</body>
    </html>
  );
}`,
  },
  {
    slug: "google-fonts",
    title: "Google fonts",
    description:
      "Use next/font/google to load Google fonts through Next.js optimization.",
    details: [
      "Import the font function from next/font/google and configure subsets, weights, or variables.",
      "Next.js downloads and self-hosts the font during build instead of making runtime requests to Google.",
      "Apply the generated className or variable to the element that should use the font.",
    ],
    code: `import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function MarketingPage() {
  return (
    <main className={inter.className}>
      <h1>Fast font loading with next/font</h1>
    </main>
  );
}`,
  },
];
