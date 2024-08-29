import { pipe } from '@fxts/core';
import * as React from 'react';

import { ToastProps, ToastUniqueProps } from './Toast.types';

export type PayloadAction<T> = {
  payload: T;
};

export type AddToastAction = PayloadAction<ToastProps> & { type: 'ADD_TOAST' };
export type CloseToastAction = PayloadAction<number> & { type: 'CLOSE_TOAST' };

export type ToastDispatchActions = AddToastAction | CloseToastAction;
export type ToastDispatch = (type: ToastDispatchActions) => void;

export type ToastContextValues = [ToastUniqueProps[], ToastDispatch];
export const ToastContext = React.createContext<ToastContextValues>([[], () => null]);

export const toastReducer: React.Reducer<ToastUniqueProps[], ToastDispatchActions> = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'ADD_TOAST': {
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
    default: {
      return [...state];
    }
  }
};

function generateRandomIndexBy(size: number) {
  return pipe(Math.random(), (random) => random * size, Math.floor);
}
