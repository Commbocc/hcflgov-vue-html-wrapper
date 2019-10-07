const webpack = require('webpack')

module.exports = {
  css: {
    extract: true
  },
  filenameHashing: false,
  productionSourceMap: false,
  // publicPath: './',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
