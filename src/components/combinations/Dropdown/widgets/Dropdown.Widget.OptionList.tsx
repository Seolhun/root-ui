import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

type ElementType = HTMLUListElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DropdownWidgetOptionListProps extends ElementProps {}

export const DropdownWidgetOptionList = React.forwardRef<HTMLUListElement, DropdownWidgetOptionListProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options
          {...others}
          className={clsx(
            className,
            'absolute',
            'flex flex-1 flex-col',
            'w-full',
            'bg-cream-1 dark:bg-space-1',
            'text-space-1 dark:text-cream-1',
            'shadow rounded',
            'overflow-y-auto overflow-x-hidden',
            'focus:outline-none',
            'list-none',
          )}
          ref={ref}
        >
          {children}
        </Listbox.Options>
      </Transition>
    );
  },
);
