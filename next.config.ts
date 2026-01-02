import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
      },
      {
        protocol: "https",
        hostname: "cdn.inappstory.ru",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
