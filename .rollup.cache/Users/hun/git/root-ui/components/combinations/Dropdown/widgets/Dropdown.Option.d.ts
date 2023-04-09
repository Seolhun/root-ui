import * as React from 'react';
import { DropdownOption as DropdownOptionType, DropdownOptionState } from './Dropdown.types';
interface ElementProps {
    className?: string | ((state: DropdownOptionState) => string);
    children: (state: DropdownOptionState) => React.ReactNode;
}
export interface DropdownOptionProps<Option extends DropdownOptionType = DropdownOptionType> extends ElementProps {
    value: Option;
    disabled?: boolean;
}
export declare const DropdownOption: React.ForwardRefExoticComponent<DropdownOptionProps<DropdownOptionType> & React.RefAttributes<HTMLLIElement>>;
export {};
