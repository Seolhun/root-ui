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
      ref={ref}
      as="ul"
      className={clsx(
        CLASSNAME,
        className,
        'flex space-x-1',
        'border border-cream-3 dark:border-space-3',
        'text-dark-9 dark:text-light-1',
        'bg-light-1/20 dark:bg-dark-9/20',
        'p-1',
        'rounded',
        'list-none',
      )}
    >
      {children}
    </Tab.List>
  );
});
