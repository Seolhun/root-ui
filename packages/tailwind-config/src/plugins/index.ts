import { headingPlugins } from './bases';
import { buttonPlugins, tagPlugins } from './components';
import { fill, outlined, scales, solid } from './utilities';
import { events } from './variants';

export const RootPlugins = [
  /**
   * Variants
   */
  events,
  /**
   * Utilities
   */
  scales,
  solid,
  outlined,
  fill,
  /**
   * Bases
   */
  headingPlugins,
  /**
   * Components
   */
  buttonPlugins,
  tagPlugins,
];
