import clsx from 'clsx';
import * as React from 'react';

import { useModalContext } from '../widgets';

const CLASSNAME = 'Root__Modal__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalCloseButtonProps extends ElementProps {}

export const ModalCloseButton = React.forwardRef<ElementType, ModalCloseButtonProps>(
  ({ children, className, ...others }, ref) => {
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
        ref={ref}
      >
        {children}
        <span className="sr-only">Close modal</span>
      </button>
    );
  },
);
