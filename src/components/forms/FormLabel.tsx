import React from 'react';
import clsx from 'clsx';

import { RootScale, toScaleMatch } from '../../system';
import { Box } from '../common';

type ElementType = HTMLLabelElement;
type ElementProps = React.LabelHTMLAttributes<ElementType>;
export interface FormLabelProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const FormLabel = React.forwardRef<ElementType, FormLabelProps>(
  ({ children, className, htmlFor, scale = 'md', ...rests }, ref) => {
    return (
      <Box
        {...rests}
        ref={ref}
        as="label"
        aria-labelledby={htmlFor}
        htmlFor={htmlFor}
        scaleClassName={toScaleMatch({
          xs: () => 'text-2 py-1 px-2',
          sm: () => 'text-2.5 py-1 px-2',
          md: () => 'text-3 py-1 px-2.5',
          lg: () => 'text-3.5 py-1 px-2.5',
          xl: () => 'text-4 py-1 px-3',
        })(scale)}
        className={clsx(className, 'block', 'text-base font-medium text-dark-9 dark:text-light-1')}
      >
        {children}
      </Box>
    );
  },
);

export { FormLabel };
export default FormLabel;
