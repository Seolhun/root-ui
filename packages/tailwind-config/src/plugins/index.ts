import { headingPlugins } from './bases';
import { buttonPlugins, tagPlugins } from './components';
import { fill, scales } from './utilities';
import { eventsVariant, intentVariant, layoutVariant, scaleVariant } from './variants';

export const plugins = [
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
