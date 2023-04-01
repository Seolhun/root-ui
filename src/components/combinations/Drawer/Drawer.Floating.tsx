import { FloatingPortal } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useDrawerContext } from './Drawer.Context';

import { useDocumentEvent } from '../../../hooks';

const CLASSNAME = 'Root__Drawer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerFloatingProps {}

export const DrawerFloating = React.forwardRef<ElementType, ElementProps & DrawerFloatingProps>(
  ({ className, children, ...others }, ref) => {
    const { show, onClose, onConfirm, placement, root } = useDrawerContext();

    useDocumentEvent('keydown', (e) => {
      switch (e.key) {
        case 'Escape': {
          onClose();
          break;
        }
        case 'Enter': {
          onConfirm?.();
          break;
        }
      }
    });

    return (
      <FloatingPortal root={root}>
        <div
          {...others}
          ref={ref}
          className={clsx(
            CLASSNAME,
            {
              hidden: !show,
            },
            'fixed',
            'inset-0 md:inset-0',
            'overflow-y-auto',
            'z-50',
          )}
        >
          <div
            tabIndex={-1}
            aria-hidden={show ? 'true' : 'false'}
            className={clsx(`${CLASSNAME}__Background`, 'fixed', 'inset-0 md:inset-0', 'bg-neutral-1', 'opacity-60')}
            onClick={onClose}
          />
          <div
            className={clsx(
              `${CLASSNAME}__Card`,
              className,
              'fixed',
              'bg-cream-1 text-space-1',
              'dark:bg-space-1 dark:text-cream-1',
              'border border-light-1 dark:border-dark-8',
              'rounded shadow',
              {
                'top-0 right-0 left-0 w-full md:w-full rounded-t-none': placement === 'top',
                'top-0 right-0 bottom-0 h-screen rounded-r-none': placement === 'right',
                'right-0 bottom-0 left-0 w-full md:w-full rounded-b-none': placement === 'bottom',
                'top-0 bottom-0 left-0 h-screen rounded-l-none': placement === 'left',
              },
              {
                'animate-[fade-in-top_0.2s_ease-in-out]': show && placement === 'top',
                'animate-[fade-in-right_0.2s_ease-in-out]': show && placement === 'right',
                'animate-[fade-in-bottom_0.2s_ease-in-out]': show && placement === 'bottom',
                'animate-[fade-in-left_0.2s_ease-in-out]': show && placement === 'left',
              },
              'flex flex-col flex-1 gap-4',
            )}
          >
            {children}
          </div>
        </div>
      </FloatingPortal>
    );
  },
);
