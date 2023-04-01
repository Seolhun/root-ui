import * as React from 'react';
import { RootIntent } from './RootTheme.types';
export interface RootIntentContextValues {
    intent: RootIntent;
}
export declare const RootIntentContext: React.Context<RootIntentContextValues>;
export interface RootIntentProviderProps extends RootIntentContextValues {
    children: React.ReactNode;
}
export declare function RootIntentProvider({ children, intent }: RootIntentProviderProps): JSX.Element;
export declare function useRootIntentContext(): RootIntentContextValues;
