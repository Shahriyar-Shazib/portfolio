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
const repo = "portfolio";

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

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
