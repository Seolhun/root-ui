import * as React from 'react';
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
}

export const FormItem = React.forwardRef<ElementType, FormItemProps>(
  ({ children, className, scale = 'md', intent = 'neutral', label, htmlFor, help, ...others }, ref) => {
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
          neutral: () => clsx('text-neutral'),
          light: () => clsx('text-light'),
          dark: () => clsx('text-dark'),
          primary: () => clsx('text-primary'),
          info: () => clsx('text-info'),
          success: () => clsx('text-success'),
          accent: () => clsx('text-accent'),
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
