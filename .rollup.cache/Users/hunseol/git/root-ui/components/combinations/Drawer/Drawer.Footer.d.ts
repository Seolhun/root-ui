import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface DrawerFooterProps extends ElementProps {
    children: React.ReactNode;
}
export declare const DrawerFooter: React.ForwardRefExoticComponent<DrawerFooterProps & React.RefAttributes<HTMLDivElement>>;
export {};
