module.exports = {
    entry: './code.ts',
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