import { ListboxOption, ListboxOptionProps } from '@headlessui/react';
import * as React from 'react';

import { DropdownOptionValue } from './Dropdown.types';

type ElementType = HTMLLIElement;

export interface DropdownOptionProps extends ListboxOptionProps<'li', DropdownOptionValue> {}

export const DropdownOption = React.forwardRef<ElementType, DropdownOptionProps>(({ children, ...others }, ref) => {
  return (
    <ListboxOption {...others} ref={ref}>
      {children}
    </ListboxOption>
  );
});
