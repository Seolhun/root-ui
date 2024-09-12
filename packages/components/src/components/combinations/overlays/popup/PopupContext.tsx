import * as React from 'react';

import { ClosePopupPayload, OpenPopupPayload, PopupValue } from './Popup.types';

export type PayloadAction<T> = {
  payload: T;
};

export type OpenPopupAction = PayloadAction<OpenPopupPayload> & { type: 'OPEN_POPUP' };
export type ClosePopupAction = PayloadAction<ClosePopupPayload> & { type: 'CLOSE_POPUP' };
export type ClearPopupAction = { type: 'CLEAR_POPUPS' };

export type PopupDispatchActions = ClearPopupAction | ClosePopupAction | OpenPopupAction;
export type PopupDispatch = (type: PopupDispatchActions) => void;

export type PopupContextValues = [PopupValue[], PopupDispatch];
export const PopupContext = React.createContext<PopupContextValues>([[], () => null]);

export const popupReducer: React.Reducer<PopupValue[], PopupDispatchActions> = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'OPEN_POPUP': {
      const { payload } = action;
      const isExisting = state.some((popup) => popup.id === payload.id);
      if (isExisting) {
        return state;
      }
      return [...state, payload];
    }
    case 'CLOSE_POPUP': {
      const { payload } = action;
      const nextPopups = state.filter((popup) => {
        return popup.id !== payload;
      });
      return nextPopups;
    }
    case 'CLEAR_POPUPS': {
      return [];
    }
    default: {
      return [...state];
    }
  }
};

export const usePopupContext = () => React.useContext(PopupContext);
