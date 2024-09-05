import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__FormItemGroupTitle';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface FormItemGroupTitleProps {}

export const FormItemGroupTitle = React.forwardRef<ElementType, ElementProps & FormItemGroupTitleProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div {...others} className={clsx(CLASSNAME, 'font-bold text-md', className)} ref={ref}>
        {children}
      </div>
    );
  },
);
