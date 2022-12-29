import * as React from 'react';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Popover';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverRootProps extends ElementProps {}

export const PopoverRoot = React.forwardRef<ElementType, PopoverRootProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover {...others} ref={ref} className={clsx(CLASSNAME, className, 'relative')}>
        {children}
      </Popover>
    );
  },
);
