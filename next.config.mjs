/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable Turbopack to avoid the CSS processing error
  experimental: {
    turbo: false,
  },
}

export default nextConfig