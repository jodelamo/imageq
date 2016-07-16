module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.spec.js',
      { pattern: 'test/images/*.png', served: true }
    ],
    reporters: ['mocha'],
    proxies: {
      '/1.png': '/base/test/images/1.png',
      '/2.png': '/base/test/images/2.png',
      '/3.png': '/base/test/images/3.png'
    }
  });
}
