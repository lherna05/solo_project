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
    mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
      host: 'localhost',
      port: 8080,
      // match the output path
      static: {
        directory: path.resolve(__dirname, 'build'),
        // match the output 'publicPath'
        publicPath: '/',
      },
      // enable HMR on the devServer
      hot: true,
      // fallback to root for other urls
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      /**
       * proxy is required in order to make api calls to
       * express server while using hot-reload webpack server
       * routes api fetch requests from localhost:8080/api/* (webpack dev server)
       * to localhost:3000/api/* (where our Express server is running)
       */
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
  