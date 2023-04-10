import { FloatingPortal } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useDocumentEvent } from '~/hooks';

import { useDrawerContext } from './Drawer.Context';

const CLASSNAME = 'Root__Drawer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerFloatingProps {}

export const DrawerFloating = React.forwardRef<ElementType, ElementProps & DrawerFloatingProps>(
  ({ className, children, ...others }, ref) => {
    const { show, onClose, onConfirm, root } = useDrawerContext();

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
          {children}
        </div>
      </FloatingPortal>
    );
  },
);
