import * as React from 'react';
type ElementProps = React.HTMLAttributes<Element>;
export interface DrawerHeaderProps extends ElementProps {
    children?: React.ReactNode;
}
export declare const DrawerHeader: React.ForwardRefExoticComponent<DrawerHeaderProps & React.RefAttributes<HTMLDivElement>>;
export {};
