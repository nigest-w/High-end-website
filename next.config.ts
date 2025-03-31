/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? "/high-end-project" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
