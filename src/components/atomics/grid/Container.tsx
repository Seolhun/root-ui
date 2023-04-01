import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Grid__Container';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ContainerProps extends ElementProps {}

export const Container = React.forwardRef<ElementType, ContainerProps>(({ className, children, ...others }, ref) => {
  return (
    <div {...others} ref={ref} className={clsx(CLASSNAME, className, 'max-w-8xl mx-auto w-full', 'px-2 md:px-4')}>
      {children}
    </div>
  );
});
