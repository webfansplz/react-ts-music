'use strict';

const path = require('path');
const prodConfig = require('./config').build;
function resolve(track) {
  return path.join(__dirname, '..', track);
}
//资源路径
function assetsPath(_path) {
  return path.join(prodConfig.staticPath, _path);
}
module.exports = {
  entry: path.resolve(__dirname, '../app/app.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js|\.jsx$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: assetsPath('img/[name].[hash:8].[ext]')
        }
      }
    ]
  }
};
