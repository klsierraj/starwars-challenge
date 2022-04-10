/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  basePath: "/home",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
        basePath: false,
        
      },
    ];
  },
};
