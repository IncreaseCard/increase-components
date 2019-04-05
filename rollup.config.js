import embedCSS from 'rollup-plugin-embed-css';
import url from 'rollup-plugin-url';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';

module.exports = {
  input: 'src/index.js',
  plugins: [
    embedCSS(),
    url(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve({
      module: true, // Default: true
      main: true, // Default: true
      extensions: ['.mjs', '.js', '.jsx', '.json'], // Default: [ '.mjs', '.js', '.json', '.node' ]
      preferBuiltins: false // Default: true
    }),
    commonjs({
      include: ['node_modules/**']
    }),
    external()
  ],
  output: {
    file: 'dist/bundle.js',
    name: 'IncreaseComponents',
    format: 'umd'
  }
};
