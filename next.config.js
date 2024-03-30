/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.js$/,
      use: options.defaultLoaders.babel,
      include: /node_modules\/react-syntax-highlighter/,
    })

    return config
  },
  reactStrictMode: true,
}
