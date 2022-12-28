import { PopoverWidgetRoot } from './Popover.Widget.Root';
import { PopoverWidgetButton } from './Popover.Widget.Button';

import { PopoverWidgetOverlay } from './Popover.Widget.Overlay';
import { PopoverWidgetPanel } from './Popover.Widget.Panel';
import { PopoverWidgetGroup } from './Popover.Widget.Group';

export const Popover = Object.assign(PopoverWidgetRoot, {
  Widgets: {
    Overlay: PopoverWidgetOverlay,
    Button: PopoverWidgetButton,
    Panel: PopoverWidgetPanel,
    Group: PopoverWidgetGroup,
  },
});
