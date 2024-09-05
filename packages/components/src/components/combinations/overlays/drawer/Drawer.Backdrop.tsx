import clsx from 'clsx';
import * as React from 'react';

import { ModalWidgetBackdrop } from '../widgets';

const CLASSNAME = 'Root__Drawer__Backdrop';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerBackdropProps extends ElementProps {}

export const DrawerBackdrop = React.forwardRef<ElementType, DrawerBackdropProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <ModalWidgetBackdrop
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'fixed',
          'inset-0 md:inset-0',
          'w-full h-full',
          'bg-dark-3',
          'opacity-60',
        )}
        ref={ref}
        tabIndex={-1}
      />
    );
  },
);
