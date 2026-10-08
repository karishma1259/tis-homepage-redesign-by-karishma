/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Official TIS assets are loaded from the live site (see src/data/assets.ts).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tis.edu.in",
        pathname: "/_next/static/media/**",
      },
    ],
  },
};

export default nextConfig;
