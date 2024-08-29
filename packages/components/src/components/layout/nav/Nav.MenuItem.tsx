import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Layout__Nav__Item';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface NavMenuItemProps {}

export const NavMenuItem = React.forwardRef<ElementType, ElementProps & NavMenuItemProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <div ref={ref} role="menuitem" {...others} className={clsx(CLASSNAME, className, 'min-h-20', 'cursor-pointer')}>
        {children}
      </div>
    );
  },
);
