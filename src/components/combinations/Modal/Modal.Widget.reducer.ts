import React, { Reducer } from 'react';

export interface ModalReducerState {
  id: string | null;
  panelRef: React.MutableRefObject<HTMLDivElement | null>;
}

export enum ModalActionTypeMap {
  SET_MODAL_TITLE_ID = 'SET_MODAL_TITLE_ID',
}

export const setModalTitleId = (payload: string | null) => ({
  type: ModalActionTypeMap.SET_MODAL_TITLE_ID,
  payload,
});

export type ModalActions = ReturnType<typeof setModalTitleId>;

export const rootModalReducer: Reducer<ModalReducerState, ModalActions> = (state, action) => {
  switch (action.type) {
    case ModalActionTypeMap.SET_MODAL_TITLE_ID: {
      if (state.id === action.payload) {
        return state;
      }
      return {
        ...state,
        id: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
