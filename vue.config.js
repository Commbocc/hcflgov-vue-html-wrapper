const webpack = require('webpack')

module.exports = {
  css: {
    extract: true
  },
  filenameHashing: false,
  productionSourceMap: false,
  publicPath: './',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  devServer: {
    proxy: {
      '^/apis/v1/events': {
        target: 'https://www.hillsboroughcounty.org/Calendar/GetEvents?to=1580533200000&from=1577854800000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis/v1/events': ''
        }
      },
      // '^/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
