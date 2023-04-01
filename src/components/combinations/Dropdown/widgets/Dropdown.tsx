import { DropdownButton } from './Dropdown.Button';
import { DropdownOption } from './Dropdown.Option';
import { DropdownOptions } from './Dropdown.Options';
import { DropdownRoot } from './Dropdown.Root';

export const DropdownWidget = Object.assign(DropdownRoot, {
  Button: DropdownButton,
  Options: DropdownOptions,
  Option: DropdownOption,
});
