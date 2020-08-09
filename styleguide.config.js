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
  sections: [
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Introduction',
          content: 'docs/introduction.md',
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com',
        },
      ],
    },
    {
      name: 'UI Components',
      components: 'src/components/**/*.component.jsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.component.jsx?$/, '.examples.md');
  },
};
