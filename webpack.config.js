const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
        files: ['src/*'],
      },
      {
        reload: false
      }
    )
  ],
}