import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Layout__Body';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface LayoutBodyProps {}

export const LayoutBody = React.forwardRef<ElementType, ElementProps & LayoutBodyProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <main
        {...others}
        className={clsx(CLASSNAME, className, 'h-full', 'overflow-auto', 'transition-spacing duration-200 ease-in-out')}
        ref={ref}
      >
        {children}
      </main>
    );
  },
);
