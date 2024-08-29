import clsx from 'clsx';
import * as React from 'react';

import { Toast } from './Toast';
import { ToastPlacementType } from './Toast.types';
import { ToastContext, ToastContextValues, toastReducer } from './ToastContext';

const CLASSNAME = 'Root__Toast__Provider';

type ElementType = HTMLButtonElement;

export interface ToastProviderProps {
  className?: string;
  /**
   * @default top-right
   */
  placement?: ToastPlacementType;
  /**
   * @default 5000
   */
  timeout?: number;
}

export const ToastProvider = React.forwardRef<ElementType, ToastProviderProps>(
  ({ className, placement = 'top-right', timeout = 5000 }, ref) => {
    const [toasts, dispatch] = React.useReducer(toastReducer, []);

    const contextValues = React.useMemo<ToastContextValues>(() => {
      return [toasts, dispatch];
    }, [toasts]);

    return (
      <ToastContext.Provider value={contextValues}>
        <section
          className={clsx(CLASSNAME, className, 'fixed z-50', {
            'top-20 right-4 bottom-auto left-4 md:left-0': placement === 'top-right',
            'top-20 right-4 bottom-auto left-4 md:right-0': placement === 'top-left',
            'top-auto bottom-8 left-4 right-4 md:right-0': placement === 'bottom-left',
            'top-auto bottom-8 right-4 left-4 md:left-0': placement === 'bottom-right',
          })}
          ref={ref}
        >
          <div className={clsx('relative', 'space-y-2', 'w-full')}>
            {toasts.map((toast) => {
              const { id } = toast;
              return <Toast {...toast} key={id} timeout={timeout} />;
            })}
          </div>
        </section>
      </ToastContext.Provider>
    );
  },
);
