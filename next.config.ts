import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Unsplash URLs already include width/quality params; skipping the dev
    // optimizer avoids concurrent server-side fetches that can ETIMEDOUT.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
