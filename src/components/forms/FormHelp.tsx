import clsx from 'clsx';
import * as React from 'react';

import { RootUIGroupContextValues, toScaleMatch } from '~/system';

import { Box } from '../common';

const CLASSNAME = 'Root__FormHelp';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormHelpProps extends ElementProps, RootUIGroupContextValues {}

export const FormHelp = React.forwardRef<ElementType, FormHelpProps>(
  ({ children, className, scale = 'md', ...others }, ref) => {
    return (
      <Box
        {...others}
        as="p"
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center flex-wrap',
          'text-space-1 dark:text-cream-1',
          toScaleMatch({
            xs: () => 'scale-text-xs',
            sm: () => 'scale-text-sm',
            md: () => 'scale-text-md',
            lg: () => 'scale-text-lg',
            xl: () => 'scale-text-xl',
          })(scale),
        )}
      >
        {children}
      </Box>
    );
  },
);
