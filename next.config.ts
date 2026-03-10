import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nerio.rstheme.com",
      },
    ],
  },
};

export default nextConfig;
