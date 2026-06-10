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
  images: {
    unoptimized: true, // <-- Add this line
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'ghchart.rshah.org' },
    ],
  },
  output: 'export',
  trailingSlash: true,
  // IMPORTANT: If your GitHub repo is named "portfolio", your URL will be username.github.io/portfolio.
  // In that case, you MUST change basePath to '/portfolio'.
  // If your repo is named "username.github.io", leave it empty ('').
  basePath: '', 
};

module.exports = nextConfig;
