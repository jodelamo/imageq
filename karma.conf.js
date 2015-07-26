'use strict';

export default function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.spec.js',
      { pattern: 'test/images/*.png', served: true }
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack']
    },
    reporters: ['mocha'],
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    proxies: {
      '/1.png': '/base/test/images/1.png',
      '/2.png': '/base/test/images/2.png'
    }
  });
}
