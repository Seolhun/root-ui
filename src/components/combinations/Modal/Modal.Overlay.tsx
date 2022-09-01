import React from 'react';
import classNames from 'classnames';

import { ModalWidgetOverlay } from './Modal.Widget.Overlay';

const CLASSNAME = 'Root__Modal__Overlay';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalOverlayProps {}

const ModalOverlay = React.forwardRef<Element, ModalOverlayProps & ElementProps>(
  ({ className, children, ...rests }, ref) => {
    return (
      <ModalWidgetOverlay
        {...rests}
        ref={ref}
        className={classNames(CLASSNAME, className, 'fixed', 'inset-0 md:inset-0', 'overflow-y-auto')}
      >
        {children}
      </ModalWidgetOverlay>
    );
  },
);

export { ModalOverlay };
export default ModalOverlay;
