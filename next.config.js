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
  experimental: {
    optimizeFonts: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig 