var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: __dirname + '/src',
  entry: [
    'webpack-dev-server/client?http://localhost:3010',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
      //include: __dirname
    }]
  }
};
