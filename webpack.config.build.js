const { resolve } = require('path');
const config = {};

config.mode = 'production';
config.devtool = false;
config.entry = resolve(__dirname, 'src/index.js');
config.output = {
  path: resolve(__dirname, 'build'),
  filename: 'index.js',
  library: 'comfy',
  libraryTarget: 'umd',
};
config.plugins = [];

config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
  ],
};


config.externals = {
  'react': 'React',
};

module.exports = config;