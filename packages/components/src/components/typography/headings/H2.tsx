import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__H2';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H2Props extends ElementProps {}

export const H2 = React.forwardRef<ElementType, H2Props>(({ children, className, ...others }, ref) => {
  return (
    <h2 {...others} className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </h2>
  );
});
