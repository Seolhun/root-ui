import { headingPlugins } from './bases';
import { buttonPlugins, tagPlugins } from './components';
import { outlined, scales, solid } from './utilities';
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
