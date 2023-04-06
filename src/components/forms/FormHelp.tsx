import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch } from '~/system';

import { Box } from '../common';

const CLASSNAME = 'Root__FormHelp';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormHelpProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const FormHelp = React.forwardRef<ElementType, FormHelpProps>(
  ({ children, className, scale = 'md', ...others }, ref) => {
    return (
      <Box
        {...others}
        as="p"
        ref={ref}
        scaleClassName={toScaleMatch({
          xs: () => 'scale-text-xs',
          sm: () => 'scale-text-sm',
          md: () => 'scale-text-md',
          lg: () => 'scale-text-lg',
          xl: () => 'scale-text-xl',
        })(scale)}
        className={clsx(CLASSNAME, className, 'flex items-center flex-wrap', 'text-space-1 dark:text-cream-1')}
      >
        {children}
      </Box>
    );
  },
);
