import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import { ElementRef } from '~/types';

import { DropdownFloatingReturns, DropdownIntersectionReturns, DropdownOptions, DropdownValue } from './Dropdown.types';

export interface UseDropdownProps<Value> extends DropdownOptions<Value> {
  disabled?: boolean;
}

export interface UseDropdownReturns<Value> extends DropdownFloatingReturns, DropdownIntersectionReturns {
  /**
   * Set open state
   */
  onChangeOpen: (open: boolean) => void;
  /**
   * Callback to handle option change
   */
  onChangeOption: (nextOption: DropdownValue<Value>) => void;
  /**
   * Open state
   */
  open: boolean;
  /**
   * Current selected value
   */
  option: DropdownValue<Value> | null;
  /**
   * Portal target element
   */
  root?: ElementRef<HTMLElement>;
  /**
   * zIndex
   */
  zIndex?: number;
}

export const useDropdown = <Value>({
  disabled,
  initialOpen = false,
  onChangeOption,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  option,
  placement = 'bottom',
  strategy = 'absolute',
  zIndex,
}: UseDropdownProps<Value>): UseDropdownReturns<Value> => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState<boolean>(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const onChangeOpen = setControlledOpen ?? setUncontrolledOpen;

  const floating = useFloating({
    middleware: [offset(5), shift(), flip()],
    onOpenChange: onChangeOpen,
    open,
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
  });

  const { context } = floating;

  const click = useClick(context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(context, {
    enabled: !disabled,
  });
  const role = useRole(context, {
    enabled: !disabled,
    role: 'listbox',
  });

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo<UseDropdownReturns<Value>>(() => {
    return {
      ...interactions,
      ...floating,
      onChangeOpen,
      onChangeOption,
      open,
      option,
      zIndex,
    };
  }, [floating, interactions, onChangeOption, open, onChangeOpen, option, zIndex]);
};

export type DropdownContextValues<Value> = UseDropdownReturns<Value>;
export const DropdownContext = React.createContext<DropdownContextValues<any>>(
  null as unknown as DropdownContextValues<any>,
);

export const useDropdownContext = <Value>(): DropdownContextValues<Value> => {
  const context = React.useContext(DropdownContext) as DropdownContextValues<Value>;

  if (context == null) {
    throw new Error('Dropdown components must be wrapped in <Dropdown />');
  }
  return context;
};
