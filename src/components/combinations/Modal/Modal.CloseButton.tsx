import * as React from 'react';
import clsx from 'clsx';

import { Icon } from '../../icons';
import { useModalContext } from './Modal.Widget.Context';

const CLASSNAME = 'Root__Modal__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalCloseButtonProps extends ElementProps {}

const ModalCloseButton = React.forwardRef<ElementType, ModalCloseButtonProps>(
  ({ className, ...rests }: ModalCloseButtonProps) => {
    const [{ onClose }] = useModalContext('Modal.CloseButton');

    return (
      <button
        type="button"
        {...rests}
        className={clsx(
          CLASSNAME,
          className,
          'inline-flex items-center',
          '-mr-2 ml-2',
          'bg-transparent hover:bg-dark-2',
          'text-sm text-light-4 hover:text-light-6',
          'rounded-lg',
        )}
        onClick={onClose}
      >
        <Icon aria-hidden="true" icon="XIcon" />
        <span className="sr-only">Close modal</span>
      </button>
    );
  },
);

export { ModalCloseButton };
export default ModalCloseButton;
