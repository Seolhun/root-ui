import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch } from '../../system';
import { FormLabel, FormLabelProps } from './FormLabel';
import { FormHelp } from './FormHelp';
import { Box } from '../common';

const CLASSNAME = 'Root__FormItem';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormItemProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default neutral
   */
  intent?: RootIntent;

  /**
   * Form label
   */
  label?: React.ReactNode;

  /**
   * Form help
   */
  help?: React.ReactNode;

  /**
   * Form label htmlFor
   */
  htmlFor?: FormLabelProps['htmlFor'];

  /**
   * Form label required
   */
  required?: boolean;
}

export const FormItem = React.forwardRef<ElementType, FormItemProps>(
  ({ children, className, scale = 'md', intent = 'neutral', label, htmlFor, help, required, ...others }, ref) => {
    return (
      <Box
        {...others}
        ref={ref}
        as="div"
        scaleClassName={toScaleMatch({
          xs: () => 'text-2 p-1',
          sm: () => 'text-2.5 p-1',
          md: () => 'text-3 p-1',
          lg: () => 'text-3.5 p-1',
          xl: () => 'text-4 p-1',
        })(scale)}
        className={clsx(CLASSNAME, className)}
      >
        {label && (
          <FormLabel scale={scale} intent={intent} htmlFor={htmlFor} required={required}>
            {label}
          </FormLabel>
        )}
        {children}
        {help && (
          <FormHelp scale={scale} intent={intent}>
            {help}
          </FormHelp>
        )}
      </Box>
    );
  },
);
