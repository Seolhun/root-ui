import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { DropdownButtonState } from './Dropdown.types';

interface ElementProps {
  className?: string | ((state: DropdownButtonState) => string);

  children: React.ReactNode;
}

export interface DropdownButtonProps extends ElementProps {}

export const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ className, children }: DropdownButtonProps, ref) => {
    return (
      <Listbox.Button
        ref={ref}
        className={(state) => {
          const { disabled } = state;
          return clsx(
            typeof className === 'function' ? className(state) : className,
            'relative',
            'flex flex-1 items-center',
            'w-full',
            'py-2 px-4',
            'bg-cream-1 dark:bg-space-1',
            'text-space-1 dark:text-cream-1',
            'border border-cream-3 dark:border-space-3',
            'shadow-md rounded',
            'cursor-pointer',
            {
              'bg-light-2 dark:bg-dark-7 opacity-70 cursor-not-allowed': disabled,
            },
          );
        }}
      >
        {children}
      </Listbox.Button>
    );
  },
);
