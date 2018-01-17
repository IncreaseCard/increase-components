// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

const STYLES_DIR = path.resolve(__dirname, '../src/styles');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
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
    ],
  },
};
