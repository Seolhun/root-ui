import * as React from 'react';

import { CloseToastPayload, OpenToastPayload } from './Toast.types';
import { ToastContext } from './ToastContext';

export const useToast = () => {
  const [, dispatch] = React.useContext(ToastContext);

  const closeToast = React.useCallback(
    (payload: CloseToastPayload) => {
      dispatch({
        type: 'CLOSE_TOAST',
        payload,
      });
    },
    [dispatch],
  );

  const openToast = React.useCallback(
    (payload: OpenToastPayload) => {
      dispatch({
        type: 'OPEN_TOAST',
        payload,
      });
    },
    [dispatch],
  );

  return {
    closeToast,
    openToast,
  } as const;
};
