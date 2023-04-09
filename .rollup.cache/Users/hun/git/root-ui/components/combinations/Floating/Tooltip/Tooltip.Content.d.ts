import * as React from 'react';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface TooltipContentProps extends ElementProps {
}
export declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLElement>>;
export {};
