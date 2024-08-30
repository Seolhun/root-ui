import clsx from 'clsx';
import * as React from 'react';
import { tv } from 'tailwind-variants';

import { ToastPlacementType } from './Toast.types';
import { ToastContext, ToastContextValues, toastReducer } from './ToastContext';
import { Toast } from './components/Toast';

const CLASSNAME = 'Root__Toast__Provider';

type ElementType = HTMLButtonElement;

export interface ToastProviderProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * @default top-right
   */
  placement?: ToastPlacementType;
  /**
   * @default 50
   */
  zIndex?: number;
}

export const ToastProvider = React.forwardRef<ElementType, ToastProviderProps>(
  ({ className, children, placement = 'top-right', zIndex = 50 }, ref) => {
    const [toasts, dispatch] = React.useReducer(toastReducer, []);

    const contextValues = React.useMemo<ToastContextValues>(() => {
      return [toasts, dispatch];
    }, [toasts]);

    return (
      <ToastContext.Provider value={contextValues}>
        <section
          className={clsx(CLASSNAME, className, toast({ placement }), {
            'top-20 bottom-auto left-4 md:right-0': placement === 'top-left',
            'top-20 right-4 bottom-auto md:left-0': placement === 'top-right',
            'top-auto bottom-8 left-4 right-4 md:right-0': placement === 'bottom-left',
            'top-auto bottom-8 right-4 left-4 md:left-0': placement === 'bottom-right',
          })}
          ref={ref}
          style={{ zIndex }}
        >
          {toasts.map((toast) => {
            const { id, message, timeout, title, visible } = toast;
            return (
              <Toast {...toast} key={id} timeout={timeout} visible={visible}>
                <div className="flex items-start space-x-4">
                  <div>{title && <Toast.Title>{title}</Toast.Title>}</div>
                  <Toast.CloseButton toastId={id} />
                </div>
                <Toast.Message>{message}</Toast.Message>
              </Toast>
            );
          })}
        </section>

        {children}
      </ToastContext.Provider>
    );
  },
);

const toast = tv({
  base: 'fixed',
  variants: {
    placement: {
      'bottom-left': 'top-auto bottom-8 left-4 right-4 md:right-auto',
      'bottom-right': 'top-auto bottom-8 right-4 left-4 md:left-auto',
      'top-left': 'top-20 right-4 bottom-auto left-4 md:right-auto',
      'top-right': 'top-20 left-4 bottom-auto right-4 md:left-auto',
    },
  },
});
