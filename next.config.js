/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow loading images from the public folder and external hosts if needed
    remotePatterns: [],
  },
}

module.exports = nextConfig
