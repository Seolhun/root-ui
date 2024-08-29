import * as React from 'react';

import { ToastProps } from './Toast.types';
import { ToastContext } from './ToastContext';

export const useToast = () => {
  const [, dispatch] = React.useContext(ToastContext);

  const openToast = React.useCallback(
    (toast: ToastProps) => {
      dispatch({
        type: 'ADD_TOAST',
        payload: toast,
      });
    },
    [dispatch],
  );

  return openToast;
};
