import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;


// next.config.js
module.exports = {
  images: {
    domains: ['127.0.0.1', 'www.0101.agency', 'placehold.co'], // Add 'localhost' if you want to include that as well
  },
};