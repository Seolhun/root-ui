import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch, useRootUI } from '../../system';
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

export const FormHelp = React.forwardRef<ElementType, FormHelpProps>(({ className, children, ...others }, ref) => {
  const { scale } = useRootUI({
    defaultScale: 'md',
    scale: others?.scale,
  });

  return (
    <Box
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'flex items-center flex-wrap',
        toScaleMatch({
          lg: () => 'scale-text-lg',
          md: () => 'scale-text-md',
          sm: () => 'scale-text-sm',
          xl: () => 'scale-text-xl',
          xs: () => 'scale-text-xs',
        })(scale),
      )}
      as="p"
      ref={ref}
    >
      {children}
    </Box>
  );
});
