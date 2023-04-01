import * as React from 'react';
import { DropdownButtonState } from './Dropdown.types';
interface ElementProps {
    className?: string | ((state: DropdownButtonState) => string);
    children: React.ReactNode;
}
export interface DropdownButtonProps extends ElementProps {
}
export declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
