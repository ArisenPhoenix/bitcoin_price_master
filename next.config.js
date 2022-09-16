/** @type {import('next').NextConfig} */
const env = {
  AUTH0_BASE_URL: "https://bitcoin-price-master.vercel.app/",
};
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: env,
};
module.exports = nextConfig;
