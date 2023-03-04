import * as React from 'react';
import clsx from 'clsx';
import { RootScale, toScaleMatch } from '../../../system';

import { Box } from '../../common/box';

const CLASSNAME = 'Root__Card';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface CardProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const Card = React.forwardRef<ElementType, CardProps>(({ children, className, scale = 'md', ...rests }, ref) => {
  return (
    <Box
      {...rests}
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
        'text-space-1 dark:text-cream-1',
        'bg-cream-1 dark:bg-space-1',
        'border border-cream-3 dark:border-space-3',
        'rounded-xl shadow-md',
        'break-all',
      )}
    >
      {children}
    </Box>
  );
});

export { Card };
export default Card;
