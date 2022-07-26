/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bizweb.dktcdn.net", "res.cloudinary.com", "taxreform.dof.gov.ph"],
  },
};

module.exports = nextConfig;
