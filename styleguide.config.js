const path = require('path');
module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'Evoke UI',
  styleguideDir: 'dist-docs',
  moduleAliases: {
    'evoke-ui': path.resolve(__dirname, 'src'),
  },
};
