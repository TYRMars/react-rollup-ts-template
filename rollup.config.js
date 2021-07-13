import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: "src/index.tsx",
  output: {
    file: '/dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    postcss({
      minimize: true,
    }),
    babel({
      extensions: ['.js', '.ts', 'tsx', 'jsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    typescript(),
    url(),
    svgr(),
    resolve(),
    terser(),
  ],
}
