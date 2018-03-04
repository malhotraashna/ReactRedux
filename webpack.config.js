var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {path: __dirname, filename: 'bundle.js' },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }]
  },
};