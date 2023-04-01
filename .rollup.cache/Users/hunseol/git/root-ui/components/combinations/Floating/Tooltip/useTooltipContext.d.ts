import * as React from 'react';
import { TooltipFloatingReturns, TooltipIntersectionReturns, TooltipOptions } from './Tooltip.types';
export interface UseTooltipProps extends TooltipOptions {
    disabled?: boolean;
}
export interface UseTooltipReturns extends TooltipFloatingReturns, TooltipIntersectionReturns {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    /**
     * Portal target element
     */
    root?: HTMLElement | null;
}
export declare function useTooltip({ initialOpen, placement, open: controlledOpen, onOpenChange: setControlledOpen, disabled, root, }?: UseTooltipProps): UseTooltipReturns;
export type TooltipContextValues = UseTooltipReturns;
export declare const TooltipContext: React.Context<UseTooltipReturns>;
export declare const useTooltipContext: () => TooltipContextValues;
