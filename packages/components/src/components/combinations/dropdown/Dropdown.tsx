import { DropdownButton } from './Dropdown.Button';
import { DropdownOption } from './Dropdown.Option';
import { DropdownOptionList } from './Dropdown.OptionList';
import { DropdownRoot } from './Dropdown.Root';

export const Dropdown = Object.assign(DropdownRoot, {
  Button: DropdownButton,
  Option: DropdownOption,
  OptionList: DropdownOptionList,
});
