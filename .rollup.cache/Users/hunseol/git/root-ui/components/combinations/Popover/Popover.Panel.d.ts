import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PopoverPanelProps extends ElementProps {
}
export declare const PopoverPanel: React.ForwardRefExoticComponent<PopoverPanelProps & React.RefAttributes<HTMLDivElement>>;
export {};
