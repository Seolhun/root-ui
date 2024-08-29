import clsx from 'clsx';
import * as React from 'react';

import { ModalWidgetOverlay } from '../widgets';

const CLASSNAME = 'Root__Drawer__Overlay';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerOverlayProps extends ElementProps {}

export const DrawerOverlay = React.forwardRef<ElementType, DrawerOverlayProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <ModalWidgetOverlay
        {...others}
        className={clsx(CLASSNAME, className, 'fixed', 'inset-0 md:inset-0', 'overflow-y-auto')}
        ref={ref}
      >
        {children}
      </ModalWidgetOverlay>
    );
  },
);
