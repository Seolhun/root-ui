import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
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

export function useTooltip({
  initialOpen = false,
  placement = 'bottom',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  disabled,
  root,
}: UseTooltipProps = {}): UseTooltipReturns {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState<boolean>(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const { delay } = useDelayGroupContext();

  const floatingData = useFloating({
    placement,
    open,
    strategy: 'fixed',
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip(),
      shift({
        padding: 5,
      }),
    ],
  });

  const { context } = floatingData;

  const hover = useHover(context, {
    move: false,
    enabled: !disabled,
    delay,
  });
  const focus = useFocus(context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo<UseTooltipReturns>(
    () => ({
      open,
      setOpen,
      root,
      ...interactions,
      ...floatingData,
    }),
    [open, setOpen, interactions, floatingData, root],
  );
}

export type TooltipContextValues = UseTooltipReturns;
export const TooltipContext = React.createContext<TooltipContextValues>(null as unknown as TooltipContextValues);

export const useTooltipContext = (): TooltipContextValues => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }
  return context;
};
