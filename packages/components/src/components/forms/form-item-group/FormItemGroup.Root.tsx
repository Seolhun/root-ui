import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__FormItemGroup';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface FormItemGroupProps {}

export const FormItemGroupRoot = React.forwardRef<ElementType, ElementProps & FormItemGroupProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div {...others} className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </div>
    );
  },
);
