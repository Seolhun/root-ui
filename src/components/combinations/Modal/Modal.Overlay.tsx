import clsx from 'clsx';
import * as React from 'react';

import { ModalWidgetOverlay } from './Modal.Widget.Overlay';

const CLASSNAME = 'Root__Modal__Overlay';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalOverlayProps extends ElementProps {}

const ModalOverlay = React.forwardRef<ElementType, ModalOverlayProps>(({ className, children, ...rests }, ref) => {
  return (
    <ModalWidgetOverlay
      {...rests}
      ref={ref}
      className={clsx(CLASSNAME, className, 'fixed', 'inset-0 md:inset-0', 'overflow-y-auto')}
    >
      {children}
    </ModalWidgetOverlay>
  );
});

export { ModalOverlay };
export default ModalOverlay;
