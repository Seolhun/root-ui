import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Layout__Header';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface LayoutHeaderProps {}

export const LayoutHeader = React.forwardRef<ElementType, ElementProps & LayoutHeaderProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <header {...others} className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </header>
    );
  },
);
