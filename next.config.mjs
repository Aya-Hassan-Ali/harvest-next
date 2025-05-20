/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['pages', 'utils'],
  },
  // Add output standalone for optimized production deployment
  output: 'standalone',
  // Configure base path if your app is served from a subdirectory
  basePath:'/Harvest_Guard',
  // Optional: Add asset prefix if needed for CDN or subdirectory deployment
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/harvestguard/' : '',
  // Enable production source maps if needed (but increases build size)
  // productionBrowserSourceMaps: false,
  // Configure images if using Next.js Image optimization
  images: {
    unoptimized: true, // Set to false if you want Next.js to optimize images
  }
};

export default nextConfig;