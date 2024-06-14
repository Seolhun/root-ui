import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch } from '../../../system';
import { FormItemContextProvider, FormItemContextValues } from './FormItem.Context';
import { FormLabelProps } from './FormLabel';

const CLASSNAME = 'Root__FormItemRoot';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormItemProps extends FormItemContextValues, ElementProps {
  /**
   * Form label htmlFor
   */
  htmlFor?: FormLabelProps['htmlFor'];
}

export const FormItemRoot = React.forwardRef<ElementType, FormItemProps>(
  ({ className, children, htmlFor, scale = 'md', ...others }, ref) => {
    return (
      <FormItemContextProvider scale={scale}>
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
          {children}
        </div>
      </FormItemContextProvider>
    );
  },
);
