const path = require('path');

module.exports = {
  basePath: "/porfolio-website",
  assetPrefix: '/porfolio-website/',
  output: "export", // Enables static exports
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
};
