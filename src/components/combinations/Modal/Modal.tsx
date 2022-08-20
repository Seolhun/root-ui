import React from 'react';
import classNames from 'classnames';

import { Card } from '@/components/atomics';
import { RootScale, toIntentColor, toScaleMatch } from '@/system';
import { useLockScroll, useDocumentEvent } from '@/hooks';

import ModalContextProvider from './Modal.Context';

const CLASSNAME = 'Root__Modal';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ModalProps extends ExtensionProps {
  children: React.ReactNode;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * To show modal
   */
  show: boolean;

  /**
   * To close modal (Escape)
   */
  onHide: () => void;

  /**
   * To confirm modal (Enter)
   */
  onConfirm?: () => void;
}

const Modal = ({ className, children, scale = 'md', show, onHide, onConfirm, ...rests }: ModalProps) => {
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
    <ModalContextProvider onHide={onHide}>
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
          'w-full h-full',
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
            {
              hidden: !show,
            },
            'fixed',
            'inset-0 md:inset-0',
            'w-full h-full',
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
            'relative',
            'm-auto',
            toScaleMatch(() => 'w-full md:w-4/12')(() => 'w-full md:w-6/12')(() => 'w-full md:w-8/12')(scale),
            'h-full md:h-auto',
            'md:my-12',
            'rounded-none md:rounded-lg',
          )}
        >
          {children}
        </Card>
      </div>
    </ModalContextProvider>
  );
};

export { Modal };
export default Modal;
