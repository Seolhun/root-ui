
import { visualizer } from 'rollup-plugin-visualizer';

import { appBundler } from '../../scripts/rollup.cjs';

import pkg from './package.json';
const externals = Object.keys(pkg.peerDependencies || {});

export default [
  appBundler({
    external: externals,
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    plugins: [
      visualizer({
        filename: 'stats.html',
      }),
    ],
  }),
  appBundler({
    external: externals,
    output: {
      file: pkg.module,
      format: 'es',
    },
    plugins: [
      visualizer({
        filename: 'stats.esm.html',
      }),
    ],
  }),
];
