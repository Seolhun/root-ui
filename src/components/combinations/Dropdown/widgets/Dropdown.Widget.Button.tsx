import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import * as Classes from './Dropdown.Classes';
import { DropdownWidgetButtonClassName } from './Dropdown.Widget.types';

type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface DropdownWidgetButtonProps extends Omit<ElementProps, 'className'> {
  className?: DropdownWidgetButtonClassName;
}

export const DropdownWidgetButton = React.forwardRef<HTMLButtonElement, DropdownWidgetButtonProps>(
  ({ className, children, ...others }: DropdownWidgetButtonProps, ref) => {
    return (
      <Listbox.Button
        {...others}
        ref={ref}
        className={(state) => {
          const { disabled } = state;
          return clsx(
            typeof className === 'function' ? className(state) : className,
            Classes.BaseItem,
            'relative',
            'text-space-1 dark:text-cream-1',
            'bg-cream-1 dark:bg-space-1',
            'shadow rounded',
            {
              'bg-neutral-1 dark:bg-neutral2-1 opacity-70 cursor-not-allowed': disabled,
            },
          );
        }}
      >
        {children}
      </Listbox.Button>
    );
  },
);
