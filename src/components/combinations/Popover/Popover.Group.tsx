import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Popover__Group';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverGroupProps {}

export const PopoverGroup = React.forwardRef<ElementType, ElementProps & PopoverGroupProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover.Group {...others} ref={ref} className={clsx(CLASSNAME, className)}>
        {children}
      </Popover.Group>
    );
  },
);
