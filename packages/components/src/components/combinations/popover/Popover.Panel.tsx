import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Popover__Panel';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopoverPanelProps {
  children: ((args: PopoverPanelRenderPropArg) => JSX.Element) | JSX.Element | JSX.Element[];
}

interface PopoverPanelRenderPropArg {
  close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
  open: boolean;
}

export const PopoverPanel = React.forwardRef<ElementType, Omit<ElementProps, 'children'> & PopoverPanelProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <Popover.Panel
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'bg-cream-1 dark:bg-space-1',
          'text-space-1 dark:text-cream-1',
          'rounded shadow',
        )}
        ref={ref}
      >
        {children}
      </Popover.Panel>
    );
  },
);
