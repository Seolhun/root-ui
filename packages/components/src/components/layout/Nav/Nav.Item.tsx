import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Layout__Nav__Item';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface NavItemProps {}

export const NavItem = React.forwardRef<ElementType, ElementProps & NavItemProps>(
  ({ className, children, ...others }) => {
    return (
      <div role="menuitem" {...others} className={clsx(CLASSNAME, className)}>
        {children}
      </div>
    );
  },
);
