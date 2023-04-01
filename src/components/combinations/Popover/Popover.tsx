import { PopoverButton } from './Popover.Button';
import { PopoverGroup } from './Popover.Group';
import { PopoverOverlay } from './Popover.Overlay';
import { PopoverPanel } from './Popover.Panel';
import { PopoverRoot } from './Popover.Root';

export const Popover = Object.assign(PopoverRoot, {
  Overlay: PopoverOverlay,
  Group: PopoverGroup,
  Button: PopoverButton,
  Panel: PopoverPanel,
});
