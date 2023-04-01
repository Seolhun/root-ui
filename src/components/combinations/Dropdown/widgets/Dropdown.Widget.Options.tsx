import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

interface ElementProps {
  children: React.ReactNode;
}

export interface DropdownWidgetOptionsProps extends ElementProps {}

export const DropdownWidgetOptions = React.forwardRef<HTMLUListElement, DropdownWidgetOptionsProps>(
  ({ children }, ref) => {
    return (
      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options
          ref={ref}
          className={clsx(
            'absolute',
            'flex flex-1 flex-col',
            'w-full',
            'max-h-60 overflow-y-auto overflow-x-hidden',
            'mt-1 py-1',
            'bg-cream-1 dark:bg-space-1',
            'text-space-1 dark:text-cream-1',
            'border border-light-2 dark:border-space-2',
            'shadow-md ring-1 ring-black ring-opacity-5',
            'rounded',
            'focus:outline-none',
            'list-none',
          )}
        >
          {children}
        </Listbox.Options>
      </Transition>
    );
  },
);
