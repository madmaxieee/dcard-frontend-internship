/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: `/users/zhuang-jia-xu/repos`,
        // destination: `/users/facebook/repos`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
