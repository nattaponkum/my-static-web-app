const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'EGAT PV Inverter Dashboard',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7071',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
