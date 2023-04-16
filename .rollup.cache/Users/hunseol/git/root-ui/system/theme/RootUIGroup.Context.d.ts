import * as React from 'react';
import { RootScale, RootIntent } from './RootTheme.types';
export interface RootUIGroupContextValues {
    scale?: RootScale;
    defaultScale?: RootScale;
    intent?: RootIntent;
    defaultIntent?: RootIntent;
}
export declare const RootUIGroupContext: React.Context<RootUIGroupContextValues>;
export interface RootUIGroupProviderProps extends RootUIGroupContextValues {
    children: React.ReactNode;
}
export declare function RootUIGroupProvider({ children, intent, defaultIntent, scale, defaultScale, }: RootUIGroupProviderProps): JSX.Element;
export declare function useRootUIGroupContext(): RootUIGroupContextValues;
