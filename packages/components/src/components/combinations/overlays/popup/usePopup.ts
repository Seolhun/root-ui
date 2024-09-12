import * as React from 'react';

import { OnClosePopup, OnOpenPopup, OnResetPopup, PopupValue } from './Popup.types';
import { PopupContext } from './PopupContext';

export function usePopup() {
  const [, dispatch] = React.useContext(PopupContext);

  const closePopup = React.useCallback<OnClosePopup>(
    (payload) => {
      dispatch({
        type: 'CLOSE_POPUP',
        payload,
      });
    },
    [dispatch],
  );

  const openPopup = React.useCallback<OnOpenPopup>(
    ({ id, cancelText, confirmText, onCancel, onConfirm, ...params }) => {
      return new Promise((resolve) => {
        const payload: PopupValue = {
          ...params,
          id,
          cancelText: cancelText ?? 'Cancel',
          confirmText: confirmText ?? 'Confirm',
          onCancel: () => {
            const resultCancel = onCancel?.();
            if (isPromise(resultCancel)) {
              resultCancel.then(() => {
                resolve(false);
                closePopup(id);
              });
            } else {
              resolve(false);
              closePopup(id);
            }
          },
          onConfirm: () => {
            const resultConfirm = onConfirm?.();
            if (isPromise(resultConfirm)) {
              resultConfirm.then(() => {
                resolve(true);
                closePopup(id);
              });
            } else {
              resolve(true);
              closePopup(id);
            }
          },
        };

        dispatch({
          type: 'OPEN_POPUP',
          payload,
        });
      });
    },
    [closePopup, dispatch],
  );

  const resetPopups = React.useCallback<OnResetPopup>(() => {
    dispatch({
      type: 'CLEAR_POPUPS',
    });
  }, [dispatch]);

  return {
    closePopup,
    openPopup,
    resetPopups,
  } as const;
}

function isPromise<T>(value: unknown): value is Promise<T> {
  return value instanceof Promise;
}
