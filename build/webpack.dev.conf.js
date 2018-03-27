'use strict';
const path = require('path');
const webpack = require('webpack');
const baseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const devConfig = require('./config').dev;
const devConf = merge(baseConf, {
  mode: 'development',
  output: {
    //文件名
    filename: '[name].js',
    publicPath: devConfig.publicPath
  },
  devtool: devConfig.devtoolType,
  //
  //启动一个express服务器,使我们可以在本地进行开发！！！
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    host: devConfig.host,
    port: devConfig.port,
    proxy: devConfig.proxyTable,
    compress: true,
    overlay: {
      errors: true,
      warnings: false
    },
    quiet: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //开启HMR(热替换功能,替换更新部分,不重载页面！)
    new webpack.HotModuleReplacementPlugin(),

    //显示模块相对路径
    // new webpack.NamedModulesPlugin(),

    //编译出错时,该插件可跳过输出,确保输出资源不会包含错误!
    // new webpack.NoEmitOnErrorsPlugin(),

    //配置html入口信息
    new HtmlWebpackPlugin({
      title: 'hello,xc-cli!',
      filename: 'index.html',
      template: 'index.html',
      //js资源插入位置,true表示插入到body元素底部
      inject: true
    }),

    //编译提示插件
    new FriendlyErrorsPlugin({
      //编译成功提示！
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${devConfig.host}:${devConfig.port}`]
      },
      //编译出错！
      onErrors: function(severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        const filename = error.file.split('!').pop();
        //编译出错时,右下角弹出错误提示！
        notifier.notify({
          title: 'react-cli',
          message: severity + ': ' + error.name,
          subtitle: filename || '',
          icon: path.join(__dirname, 'err.png')
        });
      }
    })
  ]
});
module.exports = devConf;
