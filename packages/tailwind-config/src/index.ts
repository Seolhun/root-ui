import RootTailwindConfig from './RootUI.tailwind.config';
import { RootPlugins } from './plugins';

export * from './types';
export * from './constants';

export default [
  /**
   * theme is positioned first to allow other plugins to override
   */
  RootTailwindConfig,
  ...RootPlugins,
];
