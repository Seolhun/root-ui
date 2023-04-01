import * as React from 'react';
export declare const OpenClosedContext: React.Context<OpenClosedState | null>;
export declare enum OpenClosedState {
    Open = 0,
    Closed = 1
}
export declare function useOpenClosed(): OpenClosedState | null;
export interface OpenClosedProviderProps {
    value: OpenClosedState;
    children: React.ReactNode;
}
export declare function OpenClosedProvider({ value, children }: OpenClosedProviderProps): React.ReactElement;
