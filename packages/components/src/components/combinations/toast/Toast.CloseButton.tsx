import clsx from 'clsx';
import * as React from 'react';
import { tv } from 'tailwind-variants';

import { ToastContext } from './ToastContext';

const CLASSNAME = 'Root__Toast__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface ToastCloseButtonProps {
  toastId: number;
}

export const ToastCloseButton = React.forwardRef<ElementType, ElementProps & ToastCloseButtonProps>(
  ({ children, className, toastId, ...others }, ref) => {
    const [, dispatch] = React.useContext(ToastContext);

    const onClickToClose = () => {
      dispatch({
        type: 'CLOSE_TOAST',
        payload: toastId,
      });
    };

    return (
      <button {...others} className={clsx(CLASSNAME, button(), className)} onClick={onClickToClose} ref={ref}>
        {children}
      </button>
    );
  },
);

const button = tv({
  base: clsx(
    'flex items-center justify-center',
    'text-xs',
    'text-space-1 dark:text-cream-1',
    'hover:text-space-2 dark:hover:text-cream-2',
    'hover:bg-cream-2 dark:hover:bg-space-2',
    'rounded-full',
    'cursor-pointer',
  ),
});
