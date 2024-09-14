import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__H1';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H1Props extends ElementProps {}

export const H1 = React.forwardRef<ElementType, H1Props>(({ children, className, ...others }, ref) => {
  return (
    <h1 {...others} className={clsx(CLASSNAME, className, 'mt-0 mb-3')} ref={ref}>
      {children}
    </h1>
  );
});
