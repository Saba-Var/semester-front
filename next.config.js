/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ka'],
    defaultLocale: 'ka',
    localeDetection: false,
  },
}

module.exports = nextConfig
