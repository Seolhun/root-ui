import {
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  size,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import { ElementRef } from '~/types';

import { TogglerFloatingReturns, TogglerIntersectionReturns, TogglerOptions } from './Toggler.types';

export interface UseTogglerProps extends TogglerOptions {
  disabled?: boolean;
}

export interface UseTogglerReturns extends TogglerFloatingReturns, TogglerIntersectionReturns {
  /**
   * Open state
   */
  open: boolean;
  /**
   * Portal target element
   */
  root?: ElementRef<HTMLElement>;
  /**
   * Set open state
   */
  setOpen: (open: boolean) => void;
  /**
   * zIndex
   */
  zIndex?: number;
}

export function useToggler({
  disabled,
  initialOpen = false,
  offset: offsetValue = 5,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  placement = 'bottom',
  root,
  strategy = 'fixed',
  zIndex,
}: UseTogglerProps = {}): UseTogglerReturns {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState<boolean>(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const floating = useFloating({
    middleware: [
      offset(offsetValue),
      shift(),
      flip(),
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
    onOpenChange: setOpen,
    open,
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
  });
  const { context } = floating;

  const focus = useFocus(context, {
    enabled: !disabled,
  });
  const hover = useHover(context, {
    enabled: !disabled,
    handleClose: safePolygon(),
  });
  const dismiss = useDismiss(context, {
    enabled: !disabled,
  });
  const role = useRole(context, {
    enabled: !disabled,
    role: 'tooltip',
  });

  const interactions = useInteractions([focus, hover, dismiss, role]);

  return React.useMemo<UseTogglerReturns>(() => {
    return {
      ...interactions,
      ...floating,
      open,
      root,
      setOpen,
      zIndex,
    };
  }, [open, root, setOpen, zIndex, interactions, floating]);
}

export type TogglerContextValues = UseTogglerReturns;
export const TogglerContext = React.createContext<TogglerContextValues>(null as unknown as TogglerContextValues);

export const useTogglerContext = (): TogglerContextValues => {
  const context = React.useContext(TogglerContext);

  if (context == null) {
    throw new Error('Toggler components must be wrapped in <Toggler />');
  }
  return context;
};
