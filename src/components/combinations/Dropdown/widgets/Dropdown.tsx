import { DropdownRoot } from './Dropdown.Root';
import { DropdownButton } from './Dropdown.Button';
import { DropdownOptions } from './Dropdown.Options';
import { DropdownOption } from './Dropdown.Option';

export const DropdownWidget = Object.assign(DropdownRoot, {
  Button: DropdownButton,
  Options: DropdownOptions,
  Option: DropdownOption,
});
