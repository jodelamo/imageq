module.exports = {
  output: {
    library: 'imageq',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
