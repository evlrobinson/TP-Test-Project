const path = require('path');
const HtmlWebackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  watch: true,
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebackPlugin({
      template: path.join(__dirname, '/src/index.html'),
    }),
  ],
};
