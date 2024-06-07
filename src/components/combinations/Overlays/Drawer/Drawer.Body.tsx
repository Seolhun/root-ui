import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Drawer__Body';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerBodyProps extends ElementProps {
  children: React.ReactNode;
}

export const DrawerBody = React.forwardRef<ElementType, DrawerBodyProps>(({ className, children, ...others }, ref) => {
  return (
    <div
      ref={ref}
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'flex flex-1',
        'w-full',
        'border-cream-3 dark:border-space-3',
        'scroll-mr-2',
        'overflow-y-auto',
      )}
    >
      {children}
    </div>
  );
});
