import { DropdownWidgetButton } from './Dropdown.Widget.Button';
import { DropdownWidgetOption } from './Dropdown.Widget.Option';
import { DropdownWidgetOptions } from './Dropdown.Widget.Options';
import { DropdownWidgetRoot } from './Dropdown.Widget.Root';

export const DropdownWidget = Object.assign(DropdownWidgetRoot, {
  Button: DropdownWidgetButton,
  Options: DropdownWidgetOptions,
  Option: DropdownWidgetOption,
});
