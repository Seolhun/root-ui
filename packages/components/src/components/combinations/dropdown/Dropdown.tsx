import { DropdownOption } from './Dropdown.Option';
import { DropdownPanel } from './Dropdown.Panel';
import { DropdownRoot } from './Dropdown.Root';
import { DropdownTrigger } from './Dropdown.Trigger';

/**
 * - Dropdown
 *   - Trigger
 *   - Panel
 *     - Option(s)
 */
export const Dropdown = Object.assign(DropdownRoot, {
  Option: DropdownOption,
  Panel: DropdownPanel,
  Trigger: DropdownTrigger,
});
