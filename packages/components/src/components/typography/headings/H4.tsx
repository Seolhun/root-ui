import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__H4';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H4Props extends ElementProps {}

export const H4 = React.forwardRef<ElementType, H4Props>(({ children, className, ...others }, ref) => {
  return (
    <h4 {...others} className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </h4>
  );
});
