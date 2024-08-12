const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
    transpilePackages: [
        '@repo/theme',
        '@repo/icons',
        '@repo/ui',
        '@repo/core',
      ],
    reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'], // Add your image domain here
  },
});
