const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.src,
    port: 8081,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
   
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})