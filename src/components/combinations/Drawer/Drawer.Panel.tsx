import clsx from 'clsx';
import * as React from 'react';

import { useDrawerContext } from './Drawer.Context';

const CLASSNAME = 'Root__Drawer__Panel';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerPanelProps {}

export const DrawerPanel = React.forwardRef<ElementType, ElementProps & DrawerPanelProps>(
  ({ className, children, ...others }, ref) => {
    const { show, placement } = useDrawerContext();

    return (
      <div
        {...others}
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'fixed',
          'flex flex-col flex-1 gap-4',
          'bg-cream-1 text-space-1',
          'dark:bg-space-1 dark:text-cream-1',
          'rounded shadow',
          {
            'top-0 right-0 left-0 w-full md:w-full rounded-t-none': placement === 'top',
            'top-0 right-0 bottom-0 h-full rounded-r-none': placement === 'right',
            'right-0 bottom-0 left-0 w-full md:w-full rounded-b-none': placement === 'bottom',
            'top-0 bottom-0 left-0 h-full rounded-l-none': placement === 'left',
          },
          {
            'animate-[fade-in-top_0.2s_ease-in-out]': show && placement === 'top',
            'animate-[fade-in-right_0.2s_ease-in-out]': show && placement === 'right',
            'animate-[fade-in-bottom_0.2s_ease-in-out]': show && placement === 'bottom',
            'animate-[fade-in-left_0.2s_ease-in-out]': show && placement === 'left',
          },
        )}
      >
        {children}
      </div>
    );
  },
);
