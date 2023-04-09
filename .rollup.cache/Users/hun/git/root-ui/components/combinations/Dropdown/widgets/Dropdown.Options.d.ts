import * as React from 'react';
interface ElementProps {
    children: React.ReactNode;
}
export interface DropdownOptionsProps extends ElementProps {
}
export declare const DropdownOptions: React.ForwardRefExoticComponent<DropdownOptionsProps & React.RefAttributes<HTMLUListElement>>;
export {};
