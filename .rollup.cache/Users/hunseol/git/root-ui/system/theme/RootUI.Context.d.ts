import * as React from 'react';
import { RootUIGroupContextValues } from './RootUIGroup.Context';
export interface RootUIContextValues extends RootUIGroupContextValues {
}
export declare const RootUIContext: React.Context<RootUIContextValues>;
export interface RootUIProviderProps extends RootUIContextValues {
    children: React.ReactNode;
}
export declare function RootUIProvider({ children, intent, defaultIntent, scale, defaultScale }: RootUIProviderProps): JSX.Element;
export declare function useRootUIContext(): RootUIContextValues;
