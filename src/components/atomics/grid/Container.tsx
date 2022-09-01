import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'Root__Grid__Container';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ContainerProps extends ExtensionProps {}

const Container = React.forwardRef<Element, ContainerProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={classnames(CLASSNAME, className, 'max-w-7xl mx-auto', 'lg:px-8 sm:px-6 px-4', 'py-6')}
    >
      {children}
    </div>
  );
});

export { Container };
export default Container;
