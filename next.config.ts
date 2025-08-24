import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // writes static site to ./out on build
  images: { unoptimized: true }, // Pages can't run Next/Image optimizer
  // If deploying to https://USERNAME.github.io/REPO:
  // basePath: '/REPO',
  // assetPrefix: '/REPO/',
};

module.exports = nextConfig;
