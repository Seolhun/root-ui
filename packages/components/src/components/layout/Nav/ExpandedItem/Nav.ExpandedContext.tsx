'use client';

import {
  autoUpdate,
  flip,
  Middleware,
  offset,
  Placement,
  safePolygon,
  shift,
  Strategy,
  useFloating,
  UseFloatingReturn,
  useFocus,
  useHover,
  useInteractions,
  UseInteractionsReturn,
} from '@floating-ui/react';
import * as React from 'react';

export interface NavExpandedContextValues {
  floating: UseFloatingReturn;
  intersection: UseInteractionsReturn;
  isFloatingOpen: boolean;
}

export interface NavProviderProps {
  children: React.ReactNode;
  /**
   * The middleware of the floating element.
   * @default [shift(), flip(), offset(20)]
   */
  middleware?: Middleware[];
  /**
   * The placement of the floating element.
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * The strategy of the floating element.
   * @default 'fixed'
   */
  strategy?: Strategy;
}

export const NavExpandedContext = React.createContext(null as unknown as NavExpandedContextValues);

export function NavExpandedProvider({
  children,
  middleware,
  placement = 'bottom',
  strategy = 'fixed',
}: NavProviderProps) {
  const [isFloatingOpen, setIsFloatingOpen] = React.useState(false);

  const floating = useFloating({
    middleware: middleware ? middleware : [shift(), flip(), offset(20)],
    onOpenChange: setIsFloatingOpen,
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(floating.context, {
    handleClose: safePolygon(),
  });
  const focus = useFocus(floating.context);
  const intersection = useInteractions([hover, focus]);

  const contextValue = React.useMemo<NavExpandedContextValues>(() => {
    return {
      floating,
      intersection,
      isFloatingOpen,
    };
  }, [floating, intersection, isFloatingOpen]);

  return <NavExpandedContext.Provider value={contextValue}>{children}</NavExpandedContext.Provider>;
}

export function useNavExpandedContext() {
  return React.useContext(NavExpandedContext);
}
