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
      root: 'IncreaseComponents',
      amd: 'increase-components',
      commonjs: 'increase-components'
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
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin(), new webpack.NamedModulesPlugin()],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: '_'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: '_'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: '_'
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
      root: '_'
    },
    'moment-range': {
      commonjs: 'moment-range',
      commonjs2: 'moment-range',
      amd: 'moment-range',
      root: '_'
    },
    'normalize.css': {
      commonjs: 'normalize.css',
      commonjs2: 'normalize.css',
      amd: 'normalize.css',
      root: '_'
    }
  }
};
