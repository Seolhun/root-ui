import React from 'react';
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
        'bg-white dark:bg-dark-9',
        'text-dark-9 dark:text-light-1',
        'border border-light-1 dark:border-dark-8',
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
