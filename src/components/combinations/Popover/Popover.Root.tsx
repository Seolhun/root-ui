import * as React from 'react';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Popover';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverRootProps extends Omit<ElementProps, 'children'> {
  children: ((args: PopoverRootRenderArgs) => JSX.Element) | JSX.Element;
}

export interface PopoverRootRenderArgs {
  open: boolean;
  close: (
    focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null> | React.MouseEvent<HTMLElement>,
  ) => void;
}

export const PopoverRoot = React.forwardRef<ElementType, PopoverRootProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <Popover {...others} ref={ref} className={clsx(CLASSNAME, className, 'relative')}>
        {typeof children === 'function' ? ({ close, open }) => children({ close, open }) : children}
      </Popover>
    );
  },
);
