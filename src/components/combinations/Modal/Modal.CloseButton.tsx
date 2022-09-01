import React from 'react';
import classNames from 'classnames';

import { useModalContext } from './Modal.Widget.Context';
import { Icon } from '@/components/icons';

const CLASSNAME = 'Root__Modal__CloseButton';
type Element = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalCloseButtonProps {}

function ModalCloseButton({ className, ...rests }: ModalCloseButtonProps & ElementProps) {
  const [{ onClose }] = useModalContext('Modal.CloseButton');

  return (
    <button
      type="button"
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'inline-flex items-center',
        'p-1.5 ml-auto',
        'bg-transparent hover:bg-dark-200',
        'text-sm text-light-400 hover:text-light-600',
        'rounded-lg',
      )}
      onClick={onClose}
    >
      <Icon aria-hidden="true" icon="XIcon" />
      <span className="sr-only">Close modal</span>
    </button>
  );
}

export { ModalCloseButton };
export default ModalCloseButton;
