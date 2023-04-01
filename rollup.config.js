import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import { visualizer } from 'rollup-plugin-visualizer';

import pkg from './package.json';
const externals = Object.keys(pkg.peerDependencies || {});
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const commonPlugins = [
  nodeResolve({
    mainFields: ['main', 'module'],
    extensions,
  }),
  commonjs(),
  json(),
  typescript({
    tsconfig: './tsconfig.build.json',
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: /node_modules/,
    extensions,
  }),
  postcss({
    config: {
      path: './postcss.config.js',
    },
    // modules: true,
    minimize: true,
    use: {
      sass: scss,
    },
    extract: true,
  }),
];

const appBundler = ({ output, plugins = [] }) => ({
  input: 'src/index.ts',
  output: {
    ...output,
    sourcemap: false,
  },
  plugins: commonPlugins.concat(plugins),
  external: externals,
});

export default [
  appBundler({
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    plugins: [
      terser(),
      visualizer({
        filename: 'stats.html',
      }),
    ],
  }),
  appBundler({
    output: {
      file: pkg.module,
      format: 'es',
    },
    plugins: [
      terser(),
      visualizer({
        filename: 'stats.esm.html',
      }),
    ],
  }),
];
