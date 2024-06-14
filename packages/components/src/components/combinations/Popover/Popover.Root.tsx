import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Popover';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverProps {
  children: ((args: PopoverRootRenderArgs) => JSX.Element) | JSX.Element | JSX.Element[];
}

export interface PopoverRootRenderArgs {
  close: (
    focusableElement?: HTMLElement | React.MouseEvent<HTMLElement> | React.MutableRefObject<HTMLElement | null>,
  ) => void;
  open: boolean;
}

export const PopoverRoot = React.forwardRef<ElementType, Omit<ElementProps, 'children'> & PopoverProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover {...others} className={clsx(CLASSNAME, className, 'relative')} ref={ref}>
        {typeof children === 'function' ? ({ close, open }) => children({ close, open }) : children}
      </Popover>
    );
  },
);
