import { Placement, Strategy } from '@floating-ui/react';

import { ElementRef } from '~/types';

export interface CommonFloatingOptions {
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
   * Opener placement
   * @default 'bottom-start'
   */
  placement?: Placement;
  /**
   * Portal target element
   */
  root?: ElementRef<HTMLElement>;
  /**
   * Opener strategy
   */
  strategy?: Strategy;
  /**
   * Z-index of tooltip content
   */
  zIndex?: number;
}
