'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const prodConfig = require('./config').build;
const baseConf = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
function assetsPath(_path) {
  return path.join(prodConfig.staticPath, _path);
}
const prodConf = merge(baseConf, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: prodConfig.publicPath,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[name].[chunkhash].js')
  },
  devtool: prodConfig.devtoolType,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      }
    ]
  },
  //   splitChunks: {
  //     chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async"
  //     minSize: 0, // 最小尺寸，默认0
  //     minChunks: 1, // 最小 chunk ，默认1
  //     maxAsyncRequests: 1, // 最大异步请求数， 默认1
  //     maxInitialRequests : 1, // 最大初始化请求书，默认1
  //     name: function(){}, // 名称，此选项可接收 function
  //     cacheGroups:{ // 这里开始设置缓存的 chunks
  //         priority: 0, // 缓存组优先级
  //         vendor: { // key 为entry中定义的 入口名称
  //             chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
  //             test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
  //             name: "vendor", // 要缓存的 分隔出来的 chunk 名称
  //             minSize: 0,
  //             minChunks: 1,
  //             enforce: true,
  //             maxAsyncRequests: 1, // 最大异步请求数， 默认1
  //             maxInitialRequests : 1, // 最大初始化请求书，默认1
  //             reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
  //         }
  //     }
  //  }
  optimization: {
    //替换UglifyJsPlugin插件,默认为true,暂时配置学习
    minimize: true,
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.BannerPlugin('hey,react-cli'),
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      allChunks: false
    }),
    new OptimizeCSSPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: prodConfig.staticPath,
        ignore: ['.*']
      }
    ]),
    //生成html
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/index.html'),
      template: 'index.html',
      // favicon: path.resolve(__dirname, '../favicon.ico'),
      //js资源插入位置,true表示插入到body元素底部
      inject: true,
      //压缩配置
      minify: {
        //删除Html注释
        removeComments: true,
        //去除空格
        collapseWhitespace: true,
        //去除属性引号
        removeAttributeQuotes: true
      },
      //根据依赖引入chunk
      chunksSortMode: 'dependency'
    })
  ]
});
module.exports = prodConf;
