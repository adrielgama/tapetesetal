/** @type {import('next').NextConfig} */

require('dotenv').config();
const withImages = require('next-images');

const env = {
  API_KEY_USERID: process.env.API_KEY_USERID,
  API_KEY_SERVICEID: process.env.API_KEY_SERVICEID,
  API_KEY_TEMPLATEID: process.env.API_KEY_TEMPLATEID,
};

const nextConfig = {
  env,
  withImages,
  reactStrictMode: false,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
