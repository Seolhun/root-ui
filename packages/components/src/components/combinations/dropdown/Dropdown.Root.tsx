import { Listbox, ListboxProps } from '@headlessui/react';
import * as React from 'react';

import { DropdownOptionValue } from './Dropdown.types';

type ElementType = HTMLDivElement;

export interface DropdownProps extends ListboxProps<'div', DropdownOptionValue> {}

export const DropdownRoot = React.forwardRef<ElementType, DropdownProps>(({ children, ...others }, ref) => {
  return (
    <Listbox as="div" {...others} ref={ref}>
      {children}
    </Listbox>
  );
});
