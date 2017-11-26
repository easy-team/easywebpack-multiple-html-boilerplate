module.exports = {
  env:process.env.BUILD_ENV,
  entry: {
    include: 'page',
    template: 'view/layout.html'
  },
  alias: {
    asset: 'asset',
    jquery: 'asset/js/jquery-3.2.1.min.js',
  },
  options: {
    externals: {
      jquery: 'window.$'
    }
  },
  loaders: {

  },
  plugins: {

  },
  create() {
  },
  done() {

  }
};
