import clsx from 'clsx';
import * as React from 'react';

import { RootUIGroupContextValues, toScaleMatch } from '~/system';

const CLASSNAME = 'Root__FormLabel';
type ElementType = HTMLLabelElement;
type ElementProps = React.LabelHTMLAttributes<ElementType>;
export interface FormLabelProps extends ElementProps, RootUIGroupContextValues {
  required?: boolean;
}

export const FormLabel = React.forwardRef<ElementType, FormLabelProps>(
  ({ children, className, htmlFor, scale = 'md', required, ...others }, ref) => {
    return (
      <label
        {...others}
        ref={ref}
        aria-labelledby={htmlFor}
        htmlFor={htmlFor}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center flex-wrap',
          'text-space-1 dark:text-cream-1',
          toScaleMatch({
            xs: () => 'scale-text-xs',
            sm: () => 'scale-text-sm',
            md: () => 'scale-text-md',
            lg: () => 'scale-text-lg',
            xl: () => 'scale-text-xl',
          })(scale),
        )}
      >
        {children}
        {required && <sup className={clsx('text-danger dark:text-danger2', 'text-4')}>*</sup>}
      </label>
    );
  },
);
