const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    homePage: './src/welcomePage.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant',
      template: './src/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|png)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devtool: 'inline-source-map'
};
