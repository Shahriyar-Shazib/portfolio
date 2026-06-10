/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'avatars.githubusercontent.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'github.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'ghchart.rshah.org',
//       },
//     ],
//   },
//   output: 'export',
//   trailingSlash: true,
//   basePath: '',
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: '/portfolio',
  assetPrefix: '/portfolio',

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'ghchart.rshah.org' },
    ],
  },
};

module.exports = nextConfig;
