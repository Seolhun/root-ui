import * as React from 'react';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Popover__Button';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface PopoverButtonProps extends ElementProps {}

export const PopoverButton = React.forwardRef<ElementType, PopoverButtonProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover.Button {...others} ref={ref} className={clsx(CLASSNAME, className)}>
        {children}
      </Popover.Button>
    );
  },
);
