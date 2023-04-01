import * as React from 'react';
import { OpenClosedState } from '../../../tools';
export interface StateDefinition {
    accordionState: OpenClosedState;
    linkedPanel: boolean;
    buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
    panelRef: React.MutableRefObject<HTMLDivElement | null>;
    buttonId: string;
    panelId: string;
}
export declare enum ActionTypes {
    ToggleAccordion = 0,
    CloseAccordion = 1,
    SetButtonId = 2,
    SetPanelId = 3,
    LinkPanel = 4,
    UnlinkPanel = 5
}
export type Actions = {
    type: ActionTypes.ToggleAccordion;
} | {
    type: ActionTypes.CloseAccordion;
} | {
    type: ActionTypes.SetButtonId;
    buttonId: string;
} | {
    type: ActionTypes.SetPanelId;
    panelId: string;
} | {
    type: ActionTypes.LinkPanel;
} | {
    type: ActionTypes.UnlinkPanel;
};
export declare const rootReducer: React.Reducer<StateDefinition, Actions>;
export declare const AccordionContext: React.Context<[StateDefinition, React.Dispatch<Actions>] | null>;
export declare function useAccordionContext(component: string): [StateDefinition, React.Dispatch<Actions>];
export interface AccordionAPIContextValues {
    close(focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void;
}
export declare const AccordionAPIContext: React.Context<AccordionAPIContextValues | null>;
export declare function useAccordionAPIContext(component: string): AccordionAPIContextValues;
export declare const AccordionPanelContext: React.Context<string | null>;
export declare function useAccordionPanelContext(): string | null;
