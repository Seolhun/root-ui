import clsx from 'clsx';
import * as React from 'react';

import { Icon } from '~/components/icons';

import { useModalContext } from '../Widgets';

const CLASSNAME = 'Root__Modal__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalCloseButtonProps extends ElementProps {}

export const ModalCloseButton = React.forwardRef<ElementType, ModalCloseButtonProps>(
  ({ className, ...others }: ModalCloseButtonProps) => {
    const [{ onClose }] = useModalContext('Modal.CloseButton');

    return (
      <button
        type="button"
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'inline-flex items-center',
          'p-1.5 ml-auto',
          'bg-transparent hover:bg-neutral-1',
          'text-space-2 hover:text-space',
          'dark:text-cream-2 dark:hover:text-cream',
          'rounded-full',
        )}
        onClick={onClose}
      >
        <Icon aria-hidden="true" icon="XMarkIcon" />
        <span className="sr-only">Close modal</span>
      </button>
    );
  },
);
