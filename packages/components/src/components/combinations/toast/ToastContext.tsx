import { pipe } from '@fxts/core';
import * as React from 'react';

import { CloseToastPayload, OpenToastPayload, ToastValue } from './Toast.types';

export type PayloadAction<T> = {
  payload: T;
};

export type OpenToastAction = PayloadAction<OpenToastPayload> & { type: 'OPEN_TOAST' };
export type CloseToastAction = PayloadAction<CloseToastPayload> & { type: 'CLOSE_TOAST' };
export type ClearToastAction = { type: 'CLEAR_TOAST' };

export type ToastDispatchActions = ClearToastAction | CloseToastAction | OpenToastAction;
export type ToastDispatch = (type: ToastDispatchActions) => void;

export type ToastContextValues = [ToastValue[], ToastDispatch];
export const ToastContext = React.createContext<ToastContextValues>([[], () => null]);

export const toastReducer: React.Reducer<ToastValue[], ToastDispatchActions> = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'OPEN_TOAST': {
      const { payload } = action;
      const newItemUK = generateRandomIndexBy(10);
      return [
        ...state,
        {
          ...payload,
          id: newItemUK,
          visible: true,
        },
      ];
    }
    case 'CLOSE_TOAST': {
      const { payload } = action;
      const nextToasts = state.map((toast) => {
        if (toast.id === payload) {
          return {
            ...toast,
            visible: false,
          };
        }
        return toast;
      });
      return nextToasts;
    }
    case 'CLEAR_TOAST': {
      return [];
    }
    default: {
      return [...state];
    }
  }
};

export const useToastContext = () => React.useContext(ToastContext);

function generateRandomIndexBy(size: number) {
  return pipe(Math.random(), (random) => random * size, Math.floor);
}
