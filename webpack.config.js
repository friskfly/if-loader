module.exports = {
  entry: './example.js',
  output: {
    filename: 'bundle.js'
  },
  'if-loader' : 'version-b',
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: './index.js'
    }]
  },
  devtool: 'source-map'
}