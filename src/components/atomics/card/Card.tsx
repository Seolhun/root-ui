import clsx from 'clsx';
import * as React from 'react';

import { Box } from '~/components/common/box';
import { RootScale, RootScaleNone, toScaleMatch } from '~/system';

const CLASSNAME = 'Root__Card';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface CardProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale | RootScaleNone;
}

export const Card = React.forwardRef<ElementType, CardProps>(
  ({ children, className, scale = 'md', ...others }, ref) => {
    return (
      <Box
        {...others}
        ref={ref}
        as="div"
        scaleClassName={toScaleMatch({
          xs: () => 'py-2 px-3',
          sm: () => 'py-2.5 px-4',
          md: () => 'py-3 px-4',
          lg: () => 'py-3.5 px-5',
          xl: () => 'py-4 px-6',
        })(scale)}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'scale-p-md',
          'text-space-1 dark:text-cream-1',
          'bg-cream-1 dark:bg-space-1',
          'rounded shadow',
        )}
      >
        {children}
      </Box>
    );
  },
);
