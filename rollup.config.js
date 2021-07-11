import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: "src/index.tsx",
  output: {
    file: '/dist/bundle.js',
    format: 'cjs'
  },
  plugin: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}
