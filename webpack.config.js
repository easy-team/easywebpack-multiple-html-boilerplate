module.exports = {
  framework: 'html',
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
    nunjucks: {
      enable: true,
      options: {
        searchPaths: ['./widget']
      }
    }
  },
  plugins: {},
  done() {

  }
};
