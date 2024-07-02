import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar__ExpandedMenuItem';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export interface SidebarExpandedMenuItemProps {
  active?: boolean;
}

export const SidebarExpandedMenuItem = React.forwardRef<ElementType, SidebarExpandedMenuItemProps & ElementProps>(
  ({ className, active, children, ...others }, ref) => {
    return (
      <li {...others} className={clsx(CLASSNAME, className, 'mb-2 last:mb-0', 'text-sm')} ref={ref} role="menuitem">
        <div className={clsx('flex items-center', active ? '!text-primary' : 'text-neutral')}>
          <span className={clsx('text-sm font-medium', 'ml-6', 'duration-200')}>{children}</span>
        </div>
      </li>
    );
  },
);
