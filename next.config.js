const config = require("./config/index.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: `/users/${config.username}/repos`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
