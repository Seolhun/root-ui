import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__H3';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H3Props extends ElementProps {}

export const H3 = React.forwardRef<ElementType, H3Props>(({ children, className, ...others }, ref) => {
  return (
    <h3 {...others} className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </h3>
  );
});
