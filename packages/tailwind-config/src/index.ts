import { plugins } from './plugins';
import RootTailwindConfig from './root-tailwind.config';

export * from './constants';
export * from './types';

export default [
  /**
   * theme is positioned first to allow other plugins to override
   */
  RootTailwindConfig,
  ...plugins,
];
