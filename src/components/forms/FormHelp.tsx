import React from 'react';
import clsx from 'clsx';

import { RootScale, toScaleMatch } from '../../system';
import { Box } from '../common';

type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormHelpProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const FormHelp = React.forwardRef<ElementType, FormHelpProps>(
  ({ children, className, scale = 'md', ...props }, ref) => {
    return (
      <Box
        {...props}
        as="p"
        ref={ref}
        scaleClassName={toScaleMatch({
          xs: () => 'text-2 py-1 px-2',
          sm: () => 'text-2.5 py-1 px-2',
          md: () => 'text-3 py-1 px-2.5',
          lg: () => 'text-3.5 py-1 px-2.5',
          xl: () => 'text-4 py-1 px-3',
        })(scale)}
        className={clsx(className, 'text-sm text-dark-7 dark:text-light-3')}
      >
        {children}
      </Box>
    );
  },
);

export { FormHelp };
export default FormHelp;
