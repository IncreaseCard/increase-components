import css from 'rollup-plugin-css-porter';
import url from 'rollup-plugin-url';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

module.exports = {
  input: 'src/index.js',
  plugins: [
    css(),
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
    external(),
    terser()
  ],
  output: {
    file: 'dist/bundle.js',
    name: 'IncreaseComponents',
    format: 'umd'
  }
};
