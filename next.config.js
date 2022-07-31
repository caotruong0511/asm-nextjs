/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bizweb.dktcdn.net", "res.cloudinary.com", "taxreform.dof.gov.ph", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
