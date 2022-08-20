import React from 'react';
import classNames from 'classnames';

import { Card } from '@/components/atomics';
import { RootScale, toIntentColor, toScaleMatch } from '@/system';
import { useLockScroll, useDocumentEvent } from '@/hooks';
import { DrawerContextProvider } from './Drawer.Context';
import { DrawerPlacement } from './Drawer.types';

const CLASSNAME = 'Root__Drawer';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface DrawerProps extends ExtensionProps {
  children: React.ReactNode;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * Set this to displayed placement
   * @deafult right
   */
  placement?: DrawerPlacement;

  /**
   * To show Drawer
   */
  show: boolean;

  /**
   * To close Drawer (Escape)
   */
  onHide: () => void;

  /**
   * To confirm Drawer (Enter)
   */
  onConfirm?: () => void;
}

const Drawer = ({
  className,
  children,
  scale = 'md',
  placement = 'right',
  show,
  onHide,
  onConfirm,
  ...rests
}: DrawerProps) => {
  const ref = React.useRef<Element>(null);

  useLockScroll(show);

  useDocumentEvent('keydown', (e) => {
    switch (e.key) {
      case 'Escape': {
        onHide();
        break;
      }
      case 'Enter': {
        onConfirm?.();
        break;
      }
    }
  });

  return (
    <DrawerContextProvider onHide={onHide}>
      <div
        ref={ref}
        className={classNames(
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
          className={classNames(
            CLASSNAME,
            className,
            'fixed',
            'inset-0 md:inset-0',
            toIntentColor({
              prefix: 'bg',
              intent: 'dark',
              intentWeight: 300,
            }),
            'opacity-60',
          )}
        />
        <Card
          {...rests}
          ref={ref}
          className={classNames(
            'flex flex-col flex-1 gap-4',
            toScaleMatch(() => 'w-full md:w-4/12')(() => 'w-full md:w-/12')(() => 'w-full md:w-8/12')(scale),
            {
              'fixed right-0 h-screen w-4/12 rounded-r-none scroll-mr-1': placement === 'right',
              'fixed bottom-0 h-3/6 w-full rounded-b-none scroll-mb-1': placement === 'bottom',
              'fixed left-0 h-screen w-4/12 rounded-l-none scroll-ml-1': placement === 'left',
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
};

export { Drawer };
export default Drawer;
