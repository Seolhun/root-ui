import * as React from 'react';
import { DropdownOption, DropdownOptionState, DropdownWidgetOptionClassName } from './Dropdown.Widget.types';
type ElementType = HTMLLIElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface DropdownWidgetOptionProps<Option extends DropdownOption = DropdownOption> extends Omit<ElementProps, 'children' | 'className'> {
    className?: DropdownWidgetOptionClassName;
    children: (state: DropdownOptionState) => React.ReactNode;
    value: Option;
    disabled?: boolean;
}
export declare const DropdownWidgetOption: React.ForwardRefExoticComponent<DropdownWidgetOptionProps<DropdownOption> & React.RefAttributes<HTMLLIElement>>;
export {};
