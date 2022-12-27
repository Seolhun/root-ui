const { resolve } = require('path');
const context = resolve(__dirname, '../src');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@': context,
    }
    config.devServer = {
      hot: true,
    }
    config.context = context;
    config.module.rules.push(
      {
        test: [/\.[jt]sx?$/],
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    )
    return config;
  },
};
