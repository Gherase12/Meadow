/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com","crypto.snapi.dev"]
  },
}

module.exports = nextConfig
