import * as React from 'react';
export interface PopoverContextValues {
    /**
     * Floating Portal root element
     */
    root?: HTMLElement | null;
}
export declare const PopoverContext: React.Context<PopoverContextValues>;
export declare function usePopoverContext(): PopoverContextValues;
