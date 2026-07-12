import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  /* config options here */

  // Only use static export for production builds
  ...(isProd && {
    output: "export", // writes static site to ./out on build
    images: { unoptimized: true }, // Pages can't run Next/Image optimizer
    ...(basePath && {
      basePath,
      assetPrefix: `${basePath}/`,
    }),
    trailingSlash: true, // creates /route/index.html files for static hosts like IIS
  }),
};

export default nextConfig;
