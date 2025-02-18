import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/robertvson.github.io/' : '',
  basePath: isProd ? '/robertvson.github.io' : '',
  output: 'export'
};

export default nextConfig;
