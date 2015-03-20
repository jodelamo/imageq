'use strict';

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'browserify', 'chai'],

    files: [
      { pattern: '*.js', watched: true, included: false, served: true }
    ],

    preprocessors: {
      '/**/*.browserify': ['browserify']
    },

    browserify: {
      files: [
        '*-test.js'
      ]
    },

    reporters: ['progress'],

    port: 9876,

    proxies: {
      '/images/1.jpg': 'http://www.phootoscelebrities.com/wp-content/uploads/2014/07/arnold-schwarzenegger-images.jpg',
      '/images/2.jpg': 'http://www.bodybuilding.com/fun/images/2014/arnold-blueprint_day18_graphics-1.jpg'
    },

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: true
  });
};
