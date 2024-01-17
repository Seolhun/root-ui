import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Tab__List';
type ElementType = HTMLUListElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TabListProps extends ElementProps {}

export const TabList = React.forwardRef<ElementType, TabListProps>(({ children, className, ...others }, ref) => {
  return (
    <Tab.List
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'flex space-x-1',
        'border border-cream-3 dark:border-space-3',
        'text-space-2 dark:text-cream-2',
        'bg-cream-1 dark:bg-space-1',
        'p-1',
        'rounded',
        'list-none',
      )}
      as="ul"
      ref={ref}
    >
      {children}
    </Tab.List>
  );
});
