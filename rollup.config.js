import css from 'rollup-plugin-css-porter';
import url from 'rollup-plugin-url';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const cjs = {
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
  file: 'dist/bundle.cjs.js'
};

const esm = {
  format: 'esm',
  sourcemap: true,
  file: 'dist/bundle.esm.js'
};

const plugins = [
  css(),
  url(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  resolve(),
  commonjs({
    include: ['node_modules/**']
  }),
  external(),
  terser()
];

export default {
  input: 'src/index.js',
  plugins,
  output: [cjs, esm]
};
