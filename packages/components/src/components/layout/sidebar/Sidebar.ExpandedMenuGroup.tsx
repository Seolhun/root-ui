import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar__ExpandedMenuGroup';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface SidebarExpandedMenuGroupProps {
  /**
   * Whether the parent menu-group is open
   */
  isOpen: boolean;
}

export const SidebarExpandedMenuGroup = React.forwardRef<ElementType, ElementProps & SidebarExpandedMenuGroupProps>(
  ({ className, children, isOpen, ...others }, ref) => {
    return (
      <div ref={ref} {...others} className={clsx(CLASSNAME, className, 'block')} role="menubar">
        <ul
          className={clsx('pl-3 mt-2', {
            hidden: !isOpen,
          })}
          role="menu"
        >
          {children}
        </ul>
      </div>
    );
  },
);
