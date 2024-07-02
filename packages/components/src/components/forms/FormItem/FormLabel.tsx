import { Label, LabelProps } from '@headlessui/react';
import { RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch } from '~/system';

const CLASSNAME = 'Root__FormLabel';
type ElementType = HTMLLabelElement;

export interface FormLabelProps extends LabelProps {
  /**
   * @default md
   */
  scale?: RootScaleType;
}

export const FormLabel = React.forwardRef<ElementType, FormLabelProps>(
  ({ className, children, htmlFor, scale = 'md', ...others }, ref) => {
    return (
      <Label
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center flex-wrap',
          'text-space-1 dark:text-cream-1',
          'font-medium',
          toScaleMatch({
            lg: () => 'scale-text-lg',
            md: () => 'scale-text-md',
            sm: () => 'scale-text-sm',
            xl: () => 'scale-text-xl',
            xs: () => 'scale-text-xs',
          })(scale),
        )}
        aria-labelledby={htmlFor}
        htmlFor={htmlFor}
        ref={ref}
      >
        {children}
      </Label>
    );
  },
);
