import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalFooterProps extends ElementProps {
    children: React.ReactNode;
}
export declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
export {};
