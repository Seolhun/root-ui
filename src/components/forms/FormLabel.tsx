import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch } from '../../system';
import { Box } from '../common';

const CLASSNAME = 'Root__FormLabel';
type ElementType = HTMLLabelElement;
type ElementProps = React.LabelHTMLAttributes<ElementType>;
export interface FormLabelProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  required?: boolean;
}

export const FormLabel = React.forwardRef<ElementType, FormLabelProps>(
  ({ children, className, htmlFor, scale = 'md', required, ...others }, ref) => {
    return (
      <Box
        {...others}
        ref={ref}
        as="label"
        aria-labelledby={htmlFor}
        htmlFor={htmlFor}
        scaleClassName={toScaleMatch({
          xs: () => 'scale-text-xs',
          sm: () => 'scale-text-sm',
          md: () => 'scale-text-md',
          lg: () => 'scale-text-lg',
          xl: () => 'scale-text-xl',
        })(scale)}
        className={clsx(CLASSNAME, className, 'flex items-center flex-wrap', 'text-space-1 dark:text-cream-1')}
      >
        {children}
        {required && <sup className={clsx('text-danger dark:text-danger2', 'text-4')}>*</sup>}
      </Box>
    );
  },
);
