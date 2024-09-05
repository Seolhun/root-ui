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
  ({ children, className, ...others }, ref) => {
    return (
      <aside
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'absolute',
          'h-full',
          'w-48 sidebar-expanded:w-132',
          'sidebar-expanded:translate-x-0',
          'transition-all duration-200 ease-in-out',
        )}
        ref={ref}
      >
        {children}
      </aside>
    );
  },
);
