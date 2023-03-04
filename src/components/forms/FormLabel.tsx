import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../system';
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

  /**
   * @default neutral
   */
  intent?: RootIntent;

  required?: boolean;
}

export const FormLabel = React.forwardRef<ElementType, FormLabelProps>(
  ({ children, className, htmlFor, scale = 'md', intent = 'neutral', required, ...others }, ref) => {
    return (
      <Box
        {...others}
        ref={ref}
        as="label"
        aria-labelledby={htmlFor}
        htmlFor={htmlFor}
        scaleClassName={toScaleMatch({
          xs: () => 'text-2 p-1',
          sm: () => 'text-2.5 p-1',
          md: () => 'text-3 p-1',
          lg: () => 'text-3.5 p-1',
          xl: () => 'text-4 p-1',
        })(scale)}
        className={clsx(CLASSNAME, className, 'flex items-center flex-wrap', 'text-space-1 dark:text-cream-1')}
      >
        {children}
        {required && <sup className={clsx('text-danger dark:text-danger', 'text-4')}>*</sup>}
      </Box>
    );
  },
);
