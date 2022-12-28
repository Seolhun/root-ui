import React from 'react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Drawer__Footer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerFooterProps extends ElementProps {
  children: React.ReactNode;
}

export const DrawerFooter = React.forwardRef<ElementType, DrawerFooterProps>(
  ({ className, children, ...rests }: DrawerFooterProps) => {
    return (
      <div {...rests} className={clsx(CLASSNAME, className, 'flex', 'pb-4 px-4', 'rounded-b')}>
        {children}
      </div>
    );
  },
);
