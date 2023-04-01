import { Placement, useFloating, useInteractions } from '@floating-ui/react';
export interface TooltipOptions {
    initialOpen?: boolean;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /**
     * Portal target element
     */
    root?: HTMLElement | null;
}
export type TooltipIntersectionReturns = ReturnType<typeof useInteractions>;
export type TooltipFloatingReturns = ReturnType<typeof useFloating>;
