import aspectRatio from '@tailwindcss/aspect-ratio';

import RootTailwindConfig from './RootUI.tailwind.config';
import heading from './plugins/heading';
import outlined from './plugins/outlined';
import scales from './plugins/scales';
import solid from './plugins/solid';
import variants from './plugins/variants';

export default [
  aspectRatio,
  /**
   * theme is positioned first to allow other plugins to override
   */
  RootTailwindConfig,
  /**
   * Plugins
   */
  scales,
  heading,
  solid,
  outlined,
  /**
   * Variants
   */
  variants,
];
