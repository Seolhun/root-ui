import clsx from 'clsx';
import * as React from 'react';

import { DrawerCloseButton } from './Drawer.CloseButton';

const CLASSNAME = 'Root__Drawer__Header';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface DrawerHeaderProps extends ElementProps {
  children?: React.ReactNode;
}

export const DrawerHeader = React.forwardRef<ElementType, DrawerHeaderProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <div
        ref={ref}
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'flex justify-between items-start',
          'border-cream-3 dark:border-space-3',
          'rounded-t',
        )}
      >
        <div className="break-all line-clamp-2">{children && children}</div>
        <DrawerCloseButton />
      </div>
    );
  },
);
