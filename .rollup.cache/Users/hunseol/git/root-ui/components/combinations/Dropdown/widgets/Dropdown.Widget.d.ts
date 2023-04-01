/// <reference types="react" />
import { DropdownWidgetRoot } from './Dropdown.Widget.Root';
export declare const DropdownWidget: typeof DropdownWidgetRoot & {
    Button: import("react").ForwardRefExoticComponent<import("./Dropdown.Widget.Button").DropdownWidgetButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    Options: import("react").ForwardRefExoticComponent<import("./Dropdown.Widget.Options").DropdownWidgetOptionsProps & import("react").RefAttributes<HTMLUListElement>>;
    Option: import("react").ForwardRefExoticComponent<import("./Dropdown.Widget.Option").DropdownWidgetOptionProps<import("./Dropdown.Widget.types").DropdownOption> & import("react").RefAttributes<HTMLLIElement>>;
};
