import { headingPlugins } from './bases';
import { buttonPlugins, tagPlugins } from './components';
import { fill, outlined, scales, solid } from './utilities';
import { eventsVariant, intentVariant, layoutVariant, scaleVariant } from './variants';

export const RootPlugins = [
  /**
   * Variants
   */
  eventsVariant,
  intentVariant,
  layoutVariant,
  scaleVariant,
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
