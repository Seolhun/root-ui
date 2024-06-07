import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch, useRootUI } from '../../system';

import { FormHelp } from './FormHelp';
import { FormLabel, FormLabelProps } from './FormLabel';

const CLASSNAME = 'Root__FormItem';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormItemProps extends ElementProps {
  /**
   * Form help
   */
  help?: React.ReactNode;

  /**
   * Form label htmlFor
   */
  htmlFor?: FormLabelProps['htmlFor'];

  /**
   * Form label
   */
  label?: React.ReactNode;

  /**
   * Form label required
   */
  required?: boolean;

  /**
   * scale
   * @default 'md'
   */
  scale?: RootScale;
}

export const FormItem = React.forwardRef<ElementType, FormItemProps>(
  ({ children, className, help, htmlFor, label, required, ...others }, ref) => {
    const { scale } = useRootUI({
      scale: others?.scale ?? 'md',
    });

    return (
      <div
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'space-y-1',
          toScaleMatch({
            lg: () => 'scale-text-lg',
            md: () => 'scale-text-md',
            sm: () => 'scale-text-sm',
            xl: () => 'scale-text-xl',
            xs: () => 'scale-text-xs',
          })(scale),
        )}
        ref={ref}
      >
        {label && (
          <FormLabel htmlFor={htmlFor} required={required} scale={scale}>
            {label}
          </FormLabel>
        )}
        {children}
        {help && <FormHelp scale={scale}>{help}</FormHelp>}
      </div>
    );
  },
);
