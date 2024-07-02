import { defineConfig } from 'tsup';

import { legacyConfig, modernConfig } from '../../scripts/tsup.cjs';
import pkg from './package.json';

const external = Object.keys(pkg.peerDependencies || {});

export default defineConfig([
  modernConfig({
    clean: false,
    entry: ['src/index.{ts,tsx}', '!**/*.{test,spec,stories}.{ts,tsx}'],
    external,
  }),
  legacyConfig({
    clean: false,
    entry: ['src/index.{ts,tsx}', '!**/*.{test,spec,stories}.{ts,tsx}'],
    external,
  }),
]);
