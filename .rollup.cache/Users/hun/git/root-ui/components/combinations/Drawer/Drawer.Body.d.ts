import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface DrawerBodyProps extends ElementProps {
    children: React.ReactNode;
}
export declare const DrawerBody: React.ForwardRefExoticComponent<DrawerBodyProps & React.RefAttributes<HTMLDivElement>>;
export {};
