/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.risingsource.top",
      },
      {
        protocol: "https",
        hostname: "www.16personalities.com",
      },
    ],
  },
};

export default nextConfig;
