/// <reference types="react" />
import { DropdownWidgetRoot } from './Dropdown.Widget.Root';
export declare const DropdownWidget: typeof DropdownWidgetRoot & {
    Button: import("react").ForwardRefExoticComponent<import("./Dropdown.Widget.Button").DropdownWidgetButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    OptionList: import("react").ForwardRefExoticComponent<import("./Dropdown.Widget.OptionList").DropdownWidgetOptionListProps & import("react").RefAttributes<HTMLUListElement>>;
    Option: import("react").ForwardRefExoticComponent<import("./Dropdown.Widget.Option").DropdownWidgetOptionProps<import("./Dropdown.Widget.types").DropdownOption> & import("react").RefAttributes<HTMLLIElement>>;
};
