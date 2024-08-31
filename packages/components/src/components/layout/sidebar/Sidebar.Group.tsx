import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar__Group';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface SidebarGroupProps {
  Title?: React.ReactNode;
}

export const SidebarGroup = React.forwardRef<ElementType, ElementProps & SidebarGroupProps>(
  ({ className, Title, children, ...others }, ref) => {
    return (
      <nav
        ref={ref}
        {...others}
        className={clsx(CLASSNAME, className, 'relative group', 'space-y-4', 'px-4')}
        role="menubar"
      >
        {Title && (
          <h1 className={clsx('text-cream dark:text-space', 'text-xs uppercase', 'pl-2')}>
            <span className="block">{Title}</span>
          </h1>
        )}

        {children}
      </nav>
    );
  },
);
