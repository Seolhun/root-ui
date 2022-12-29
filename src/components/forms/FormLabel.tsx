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
   * @default default
   */
  intent?: RootIntent;
}

const FormLabel = React.forwardRef<ElementType, FormLabelProps>(
  ({ children, className, htmlFor, scale = 'md', intent = 'default', ...others }, ref) => {
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
        intentClassName={toIntentMatch({
          default: () => clsx('text-default'),
          neutral: () => clsx('text-neutral'),
          light: () => clsx('text-light'),
          dark: () => clsx('text-dark'),
          primary: () => clsx('text-primary'),
          info: () => clsx('text-info'),
          success: () => clsx('text-success'),
          warning: () => clsx('text-warning'),
          danger: () => clsx('text-danger'),
        })(intent)}
        className={clsx(CLASSNAME, className, 'flex items-center flex-wrap')}
      >
        {children}
      </Box>
    );
  },
);

export { FormLabel };
export default FormLabel;
