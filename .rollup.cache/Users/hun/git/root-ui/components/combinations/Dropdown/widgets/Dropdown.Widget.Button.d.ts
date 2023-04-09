import * as React from 'react';
import { DropdownWidgetButtonClassName } from './Dropdown.Widget.types';
interface ElementProps {
    className?: DropdownWidgetButtonClassName;
    children: React.ReactNode;
}
export interface DropdownWidgetButtonProps extends ElementProps {
}
export declare const DropdownWidgetButton: React.ForwardRefExoticComponent<DropdownWidgetButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
