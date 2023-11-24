// /** @type {import('next').NextConfig} */


// const nextConfig = {
//     async redirects() {
//       return [
//         {
//           source: '/',
//           destination: '/allfeed',
//           permanent: true,
//         },
//       ];
//     },
//     presets: ['next/babel'],
//   };
  
//   module.exports = nextConfig;
  
/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/allfeed',
        permanent: true,
      },
    ];
  },
  // presets: ['next/babel'], // Move this line outside of the redirects function
};

module.exports = nextConfig;
