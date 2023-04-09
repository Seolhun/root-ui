/// <reference types="react" />
import { DropdownRoot } from './Dropdown.Root';
export declare const DropdownWidget: typeof DropdownRoot & {
    Button: import("react").ForwardRefExoticComponent<import("./Dropdown.Button").DropdownButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    Options: import("react").ForwardRefExoticComponent<import("./Dropdown.Options").DropdownOptionsProps & import("react").RefAttributes<HTMLUListElement>>;
    Option: import("react").ForwardRefExoticComponent<import("./Dropdown.Option").DropdownOptionProps<import("./Dropdown.types").DropdownOption> & import("react").RefAttributes<HTMLLIElement>>;
};
