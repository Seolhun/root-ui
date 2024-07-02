import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface SidebarRootProps extends ElementProps {}

export const SidebarRoot = React.forwardRef<ElementType, SidebarRootProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <aside {...others} className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </aside>
    );
  },
);
