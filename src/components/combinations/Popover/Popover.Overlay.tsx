import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Popover__Overlay';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverOverlayProps {}

export const PopoverOverlay = React.forwardRef<ElementType, ElementProps & PopoverOverlayProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover.Overlay
        {...others}
        className={clsx(CLASSNAME, className, 'fixed inset-0 bg-black opacity-30')}
        ref={ref}
      >
        {children}
      </Popover.Overlay>
    );
  },
);
