import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PopoverOverlayProps extends ElementProps {
}
export declare const PopoverOverlay: React.ForwardRefExoticComponent<PopoverOverlayProps & React.RefAttributes<HTMLDivElement>>;
export {};
