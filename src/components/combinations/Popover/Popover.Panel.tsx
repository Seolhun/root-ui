import * as React from 'react';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Popover__Panel';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverPanelProps extends ElementProps {}

export const PopoverPanel = React.forwardRef<ElementType, PopoverPanelProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover.Panel
        {...others}
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'bg-cream-1 text-space-1',
          'dark:bg-space-1 dark:text-cream-1',
          'border border-light-1 dark:border-dark-8',
          'rounded shadow',
          'break-all',
        )}
      >
        {children}
      </Popover.Panel>
    );
  },
);
