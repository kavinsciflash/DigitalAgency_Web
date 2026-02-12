import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = 'DigitalAgency_Web';

const nextConfig: NextConfig = {
  // Static export is required for GitHub Pages but NOT for Vercel
  // Vercel handles Next.js dynamically which is preferred
  output: isGithubActions ? 'export' : undefined,

  // Base path and asset prefix are needed for GitHub Pages sub-directory deployment
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',

  images: {
    // Vercel provides high-performance image optimization
    // We only disable it for static exports (like GitHub Pages)
    unoptimized: isGithubActions ? true : false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
