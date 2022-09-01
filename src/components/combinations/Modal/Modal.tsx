import React from 'react';
import classNames from 'classnames';

import { RootScale, toIntentColor, toScaleMatch } from '@/system';
import ModalWidget from './Modal.Widget';
import { Card } from '@/components/atomics';
import { ModalRootProps } from './Modal.Widget.Root';

const CLASSNAME = 'Root__Modal';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalProps extends ModalRootProps {
  children: React.ReactNode;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const Modal = ({
  className,
  children,
  scale = 'md',
  show,
  onClose,
  onKeyDown,
  initialFocus,
  ...rests
}: ModalProps & ElementProps) => {
  return (
    <ModalWidget className="relative" show={show} onClose={onClose} onKeyDown={onKeyDown} initialFocus={initialFocus}>
      <ModalWidget.Overlay
        className={classNames(
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
        <ModalWidget.Backdrop
          tabIndex={-1}
          aria-hidden={show ? 'true' : 'false'}
          className={classNames(
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
        <ModalWidget.Panel>
          <Card
            {...rests}
            className={classNames(
              CLASSNAME,
              className,
              'relative',
              'm-auto',
              toScaleMatch(() => 'w-full md:w-4/12')(() => 'w-full md:w-6/12')(() => 'w-full md:w-8/12')(scale),
              'h-full md:h-auto',
              'md:my-12',
              'rounded-none md:rounded-lg',
              {
                'animate-[scale-up_0.2s_ease-in-out]': show,
              },
            )}
          >
            {children}
          </Card>
        </ModalWidget.Panel>
      </ModalWidget.Overlay>
    </ModalWidget>
  );
};

export { Modal };
export default Modal;
