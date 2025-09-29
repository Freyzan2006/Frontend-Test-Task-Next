import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://pixabay.com/**'),
      new URL('https://cdn.pixabay.com/photo/**'),
    ],
  },
};

export default nextConfig;
