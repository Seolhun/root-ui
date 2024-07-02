import { ListboxButton, ListboxButtonProps } from '@headlessui/react';
import * as React from 'react';

type ElementType = HTMLButtonElement;

export interface DropdownButtonProps extends ListboxButtonProps<'button'> {}

export const DropdownButton = React.forwardRef<ElementType, DropdownButtonProps>(({ children, ...others }, ref) => {
  return (
    <ListboxButton {...others} ref={ref}>
      {children}
    </ListboxButton>
  );
});
