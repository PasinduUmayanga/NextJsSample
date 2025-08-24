import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const repo = "NextJsSample";

const nextConfig: NextConfig = {
  /* config options here */

  // Only use static export for production builds
  ...(isProd && {
    output: "export", // writes static site to ./out on build
    images: { unoptimized: true }, // Pages can't run Next/Image optimizer
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
};

export default nextConfig;
