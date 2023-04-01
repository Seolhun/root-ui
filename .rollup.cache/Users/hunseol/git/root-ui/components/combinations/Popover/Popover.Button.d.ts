import * as React from 'react';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export interface PopoverButtonProps extends ElementProps {
}
export declare const PopoverButton: React.ForwardRefExoticComponent<PopoverButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
