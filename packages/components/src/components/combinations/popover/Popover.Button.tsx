import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Popover__Button';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface PopoverButtonProps {}

export const PopoverButton = React.forwardRef<ElementType, ElementProps & PopoverButtonProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <Popover.Button {...others} className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </Popover.Button>
    );
  },
);
