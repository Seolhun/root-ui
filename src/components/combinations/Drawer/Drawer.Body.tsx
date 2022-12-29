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
      className={clsx(CLASSNAME, className, 'flex flex-1', 'px-4', 'break-all', 'border-light-2', 'overflow-y-auto')}
    >
      {children}
    </div>
  );
});
