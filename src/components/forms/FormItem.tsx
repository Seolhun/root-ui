import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch, useRootUI } from '~/system';

import { FormHelp } from './FormHelp';
import { FormLabel, FormLabelProps } from './FormLabel';

const CLASSNAME = 'Root__FormItem';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormItemProps extends ElementProps {
  /**
   * scale
   * @default 'md'
   */
  scale?: RootScale;

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
  ({ children, className, label, htmlFor, help, required, ...others }, ref) => {
    const { scale } = useRootUI({
      scale: others?.scale ?? 'md',
    });

    return (
      <div
        {...others}
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'space-y-1',
          toScaleMatch({
            xs: () => 'scale-text-xs',
            sm: () => 'scale-text-sm',
            md: () => 'scale-text-md',
            lg: () => 'scale-text-lg',
            xl: () => 'scale-text-xl',
          })(scale),
        )}
      >
        {label && (
          <FormLabel scale={scale} htmlFor={htmlFor} required={required}>
            {label}
          </FormLabel>
        )}
        {children}
        {help && <FormHelp scale={scale}>{help}</FormHelp>}
      </div>
    );
  },
);
