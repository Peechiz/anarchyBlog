const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

const { parsed } = require('dotenv').config()


module.exports = withCSS({
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(parsed)
    )
    return config
  }
})