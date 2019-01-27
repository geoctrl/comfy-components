const path = require('path');
const IcosetWebpackPlugin = require('@icoset/icoset-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const icons = require('./icons');

const config = {}

config.entry = path.resolve(__dirname, 'docs/index.js');
config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'build/'),
  publicPath: '/',
};

config.mode = 'development';
config.devtool = 'source-map';

config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'fast-sass-loader'],
    },
    {
      test: /\.(png)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 500000,
          },
        },
      ],
    },
  ],
};

config.plugins = [
  new IcosetWebpackPlugin({
    preset: require('@icoset/preset-mdi'),
    icons,
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'docs/index.html'),
  }),
];

config.devServer = {
  index: 'index.html',
  contentBase: path.resolve(__dirname, 'docs'),
  historyApiFallback: true,
};

module.exports = config;