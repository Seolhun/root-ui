import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalOverlayProps extends ElementProps {
}
declare const ModalOverlay: React.ForwardRefExoticComponent<ModalOverlayProps & React.RefAttributes<HTMLDivElement>>;
export { ModalOverlay };
export default ModalOverlay;
