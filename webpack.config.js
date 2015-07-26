'use strict';

import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'imageq.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
