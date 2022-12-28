import React from 'react';
import clsx from 'clsx';

import { Card } from '../../atomics';
import { RootScale, toScaleMatch } from '../../../system';
import { useDocumentEvent, useLockScrollClassName } from '../../../hooks';
import { DrawerContextProvider } from './Drawer.Context';
import { DrawerPlacement } from './Drawer.types';

const CLASSNAME = 'Root__Drawer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * Set this to displayed placement
   * @default right
   */
  placement?: DrawerPlacement;

  /**
   * To show Drawer
   */
  show: boolean;

  /**
   * To close Drawer (Escape)
   */
  onClose: () => void;

  /**
   * To confirm Drawer (Enter)
   */
  onConfirm?: () => void;
}

export const Drawer = React.forwardRef<ElementType, DrawerProps>(
  ({ className, children, scale = 'md', placement = 'right', show, onClose, onConfirm, ...rests }, ref) => {
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
      <DrawerContextProvider onClose={onClose}>
        <div
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
            className={clsx(CLASSNAME, className, 'fixed', 'inset-0 md:inset-0', 'bg-dark-3', 'opacity-60')}
          />
          <Card
            {...rests}
            ref={ref}
            className={clsx(
              'flex flex-col flex-1 gap-4',
              toScaleMatch({
                xs: () => 'w-full md:w-4/12',
                sm: () => 'w-full md:w-5/12',
                md: () => 'w-full md:w-6/12',
                lg: () => 'w-full md:w-8/12',
                xl: () => 'w-full md:w-10/12',
              })(scale),
              {
                'fixed top-0 right-0 bottom-0 h-screen w-8/12 rounded-r-none scroll-mr-1': placement === 'right',
                'fixed top-0 bottom-0 left-0 h-screen w-8/12 rounded-l-none scroll-ml-1': placement === 'left',
                'fixed right-0 bottom-0 left-0 h-3/6 w-full md:w-full rounded-b-none scroll-mb-1':
                  placement === 'bottom',
              },
              {
                'animate-[fade-in-right_0.2s_ease-in-out]': show && placement === 'right',
                'animate-[fade-in-bottom_0.2s_ease-in-out]': show && placement === 'bottom',
                'animate-[fade-in-left_0.2s_ease-in-out]': show && placement === 'left',
              },
            )}
          >
            {children}
          </Card>
        </div>
      </DrawerContextProvider>
    );
  },
);
