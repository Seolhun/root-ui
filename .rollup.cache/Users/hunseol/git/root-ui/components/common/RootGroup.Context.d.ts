import * as React from 'react';
import { RootIntent, RootScale } from '../../system';
export interface RootGroupContextValues {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * @default primary
     */
    intent?: RootIntent;
}
export interface RootGroupProviderProps {
    children: React.ReactNode;
    value?: RootGroupContextValues;
}
export declare function RootGroupProvider({ children, value }: RootGroupProviderProps): JSX.Element;
export declare function useRootGroupContext(): Required<RootGroupContextValues>;
