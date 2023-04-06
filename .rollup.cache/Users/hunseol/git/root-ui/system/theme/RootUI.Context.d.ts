import * as React from 'react';
import { RootScale, RootIntent } from './RootTheme.types';
export interface RootUIContextValues {
    scale?: RootScale;
    intent?: RootIntent;
}
export declare const RootUIContext: React.Context<RootUIContextValues>;
export interface RootUIProviderProps extends RootUIContextValues {
    children: React.ReactNode;
}
export declare function RootUIProvider({ children, scale, intent }: RootUIProviderProps): JSX.Element;
export declare function useRootUIContext(): RootUIContextValues;
