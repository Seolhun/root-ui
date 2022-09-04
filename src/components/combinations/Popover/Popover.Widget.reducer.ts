import React from 'react';
import { OpenClosedState } from '../../../tools';

export interface StateDefinition {
  popoverState: OpenClosedState;

  button: HTMLElement | null;
  buttonId: string;
  panel: HTMLElement | null;
  panelId: string;

  beforePanelSentinel: React.MutableRefObject<HTMLButtonElement | null>;
  afterPanelSentinel: React.MutableRefObject<HTMLButtonElement | null>;
}

export enum ActionTypes {
  TogglePopover,
  ClosePopover,
  SetButton,
  SetButtonId,
  SetPanel,
  SetPanelId,
}

export type Actions =
  | { type: ActionTypes.TogglePopover }
  | { type: ActionTypes.ClosePopover }
  | { type: ActionTypes.SetButton; button: HTMLElement | null }
  | { type: ActionTypes.SetButtonId; buttonId: string }
  | { type: ActionTypes.SetPanel; panel: HTMLElement | null }
  | { type: ActionTypes.SetPanelId; panelId: string };

export const rootReducer: React.Reducer<StateDefinition, Actions> = (state, action) => {
  switch (action.type) {
    case ActionTypes.TogglePopover: {
      return {
        ...state,
        popoverState: state.popoverState === OpenClosedState.Open ? OpenClosedState.Closed : OpenClosedState.Open,
      };
    }
    case ActionTypes.ClosePopover: {
      if (state.popoverState === OpenClosedState.Closed) {
        return state;
      }
      return {
        ...state,
        popoverState: OpenClosedState.Closed,
      };
    }
    case ActionTypes.SetButton: {
      if (state.button === action.button) {
        return state;
      }
      return {
        ...state,
        button: action.button,
      };
    }
    case ActionTypes.SetButtonId: {
      if (state.buttonId === action.buttonId) {
        return state;
      }
      return {
        ...state,
        buttonId: action.buttonId,
      };
    }
    case ActionTypes.SetPanel: {
      if (state.panel === action.panel) {
        return state;
      }
      return {
        ...state,
        panel: action.panel,
      };
    }
    case ActionTypes.SetPanelId: {
      if (state.panelId === action.panelId) {
        return state;
      }
      return {
        ...state,
        panelId: action.panelId,
      };
    }
    default: {
      return state;
    }
  }
};
