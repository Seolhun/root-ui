import { TabList as HeadlessTabList, TabListProps as HeadlessTabListProps } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { OmitBy } from '~/types';

const CLASSNAME = 'Root__Tab__List';
type ElementType = HTMLUListElement;

export type TabListProps = OmitBy<HeadlessTabListProps<'ul'>, 'as'>;

export const TabList = React.forwardRef<ElementType, TabListProps>(({ children, className, ...others }, ref) => {
  return (
    <HeadlessTabList
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'flex space-x-1',
        'border border-neutral-2 dark:border-neutral-8',
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
    </HeadlessTabList>
  );
});
