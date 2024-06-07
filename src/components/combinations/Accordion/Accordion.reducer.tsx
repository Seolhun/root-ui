import * as React from 'react';

import { OpenClosedState } from '../../../tools';

export interface StateDefinition {
  accordionState: OpenClosedState;
  buttonId: string;
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
  linkedPanel: boolean;
  panelId: string;
  panelRef: React.MutableRefObject<HTMLDivElement | null>;
}

export enum ActionTypes {
  ToggleAccordion,
  CloseAccordion,
  SetButtonId,
  SetPanelId,
  LinkPanel,
  UnlinkPanel,
}

export type Actions =
  | { buttonId: string; type: ActionTypes.SetButtonId }
  | { panelId: string; type: ActionTypes.SetPanelId }
  | { type: ActionTypes.CloseAccordion }
  | { type: ActionTypes.LinkPanel }
  | { type: ActionTypes.ToggleAccordion }
  | { type: ActionTypes.UnlinkPanel };

export const rootReducer: React.Reducer<StateDefinition, Actions> = (state, action) => {
  switch (action.type) {
    case ActionTypes.ToggleAccordion: {
      return {
        ...state,
        popoverState: state.accordionState === OpenClosedState.Open ? OpenClosedState.Closed : OpenClosedState.Open,
      };
    }
    case ActionTypes.CloseAccordion: {
      if (state.accordionState === OpenClosedState.Closed) {
        return state;
      }
      return {
        ...state,
        accordionState: OpenClosedState.Closed,
      };
    }
    case ActionTypes.LinkPanel: {
      if (state.linkedPanel === true) {
        return state;
      }
      return {
        ...state,
        linkedPanel: true,
      };
    }
    case ActionTypes.UnlinkPanel: {
      if (state.linkedPanel === false) {
        return state;
      }
      return {
        ...state,
        linkedPanel: false,
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

export const AccordionContext = React.createContext<[StateDefinition, React.Dispatch<Actions>] | null>(null);
AccordionContext.displayName = 'AccordionContext';

export function useAccordionContext(component: string) {
  const context = React.useContext(AccordionContext);
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <Accordion /> component.`);
    if (Error.captureStackTrace) Error.captureStackTrace(err, useAccordionContext);
    throw err;
  }
  return context;
}

export interface AccordionAPIContextValues {
  close(focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void;
}

export const AccordionAPIContext = React.createContext<AccordionAPIContextValues | null>(null);
AccordionAPIContext.displayName = 'AccordionAPIContext';

export function useAccordionAPIContext(component: string) {
  const context = React.useContext(AccordionAPIContext);
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <Accordion /> component.`);
    if (Error.captureStackTrace) Error.captureStackTrace(err, useAccordionAPIContext);
    throw err;
  }
  return context;
}

export const AccordionPanelContext = React.createContext<null | string>(null);
AccordionPanelContext.displayName = 'AccordionPanelContext';

export function useAccordionPanelContext() {
  return React.useContext(AccordionPanelContext);
}
