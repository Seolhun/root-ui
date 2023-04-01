import * as React from 'react';
export declare enum StackContextMessageEnum {
    Add = 0,
    Remove = 1
}
export type StackContextOnUpdateCallback = (message: StackContextMessageEnum, type: string, element: React.MutableRefObject<HTMLElement | null>) => void;
