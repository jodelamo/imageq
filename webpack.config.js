'use strict';

module.exports = {
  output: {
    library: 'imageq',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
