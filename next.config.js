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
};
 