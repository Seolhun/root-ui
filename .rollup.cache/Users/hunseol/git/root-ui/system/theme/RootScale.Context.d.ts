import * as React from 'react';
import { RootScale } from './RootTheme.types';
export interface RootScaleContextValues {
    scale: RootScale;
}
export declare const RootScaleContext: React.Context<RootScaleContextValues>;
export interface RootScaleProviderProps extends RootScaleContextValues {
    children: React.ReactNode;
}
export declare function RootScaleProvider({ children, scale }: RootScaleProviderProps): JSX.Element;
export declare function useRootScaleContext(): RootScaleContextValues;
