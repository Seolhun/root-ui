import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalHeaderProps extends ElementProps {
    children: React.ReactNode;
}
declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
export { ModalHeader };
export default ModalHeader;
