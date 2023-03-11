import * as React from 'react';
import { FloatingPortal } from '@floating-ui/react';
import clsx from 'clsx';

import { Card } from '../../atomics';
import { useDocumentEvent, useLockScrollClassName } from '../../../hooks';
import { useDrawerContext } from './Drawer.Context';

const CLASSNAME = 'Root__Drawer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerFloatingProps {}

export const DrawerFloating = React.forwardRef<ElementType, ElementProps & DrawerFloatingProps>(
  ({ className, children, ...others }, ref) => {
    const { show, onClose, onConfirm, placement, root } = useDrawerContext();

    useLockScrollClassName(show);

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
            className,
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
            className={clsx(CLASSNAME, className, 'fixed', 'inset-0 md:inset-0', 'bg-neutral-1', 'opacity-60')}
            onClick={onClose}
          />
          <Card
            className={clsx(
              'flex flex-col flex-1 gap-4',
              {
                'fixed top-0 right-0 left-0 h-4/6 w-full md:w-full rounded-t-none': placement === 'top',
                'fixed top-0 right-0 bottom-0 h-screen w-9/12 rounded-r-none': placement === 'right',
                'fixed top-0 bottom-0 left-0 h-screen w-9/12 rounded-l-none': placement === 'left',
                'fixed right-0 bottom-0 left-0 h-4/6 w-full md:w-full rounded-b-none': placement === 'bottom',
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
          </Card>
        </div>
      </FloatingPortal>
    );
  },
);
