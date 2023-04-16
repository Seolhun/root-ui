import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch, useRootUI } from '~/system';

import { Box } from '../common';

const CLASSNAME = 'Root__FormHelp';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormHelpProps extends ElementProps {
  /**
   * scale
   * @default 'md'
   */
  scale?: RootScale;
}

export const FormHelp = React.forwardRef<ElementType, FormHelpProps>(({ children, className, ...others }, ref) => {
  const { scale } = useRootUI({
    scale: others?.scale,
    defaultScale: 'md',
  });

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
});
