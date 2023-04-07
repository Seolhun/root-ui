import * as React from 'react';
export interface StateDefinition {
    id: string | null;
    panelRef: React.MutableRefObject<HTMLDivElement | null>;
}
export declare enum ActionTypes {
    SetTitleId = 0
}
export type Actions = {
    type: ActionTypes.SetTitleId;
    payload: string | null;
};
export declare const rootReducer: React.Reducer<StateDefinition, Actions>;
