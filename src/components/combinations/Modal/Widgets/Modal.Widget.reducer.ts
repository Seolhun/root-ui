import * as React from 'react';

export interface StateDefinition {
  id: null | string;
  panelRef: React.MutableRefObject<HTMLDivElement | null>;
}

export enum ActionTypes {
  SetTitleId,
}

export type Actions = { payload: null | string; type: ActionTypes.SetTitleId };

export const rootReducer: React.Reducer<StateDefinition, Actions> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SetTitleId: {
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
