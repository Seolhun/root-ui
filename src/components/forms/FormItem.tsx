import React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../system';
import FormLabel, { FormLabelProps } from './FormLabel';
import FormHelp from './FormHelp';
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
   * @default default
   */
  intent?: RootIntent;

  /**
   * Form label
   */
  label?: string;

  /**
   * Form label htmlFor
   */
  htmlFor?: FormLabelProps['htmlFor'];

  /**
   * Form help
   */
  help?: string;
}

const FormItem = React.forwardRef<ElementType, FormItemProps>(
  ({ children, className, scale = 'md', intent = 'default', label, htmlFor, help, ...others }, ref) => {
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
        className={clsx(CLASSNAME, className)}
      >
        {label && (
          <FormLabel scale={scale} intent={intent} htmlFor={htmlFor}>
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

export { FormItem };
export default FormItem;
