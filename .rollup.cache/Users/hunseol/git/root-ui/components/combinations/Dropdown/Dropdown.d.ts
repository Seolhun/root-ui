/// <reference types="react" />
export declare const Dropdown: typeof import("./widgets/Dropdown.Widget.Root").DropdownWidgetRoot & {
    Button: import("react").ForwardRefExoticComponent<import("./widgets/Dropdown.Widget.Button").DropdownWidgetButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    OptionList: import("react").ForwardRefExoticComponent<import("./widgets/Dropdown.Widget.OptionList").DropdownWidgetOptionListProps & import("react").RefAttributes<HTMLUListElement>>;
    Option: import("react").ForwardRefExoticComponent<import("./widgets/Dropdown.Widget.Option").DropdownWidgetOptionProps<import("./widgets").DropdownOption> & import("react").RefAttributes<HTMLLIElement>>;
};
