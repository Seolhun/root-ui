import { Optional } from '../../../../utils/fx';

type Alignment = 'end' | 'start';
type Side = 'bottom' | 'left' | 'right' | 'top';
type AlignedPlacement = `${Side}-${Alignment}`;
export type DropdownFloatingPlacement = AlignedPlacement | Side;

export type DropdownFloatingStrategy = 'absolute' | 'fixed';

export interface DropdownWidgetProps<Option extends DropdownOption, ActionOption = Option> {
  /**
   * Dropdown disabled state
   */
  disabled?: boolean;

  /**
   * Could be multi select
   */
  multiple?: boolean;

  /**
   * Dropdown floating offset
   * @default 5
   */
  offset?: number;

  /**
   * Change option handler
   */
  onChangeOption: (option: Optional<ActionOption>) => void;

  /**
   * Selected option
   */
  option: Optional<ActionOption>;

  /**
   * Dropdown floating placement
   */
  placement?: DropdownFloatingPlacement;

  /**
   * Dropdown floating strategy
   */
  strategy?: DropdownFloatingStrategy;
}

export interface DropdownOption extends Partial<DropdownOptionState> {}

export interface DropdownOptionState {
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

export interface DropdownButtonState {
  disabled: boolean;
  open: boolean;
  value: any;
}

export type DropdownWidgetButtonClassName = ((state: DropdownButtonState) => string) | string;

export type DropdownWidgetOptionClassName = ((state: DropdownOptionState) => string) | string;
