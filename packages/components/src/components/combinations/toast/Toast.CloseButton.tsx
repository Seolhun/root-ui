import { XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import * as React from 'react';

import { ToastContext } from './ToastContext';

const CLASSNAME = 'Root__Toast__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface ToastCloseButtonProps {
  toastId: number;
}

export const ToastCloseButton = React.forwardRef<ElementType, ElementProps & ToastCloseButtonProps>(
  ({ className, toastId, ...others }, ref) => {
    const [, dispatch] = React.useContext(ToastContext);

    const onClickToClose = () => {
      dispatch({
        type: 'CLOSE_TOAST',
        payload: toastId,
      });
    };

    return (
      <button
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center justify-center',
          'text-xs',
          'text-space-1 dark:text-cream-1',
          'hover:text-space-2 dark:hover:text-cream-2',
          'hover:bg-cream-2 dark:hover:bg-space-2',
          'p-4',
          'rounded-full',
          'cursor-pointer',
        )}
        onClick={onClickToClose}
        ref={ref}
      >
        <XMarkIcon className="scale-xs" />
      </button>
    );
  },
);
