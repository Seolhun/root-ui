import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch } from '../../../system';
import { useFormItemContext } from './FormItem.Context';

const CLASSNAME = 'Root__FormLabel';
type ElementType = HTMLLabelElement;
type ElementProps = React.LabelHTMLAttributes<ElementType>;
export interface FormLabelProps extends ElementProps {
  required?: boolean;
}

export const FormLabel = React.forwardRef<ElementType, FormLabelProps>(
  ({ className, children, htmlFor, required, ...others }, ref) => {
    const { scale } = useFormItemContext();

    return (
      <label
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center flex-wrap',
          'text-space-1 dark:text-cream-1',
          toScaleMatch({
            lg: () => 'scale-text-lg',
            md: () => 'scale-text-md',
            sm: () => 'scale-text-sm',
            xl: () => 'scale-text-xl',
            xs: () => 'scale-text-xs',
          })(scale),
        )}
        aria-labelledby={htmlFor}
        htmlFor={htmlFor}
        ref={ref}
      >
        {children}
        {required && <sup className={clsx('text-danger dark:text-danger2', 'text-6')}>*</sup>}
      </label>
    );
  },
);
