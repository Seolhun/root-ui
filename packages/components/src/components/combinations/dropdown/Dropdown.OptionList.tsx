import { ListboxOptions, ListboxOptionsProps } from '@headlessui/react';
import * as React from 'react';

type ElementType = HTMLUListElement;

export interface DropdownOptionListProps extends ListboxOptionsProps<'ul'> {}

export const DropdownOptionList = React.forwardRef<ElementType, DropdownOptionListProps>(
  ({ children, ...others }, ref) => {
    return (
      <ListboxOptions {...others} ref={ref}>
        {children}
      </ListboxOptions>
    );
  },
);
