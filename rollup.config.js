import path from "path";

import { DEFAULT_EXTENSIONS } from '@babel/core'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import alias from "@rollup/plugin-alias";
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'

import pkg from './package.json'
const externals = Object.keys(pkg.peerDependencies || {})
const extensions = DEFAULT_EXTENSIONS.concat(['.ts', '.tsx'])
const projectRootDir = path.resolve(__dirname);

const commonPlugins = [
  alias({
    entries: [
      {
        find: '@/',
        replacement: path.resolve(projectRootDir, 'src')
      }
    ],
    customResolver: nodeResolve({
      extensions,
    })
  }),
  nodeResolve({
    mainFields: ['main', 'module'],
    extensions
  }),
  commonjs(),
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
  terser(),
  visualizer({
    filename: 'stats.html'
  })
]

const configGenerator = ({
  output,
  plugins = []
}) => ({
  input: 'src/index.ts',
  output: {
    ...output,
    sourcemap: false,
  },
  plugins: [
    ...commonPlugins,
    ...plugins
  ],
  external: [...externals]
})

export default [
  configGenerator({
    output: {
      file: pkg.main,
      format: 'cjs'
    }
  }),
  configGenerator({
    output: {
      file: pkg.module,
      format: 'es'
    }
  })
]
