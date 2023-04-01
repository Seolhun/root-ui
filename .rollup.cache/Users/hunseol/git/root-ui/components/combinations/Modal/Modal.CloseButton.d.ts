import * as React from 'react';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalCloseButtonProps extends ElementProps {
}
declare const ModalCloseButton: React.ForwardRefExoticComponent<ModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { ModalCloseButton };
export default ModalCloseButton;
