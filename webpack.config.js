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

config.resolveLoader = {
  alias: {
    'doc-loader': path.join(__dirname, './doc-loader.js')
  },
};

config.module = {
  rules: [
    {
      test: /\.js/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        {
          loader: 'kremling-inline-loader',
          options: {
            sass: {
              data: `@import "${path.resolve(
                __dirname,
                'src/styles/variables.scss'
              )}";`
            },
          },
        },
      ]
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          implementation: require("sass"),
        },
      }],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: 'svg-inline-loader',
    },
  ],
};

config.plugins = [
  new IcosetWebpackPlugin({
    directory: path.resolve(
      __dirname,
      'node_modules/@fortawesome/fontawesome-pro/svgs'
    ),
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
