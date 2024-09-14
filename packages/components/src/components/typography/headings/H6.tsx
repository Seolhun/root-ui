import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__H6';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H6Props extends ElementProps {}

export const H6 = React.forwardRef<ElementType, H6Props>(({ children, className, ...others }, ref) => {
  return (
    <h6 {...others} className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </h6>
  );
});
