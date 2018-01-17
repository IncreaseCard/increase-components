const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const STYLES_DIR = path.resolve(__dirname, 'src/styles');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    library: {
      root: "IncreaseComponents",
      amd: "increase-components",
      commonjs: "increase-components"
    },
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-import')({
                  root: loader.resourcePath,
                  path: [STYLES_DIR]
                }),
                require('postcss-cssnext')({
                  features: {
                    customProperties: {
                      preserve: true
                    }
                  }
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
