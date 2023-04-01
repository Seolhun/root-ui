import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Popover__Overlay';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverOverlayProps extends ElementProps {}

export const PopoverOverlay = React.forwardRef<ElementType, PopoverOverlayProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover.Overlay
        {...others}
        ref={ref}
        className={clsx(CLASSNAME, className, 'fixed inset-0 bg-black opacity-30')}
      >
        {children}
      </Popover.Overlay>
    );
  },
);
