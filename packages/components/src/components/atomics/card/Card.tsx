import { RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { Box } from '../../../components/common/box';

const CLASSNAME = 'Root__Card';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface CardProps extends ElementProps {
  /**
   * @default md
   */
  scale?: RootScaleType;
}

export const Card = React.forwardRef<ElementType, CardProps>(
  ({ className, children, scale = 'md', ...others }, ref) => {
    return (
      <Box
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'text-space dark:text-cream',
          'bg-cream-0 dark:bg-space-0',
          'border border-cream-4 dark:border-space-4',
          'rounded-md shadow-md',
          `scale-p-${scale}`,
        )}
        as="div"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);
