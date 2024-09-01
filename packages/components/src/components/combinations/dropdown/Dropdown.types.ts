import { Placement, Strategy, useFloating, useInteractions } from '@floating-ui/react';
import * as React from 'react';

export interface DropdownValue<Value> {
  children: React.ReactNode;

  value: Value;
}

export interface DropdownOptions<Value> {
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
   * Callback to handle option change
   */
  onChangeOption: (nextOption: DropdownValue<Value>) => void;
  /**
   * Callback to handle open state
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Controlled open state
   */
  open?: boolean;
  /**
   * Dropdown placement
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * Current selected value
   */
  selectedOptions: DropdownValue<Value>[];
  /**
   * Dropdown strategy
   * @default 'absolute'
   */
  strategy?: Strategy;
  /**
   * Z-index of tooltip content
   */
  zIndex?: number;
}

export type DropdownIntersectionReturns = ReturnType<typeof useInteractions>;
export type DropdownFloatingReturns = ReturnType<typeof useFloating>;
