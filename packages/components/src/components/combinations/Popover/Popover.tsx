import { PopoverButton } from './Popover.Button';
import { PopoverGroup } from './Popover.Group';
import { PopoverOverlay } from './Popover.Overlay';
import { PopoverPanel } from './Popover.Panel';
import { PopoverRoot } from './Popover.Root';

export const Popover = Object.assign(PopoverRoot, {
  Button: PopoverButton,
  /**
   * Group is a special case because it needs to be able to render multiple popover
   */
  Group: PopoverGroup,
  Overlay: PopoverOverlay,
  Panel: PopoverPanel,
});
