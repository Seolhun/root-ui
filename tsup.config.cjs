import { defineConfig } from 'tsup';

import pkg from './package.json';
import { legacyConfig, modernConfig } from './scripts/tsup.cjs';

const external = Object.keys(pkg.peerDependencies || {});

export default defineConfig([
  modernConfig({
    entry: ['src/index.{ts,tsx}', '!**/*.{test,spec,stories}.{ts,tsx}'],
    external,
    loader: {
      '.scss': 'css', // This tells tsup to treat .scss files as CSS
    },
  }),
  legacyConfig({
    entry: ['src/index.{ts,tsx}', '!**/*.{test,spec,stories}.{ts,tsx}'],
    external,
    loader: {
      '.scss': 'css', // This tells tsup to treat .scss files as CSS
    },
  }),
]);
