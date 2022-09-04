import React from 'react';
import classNames from 'classnames';

import { Card } from '../../atomics';
import { RootScale, toScaleMatch } from '../../../system';
import { useDocumentEvent, useLockScrollClassName } from '../../../hooks';
import { DrawerContextProvider } from './Drawer.Context';
import { DrawerPlacement } from './Drawer.types';

const CLASSNAME = 'Root__Drawer';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface DrawerProps extends ExtensionProps {
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
  onClose: () => void;

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
  onClose,
  onConfirm,
  ...rests
}: DrawerProps) => {
  const ref = React.useRef<Element>(null);

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
          className={classNames(CLASSNAME, className, 'fixed', 'inset-0 md:inset-0', 'bg-dark-300', 'opacity-60')}
        />
        <Card
          {...rests}
          ref={ref}
          className={classNames(
            'flex flex-col flex-1 gap-4',
            toScaleMatch({
              sm: () => 'w-full md:w-4/12',
              md: () => 'w-full md:w-6/12',
              lg: () => 'w-full md:w-8/12',
            })(scale),
            {
              'fixed top-0 right-0 bottom-0 h-screen w-4/12 rounded-r-none scroll-mr-1': placement === 'right',
              'fixed right-0 bottom-0 left-0 h-3/6 w-full rounded-b-none scroll-mb-1': placement === 'bottom',
              'fixed top-0 bottom-0 left-0 h-screen w-4/12 rounded-l-none scroll-ml-1': placement === 'left',
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
