import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import * as Classes from './Dropdown.Classes';
import { DropdownOption, DropdownOptionState, DropdownWidgetOptionClassName } from './Dropdown.Widget.types';

type ElementType = HTMLLIElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DropdownWidgetOptionProps<Option extends DropdownOption = DropdownOption>
  extends Omit<ElementProps, 'children' | 'className'> {
  children: (state: DropdownOptionState) => React.ReactNode;

  className?: DropdownWidgetOptionClassName;

  disabled?: boolean;

  value: Option;
}

export const DropdownWidgetOption = React.forwardRef<HTMLLIElement, DropdownWidgetOptionProps>(
  ({ className, children, disabled, value }, ref) => {
    return (
      <Listbox.Option
        className={(state) => {
          const { active, disabled, selected } = state;
          return clsx(
            className,
            Classes.BaseItem,
            {
              'bg-neutral-1 dark:bg-neutral-1 text-space-1 dark:text-cream-1': active && !selected,
              'bg-primary dark:bg-primary text-cream-1 dark:text-cream-1': selected,
            },
            disabled ? 'bg-neutral dark:bg-neutral opacity-70 cursor-not-allowed' : 'cursor-pointer',
          );
        }}
        disabled={disabled}
        ref={ref}
        value={value}
      >
        {(state: DropdownOptionState) => <>{children(state)}</>}
      </Listbox.Option>
    );
  },
);
