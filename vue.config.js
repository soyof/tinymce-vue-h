const path = require('path')

module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))

    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  configureWebpack: config => {
    // config.externals = [{ 'tinymce': 'tinymce' }]
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'async',
            test: /node_modules/,
            name: 'common',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'async',
            test: /[\\/]packages[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          }
        }
      }
    }
  }
}
