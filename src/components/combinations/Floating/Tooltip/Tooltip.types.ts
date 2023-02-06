import { Placement, useFloating, useInteractions } from '@floating-ui/react';

export interface TooltipOptions {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type TooltipIntersectionReturns = ReturnType<typeof useInteractions>;

export type TooltipFloatingReturns = ReturnType<typeof useFloating>;
