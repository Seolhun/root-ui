import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__FormItemGroupDescription';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface FormItemGroupDescriptionProps {}

export const FormItemGroupDescription = React.forwardRef<ElementType, ElementProps & FormItemGroupDescriptionProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div
        {...others}
        className={clsx(CLASSNAME, 'text-xs', 'text-neutral dark:text-neutral', 'whitespace-pre-wrap', className)}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
