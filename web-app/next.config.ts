import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'localhost:8080',
    '127.0.0.1:8080',
    '192.168.1.242:8080',
    '192.168.1.242'
  ],
};

export default nextConfig;
