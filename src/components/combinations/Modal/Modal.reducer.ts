import React, { Reducer } from 'react';

export interface ModalReducerState {
  id: string | null;
  panelRef: React.MutableRefObject<HTMLDivElement | null>;
}

export enum ModalActionTypeMap {
  SET_MODAL_ID = 'SET_MODAL_ID',
}

export const setModalId = (payload: string | null) => ({
  type: ModalActionTypeMap.SET_MODAL_ID,
  payload,
});

export type ModalActions = ReturnType<typeof setModalId>;

export const rootModalReducer: Reducer<ModalReducerState, ModalActions> = (state, action) => {
  switch (action.type) {
    case ModalActionTypeMap.SET_MODAL_ID: {
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
