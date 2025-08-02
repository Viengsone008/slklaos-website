// next.config.js
module.exports = {
  // Ensure Next.js knows your `pages` are inside `src`
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  
  // Skip TypeScript errors during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Skip ESLint errors during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // External packages that should not be bundled
  serverExternalPackages: ['xlsx', 'canvas'],
  
  // webpack optimization to prevent build hangs
  webpack: (config, { isServer }) => {
    // Ignore certain modules that might cause issues
    config.externals = config.externals || [];
    if (!isServer) {
      config.externals.push({
        'canvas': 'canvas',
        'jsdom': 'jsdom',
      });
    }
    
    // Optimize build performance
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  },
};
 