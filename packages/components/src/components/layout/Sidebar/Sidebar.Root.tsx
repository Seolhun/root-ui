import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface SidebarRootProps extends ElementProps {}

/**
 * @see Layout.Body.tsx
 * Have to be Layout.Sidebar width and Layout.Body padding-x
 */
export const SidebarRoot = React.forwardRef<ElementType, SidebarRootProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <aside
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          '-translate-x-full sidebar-expanded:translate-x-0',
          'opacity-0 sidebar-expanded:opacity-100',
          'transition-all duration-200 ease-in-out',
        )}
        ref={ref}
      >
        {children}
      </aside>
    );
  },
);
