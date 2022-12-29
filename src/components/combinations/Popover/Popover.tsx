import { PopoverRoot } from './Popover.Root';
import { PopoverButton } from './Popover.Button';
import { PopoverOverlay } from './Popover.Overlay';
import { PopoverGroup } from './Popover.Group';
import { PopoverPanel } from './Popover.Panel';

export const Popover = Object.assign(PopoverRoot, {
  Overlay: PopoverOverlay,
  Group: PopoverGroup,
  Button: PopoverButton,
  Panel: PopoverPanel,
});
