import { DropdownWidgetRoot } from './DropdownWidget.Root';
import { DropdownWidgetButton } from './DropdownWidget.Button';
import { DropdownWidgetOptions } from './DropdownWidget.Options';
import { DropdownWidgetOption } from './DropdownWidget.Option';

export const DropdownWidget = Object.assign(DropdownWidgetRoot, {
  Button: DropdownWidgetButton,
  Options: DropdownWidgetOptions,
  Option: DropdownWidgetOption,
});
