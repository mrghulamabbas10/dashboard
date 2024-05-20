/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  unoptimized: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
    ],
  },
}

export default nextConfig
