import * as React from 'react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Grid__Container';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ContainerProps extends ElementProps {}

const Container = React.forwardRef<ElementType, ContainerProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={clsx(CLASSNAME, className, 'max-w-7xl mx-auto', 'lg:px-8 sm:px-6 px-4', 'py-6')}
    >
      {children}
    </div>
  );
});

export { Container };
export default Container;
