import * as React from 'react';
import { DropdownWidgetButtonClassName } from './Dropdown.Widget.types';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export interface DropdownWidgetButtonProps extends Omit<ElementProps, 'className'> {
    className?: DropdownWidgetButtonClassName;
}
export declare const DropdownWidgetButton: React.ForwardRefExoticComponent<DropdownWidgetButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
