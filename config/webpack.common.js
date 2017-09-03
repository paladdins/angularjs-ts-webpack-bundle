const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: {
    main: [
        'angular/angular.js',
        'angular-route/angular-route.js',
        'angular-ui-router/release/angular-ui-router.js',
        'angular-sanitize/angular-sanitize.js',
        'angular-animate/angular-animate.js',
        'angular-aria/angular-aria.js',
        'angular-material/angular-material.js',
        'angular-messages/angular-messages.js',
        'angular-resource/angular-resource.js',
        './src/bootstrap.ts'
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),
    new HtmlWebpackPlugin({
      title: 'test-bundle',
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    })
  ],
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".css", ".scss", ".html", ".png", ".jpg", ".woff", ".ttf", ".eot", ".svg" ]
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']},
      { test: /\.html$/, loader: 'raw-loader' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.(png|jpg)$/, loader: 'url-loader'},
      { test: /\.(htaccess)$/, loader: 'static-loader'},
      {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  },
  devtool: 'eval-source-map'
};
