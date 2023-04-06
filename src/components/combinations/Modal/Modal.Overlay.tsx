import clsx from 'clsx';
import * as React from 'react';

import { ModalWidget } from './Widgets';

const CLASSNAME = 'Root__Modal__Overlay';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalOverlayProps extends ElementProps {}

export const ModalOverlay = React.forwardRef<ElementType, ModalOverlayProps>(
  ({ className, children, ...rests }, ref) => {
    return (
      <ModalWidget.Overlay
        {...rests}
        ref={ref}
        className={clsx(CLASSNAME, className, 'fixed', 'inset-0 md:inset-0', 'overflow-y-auto')}
      >
        {children}
      </ModalWidget.Overlay>
    );
  },
);
