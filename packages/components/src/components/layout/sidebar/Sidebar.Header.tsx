import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar__Header';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface SidebarHeaderProps extends ElementProps {}

export const SidebarHeader = React.forwardRef<ElementType, SidebarHeaderProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <section {...others} className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </section>
    );
  },
);
