const { i18n } = require('./next-i18next.config')

const nextConfig = {
  images: { domains: ['avatars.dicebear.com', 'api.dicebear.com'] },
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}

module.exports = nextConfig
