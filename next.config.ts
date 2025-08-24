import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const repo = "NextJsSample";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // writes static site to ./out on build
  images: { unoptimized: true }, // Pages can't run Next/Image optimizer
  // If deploying to https://USERNAME.github.io/REPO:
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

module.exports = nextConfig;
