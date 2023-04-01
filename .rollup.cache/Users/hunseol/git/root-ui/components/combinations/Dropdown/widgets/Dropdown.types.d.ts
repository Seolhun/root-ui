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
