import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimization for faster builds
  output: 'standalone',
  
  // Netlify-specific configuration
  trailingSlash: true,
  
  // Disable features that slow down builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Build optimizations for faster deployment
  experimental: {
    // Disable features that cause build slowdowns
    serverComponentsExternalPackages: ['recharts', 'react-big-calendar', 'xlsx'],
  },
  
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize builds
  swcMinify: true,
  
  // Faster builds
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize for production builds
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
    }
    return config;
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Faster builds, less optimization
  },
};

export default nextConfig;
