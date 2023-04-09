import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalBackdropProps extends ElementProps {
}
export declare const ModalBackdrop: React.ForwardRefExoticComponent<ModalBackdropProps & React.RefAttributes<HTMLDivElement>>;
export {};
