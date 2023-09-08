import { DropdownWidgetButton } from './Dropdown.Widget.Button';
import { DropdownWidgetOption } from './Dropdown.Widget.Option';
import { DropdownWidgetOptionList } from './Dropdown.Widget.OptionList';
import { DropdownWidgetRoot } from './Dropdown.Widget.Root';

export const DropdownWidget = Object.assign(DropdownWidgetRoot, {
  Button: DropdownWidgetButton,
  Option: DropdownWidgetOption,
  OptionList: DropdownWidgetOptionList,
});
