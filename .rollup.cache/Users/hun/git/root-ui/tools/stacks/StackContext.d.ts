import * as React from 'react';
import { StackContextOnUpdateCallback } from './StackContext.types';
export declare function useStackContext(): StackContextOnUpdateCallback;
export interface StackProviderProps {
    children: React.ReactNode;
    onUpdate?: StackContextOnUpdateCallback;
    type: string;
    element: React.MutableRefObject<HTMLElement | null>;
    enabled?: boolean;
}
export declare function StackProvider({ children, onUpdate, type, element, enabled }: StackProviderProps): JSX.Element;
