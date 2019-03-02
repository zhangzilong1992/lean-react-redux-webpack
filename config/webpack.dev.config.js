const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/App.js',
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '一个学习用的App',
      template: './public/index.html'
    })
  ]
}
