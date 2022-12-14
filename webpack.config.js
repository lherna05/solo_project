const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      // entry point of our app
      './client/index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    mode: 'development',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
      host: 'localhost',
      port: 8080,
      static: {
        directory: path.resolve(__dirname, 'build'),
        publicPath: '/',
      },
      hot: true,
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: {
        '/api/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
        '/assets/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: [
                  '@babel/preset-env', 
                  '@babel/preset-react', 
                ]
            }
          },
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
  