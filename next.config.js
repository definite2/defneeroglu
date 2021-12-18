const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: { esmExternals: true },
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      //webpack aliase for Preact for production mode only
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
      })
    }

    return config
  },
})
