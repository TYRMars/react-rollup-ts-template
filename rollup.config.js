import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.unpkg,
      format: 'iife',
      sourcemap: true,
      name: pkg.outputname,
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    url({
      include: ['src/**/*.mp3', 'src/**/*.svg', 'src/**/*.png', 'src/**/*.ttf', 'src/**/*.otf'],
      limit: 14 * 1024,
      emitFiles: true,
      fileName: `${pkg.name}/[name][hash][extname]`,
      publicPath: './',
    }),
    babel({
      extensions: ['.js', '.ts', 'tsx', 'jsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    typescript(),
    svgr(),
    resolve(),
    terser(),
  ],
}
