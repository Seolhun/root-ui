import { RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

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
  ({ children, className, scale = 'md', ...others }, ref) => {
    return (
      <div
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'text-space dark:text-cream',
          'bg-cream-0 dark:bg-space-0',
          'border border-cream-4 dark:border-space-4',
          'rounded shadow-md',
          `scale-p-${scale}`,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
