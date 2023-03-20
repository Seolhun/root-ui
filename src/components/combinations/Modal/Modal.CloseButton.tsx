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
          'p-1.5 ml-auto',
          'bg-transparent hover:bg-neutral-1',
          'text-cream-2 hover:text-cream',
          'text-space-2 hover:text-space',
          'rounded-full',
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
