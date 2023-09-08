import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Grid__Container';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ContainerProps extends ElementProps {}

export const Container = React.forwardRef<ElementType, ContainerProps>(({ children, className, ...others }, ref) => {
  return (
    <div {...others} className={clsx(CLASSNAME, className, 'max-w-7xl mx-auto w-full', 'px-2 md:px-4')} ref={ref}>
      {children}
    </div>
  );
});
