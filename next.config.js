/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  typescript: {
    // TODO: WARNING - Remove this as soon as possible
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: false,
  }
}
