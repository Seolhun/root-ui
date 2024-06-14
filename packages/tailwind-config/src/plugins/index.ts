import { heading } from './bases';
import { button } from './components';
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
  heading,
  /**
   * Components
   */
  button,
];
