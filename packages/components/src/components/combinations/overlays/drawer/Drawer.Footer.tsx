import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Drawer__Footer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerFooterProps extends ElementProps {
  children: React.ReactNode;
}

export const DrawerFooter = React.forwardRef<ElementType, DrawerFooterProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <div
        {...others}
        className={clsx(CLASSNAME, className, 'flex', 'border-cream-3 dark:border-space-3', 'rounded-b')}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
