/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.us-east-1.wasabisys.com'], // Add S3 bucket domain for image optimization
      },

};

export default nextConfig;
