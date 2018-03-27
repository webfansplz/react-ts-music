module.exports = {
  dev: {
    publicPath: '/',
    devtoolType: 'cheap-module-eval-source-map',
    host: 'localhost',
    port: '1234',
    proxyTable: {}
  },
  build: {
    staticPath: 'static',
    publicPath: '/',
    devtoolType: 'source-map'
  }
};
