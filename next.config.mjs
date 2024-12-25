/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.wasabisys.com',
            port: '',
            pathname: '/**',
          }
        ],
        unoptimized: true // Add this to bypass image optimization
      },

};

export default nextConfig;
