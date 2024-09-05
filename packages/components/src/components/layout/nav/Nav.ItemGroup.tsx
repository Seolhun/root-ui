import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Layout__Nav__ItemGroup';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface NavItemGroupProps {
  /**
   * @todo To handle mobile size with break-points
   */
  mobile?: boolean;
}

export const NavItemGroup = React.forwardRef<ElementType, ElementProps & NavItemGroupProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div {...others} className={clsx(CLASSNAME, className, 'flex items-center', 'h-full', 'py-2')} ref={ref}>
        {children}
      </div>
    );
  },
);
