import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar__MenuItem';
type ElementType = HTMLDivElement;
type ElementProps = React.AnchorHTMLAttributes<ElementType>;

export interface SidebarMenuProps {
  active: boolean;
  Icon?: React.ReactNode;
  /**
   * Whether the parent menu-group is open
   */
  isOpen: boolean;
}

export const SidebarMenuItem = React.forwardRef<ElementType, ElementProps & SidebarMenuProps>(
  ({ className, Icon, active, children, isOpen, ...others }, ref) => {
    return (
      <div
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'text-md',
          'cursor-pointer',
          'truncate',
          'transition duration-100',
        )}
        ref={ref}
        role="menuitem"
      >
        <div className="flex items-center justify-between">
          <div className={clsx('flex items-center', active ? '!text-primary text-bold' : 'text-neutral')}>
            {Icon && <div>{Icon}</div>}
            <span className={clsx('text-sm font-medium', 'ml-6', 'duration-200')}>{children}</span>
          </div>
        </div>
      </div>
    );
  },
);
