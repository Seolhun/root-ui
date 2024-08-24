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
          'absolute',
          'h-full',
          'w-48 sidebar-expanded:w-132',
          'sidebar-expanded:translate-x-0',
          'transition-all duration-200 ease-in-out',
        )}
        ref={ref}
      >
        <svg
          className="size-12"
          fill="currentColor"
          height="1em"
          viewBox="0 0 32 32"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.382 8.675h13.943v13.943L32 31.293V0H.707zm13.236 14.65H8.675V9.382L0 .707V32h31.293z"></path>
        </svg>
        <div>{children}</div>
      </aside>
    );
  },
);
