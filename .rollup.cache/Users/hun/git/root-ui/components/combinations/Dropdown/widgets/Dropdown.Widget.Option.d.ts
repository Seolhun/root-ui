import * as React from 'react';
import { DropdownOption, DropdownOptionState, DropdownWidgetOptionClassName } from './Dropdown.Widget.types';
interface ElementProps {
    className?: DropdownWidgetOptionClassName;
    children: (state: DropdownOptionState) => React.ReactNode;
}
export interface DropdownWidgetOptionProps<Option extends DropdownOption = DropdownOption> extends ElementProps {
    value: Option;
    disabled?: boolean;
}
export declare const DropdownWidgetOption: React.ForwardRefExoticComponent<DropdownWidgetOptionProps<DropdownOption> & React.RefAttributes<HTMLLIElement>>;
export {};
