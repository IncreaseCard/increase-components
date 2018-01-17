const path = require('path');

const STYLES_PATH = path.resolve(__dirname, 'src/styles');

module.exports = {
  plugins: {
    'postcss-import': {
      path: [STYLES_PATH]
    },
    'postcss-cssnext': {}
  }
}
