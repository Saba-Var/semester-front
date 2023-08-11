const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: { domains: ['avatars.dicebear.com'] },
}

module.exports = nextConfig
