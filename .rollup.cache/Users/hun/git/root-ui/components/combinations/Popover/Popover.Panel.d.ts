import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PopoverPanelProps {
    children: ((args: PopoverPanelRenderPropArg) => JSX.Element) | JSX.Element | JSX.Element[];
}
interface PopoverPanelRenderPropArg {
    open: boolean;
    close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
}
export declare const PopoverPanel: React.ForwardRefExoticComponent<Omit<ElementProps, "children"> & PopoverPanelProps & React.RefAttributes<HTMLDivElement>>;
export {};
