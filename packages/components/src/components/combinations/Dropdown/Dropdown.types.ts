import { Optional } from '../../../utils/fx';
import { DropdownOption, DropdownOptionState } from './widgets';

export type DropdownIdentifyFunction<Option extends DropdownOption, ActionOption = Option> = (
  option: Optional<ActionOption | Option>,
) => string;

export type DropdownRenderOptionFunction<Option extends DropdownOption, ActionOption = Option> = (
  option: Optional<ActionOption | Option>,
  state?: DropdownOptionState,
) => React.ReactNode;

export type DropdownRenderSelectedOptionFunction<Option extends DropdownOption, ActionOption = Option> = (
  option: Optional<ActionOption>,
) => React.ReactNode;
