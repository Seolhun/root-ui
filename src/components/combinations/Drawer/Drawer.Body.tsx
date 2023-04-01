import * as React from 'react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Drawer__Body';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerBodyProps extends ElementProps {
  children: React.ReactNode;
}

export const DrawerBody = React.forwardRef<ElementType, DrawerBodyProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={clsx(
        CLASSNAME,
        className,
        'flex flex-1',
        'scroll-mr-2',
        'py-1 px-2',
        'border-cream-3 dark:border-space-3',
        'break-all',
        'overflow-y-auto',
      )}
    >
      {children}
    </div>
  );
});
