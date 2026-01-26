import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // opcional
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;
