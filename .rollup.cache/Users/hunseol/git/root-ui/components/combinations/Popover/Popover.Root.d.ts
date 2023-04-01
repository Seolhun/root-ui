import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PopoverRootProps extends Omit<ElementProps, 'children'> {
    children: ((args: PopoverRootRenderArgs) => JSX.Element) | JSX.Element;
}
export interface PopoverRootRenderArgs {
    open: boolean;
    close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null> | React.MouseEvent<HTMLElement>) => void;
}
export declare const PopoverRoot: React.ForwardRefExoticComponent<PopoverRootProps & React.RefAttributes<HTMLDivElement>>;
export {};
