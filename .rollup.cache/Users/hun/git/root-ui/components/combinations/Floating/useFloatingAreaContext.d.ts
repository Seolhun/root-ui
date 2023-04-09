import * as React from 'react';
export type FloatingAreaContextValues<E extends HTMLElement = HTMLElement> = React.RefObject<E>;
type ContextType = FloatingAreaContextValues;
export declare const FloatingAreaContext: React.Context<ContextType>;
export declare const useFloatingAreaContext: () => ContextType;
export interface FloatingAreaProps {
    children: React.ReactNode;
}
export declare const FloatingAreaProvider: ({ children }: FloatingAreaProps) => JSX.Element;
export {};
