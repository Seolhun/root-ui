import { Placement, Strategy, useFloating, useInteractions } from '@floating-ui/react';

import { ElementRef } from '~/types';

export type TogglerDelay = {
  close: number;
  open: number;
};

export interface TogglerOptions {
  /**
   * Initial open state
   */
  initialOpen?: boolean;
  /**
   * Content offset
   * @default 5
   */
  offset?: number;
  /**
   * Callback to handle open state
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Controlled open state
   */
  open?: boolean;
  /**
   * Toggler placement
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * Portal target element
   */
  root?: ElementRef<HTMLElement>;
  /**
   * Toggler strategy
   * @default 'fixed'
   */
  strategy?: Strategy;
  /**
   * Z-index of tooltip content
   */
  zIndex?: number;
}

export type TogglerIntersectionReturns = ReturnType<typeof useInteractions>;

export type TogglerFloatingReturns = ReturnType<typeof useFloating>;
