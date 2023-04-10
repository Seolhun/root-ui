import * as React from 'react';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PopoverProps {
    children: ((args: PopoverRootRenderArgs) => JSX.Element) | JSX.Element | JSX.Element[];
}
export interface PopoverRootRenderArgs {
    open: boolean;
    close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null> | React.MouseEvent<HTMLElement>) => void;
}
export declare const PopoverRoot: React.ForwardRefExoticComponent<Omit<ElementProps, "children"> & PopoverProps & React.RefAttributes<HTMLElement>>;
export {};
