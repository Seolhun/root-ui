import { Optional } from '~/utils/fx';
type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;
export type DropdownFloatingPlacement = Side | AlignedPlacement;
export type DropdownFloatingStrategy = 'absolute' | 'fixed';
export interface DropdownWidgetProps<Option extends DropdownOption, ActionOption = Option> {
    /**
     * Dropdown disabled state
     */
    disabled?: boolean;
    /**
     * Selected option
     */
    option: Optional<ActionOption>;
    /**
     * Change option handler
     */
    onChangeOption: (option: Optional<ActionOption>) => void;
    /**
     * Could be multi select
     */
    multiple?: boolean;
    /**
     * Dropdown floating placement
     */
    placement?: DropdownFloatingPlacement;
    /**
     * Dropdown floating strategy
     */
    strategy?: DropdownFloatingStrategy;
    /**
     * Dropdown floating offset
     * @default 5
     */
    offset?: number;
}
export interface DropdownOption extends Partial<DropdownOptionState> {
}
export interface DropdownOptionState {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
export interface DropdownButtonState {
    open: boolean;
    disabled: boolean;
    value: any;
}
export type DropdownWidgetButtonClassName = string | ((state: DropdownButtonState) => string);
export type DropdownWidgetOptionClassName = string | ((state: DropdownOptionState) => string);
export {};
