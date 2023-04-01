import * as React from 'react';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface DrawerCloseButtonProps extends ElementProps {
}
declare const DrawerCloseButton: React.ForwardRefExoticComponent<DrawerCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { DrawerCloseButton };
export default DrawerCloseButton;
