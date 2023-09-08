import clsx from 'clsx';
import * as React from 'react';

import { Box } from '~/components/common/box';

const CLASSNAME = 'Root__Card';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface CardProps extends ElementProps {}

export const Card = React.forwardRef<ElementType, CardProps>(({ children, className, ...others }, ref) => {
  return (
    <Box
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'block',
        'text-space-1 dark:text-cream-1',
        'bg-cream-1 dark:bg-space-1',
        'rounded shadow',
      )}
      as="div"
      ref={ref}
    >
      {children}
    </Box>
  );
});
