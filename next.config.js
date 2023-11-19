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
  };
  
  module.exports = nextConfig;
  
