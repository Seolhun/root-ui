import * as React from 'react';
declare const Optional: unique symbol;
export declare function optionalRef<T>(cb: (ref: T) => void, isOptional?: boolean): ((ref: T) => void) & {
    [Optional]: boolean;
};
export declare function useSyncRefs<RefType>(...refs: (React.MutableRefObject<RefType | null> | ((instance: RefType) => void) | null)[]): ((value: RefType) => void) | undefined;
export {};
