import { DropdownWidgetRoot } from './Dropdown.Widget.Root';
import { DropdownWidgetButton } from './Dropdown.Widget.Button';
import { DropdownWidgetOptions } from './Dropdown.Widget.Options';
import { DropdownWidgetOption } from './Dropdown.Widget.Option';

export const DropdownWidget = Object.assign(DropdownWidgetRoot, {
  Button: DropdownWidgetButton,
  Options: DropdownWidgetOptions,
  Option: DropdownWidgetOption,
});
