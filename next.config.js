/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true
  },
  siteUrl: 'https://avr-group.kz',
  generateRobotsTxt: true,
}

module.exports = nextConfig 