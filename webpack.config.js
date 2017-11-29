module.exports = {
    entry: './code.js',
    output: {
      filename: 'distribution/cfrZ.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader'}
      ]
    },
  };