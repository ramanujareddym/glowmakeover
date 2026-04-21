/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.instagram.com',
      },
    ],
    domains: ['localhost'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
