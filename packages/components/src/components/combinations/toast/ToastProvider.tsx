import * as React from 'react';

import { ToastContext, ToastContextValues, toastReducer } from './ToastContext';

export interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, dispatch] = React.useReducer(toastReducer, []);

  const contextValues = React.useMemo<ToastContextValues>(() => {
    return [toasts, dispatch];
  }, [toasts]);

  return <ToastContext.Provider value={contextValues}>{children}</ToastContext.Provider>;
};
