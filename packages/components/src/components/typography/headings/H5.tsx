import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__H5';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H5Props extends ElementProps {}

export const H5 = React.forwardRef<ElementType, H5Props>(({ children, className, ...others }, ref) => {
  return (
    <h5 {...others} className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </h5>
  );
});
