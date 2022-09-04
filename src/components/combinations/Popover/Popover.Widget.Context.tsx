import React from 'react';

import { StateDefinition, Actions } from './Popover.Widget.reducer';
import { PopoverFocusableElement } from './Popover.Widget.types';

export const PopoverContext = React.createContext<[StateDefinition, React.Dispatch<Actions>] | null>(null);
PopoverContext.displayName = 'PopoverContext';

export function usePopoverContext(component: string) {
  const context = React.useContext(PopoverContext);
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, usePopoverContext);
    }
    throw err;
  }
  return context;
}

export type PopoverAPIContextValues = {
  close: (focusableElement?: PopoverFocusableElement) => void;
  isPortalled: boolean;
};

export const PopoverAPIContext = React.createContext<PopoverAPIContextValues | null>(null);
PopoverAPIContext.displayName = 'PopoverAPIContext';

export function usePopoverAPIContext(component: string) {
  const context = React.useContext(PopoverAPIContext);
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <Popover /> component.`);
    if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverAPIContext);
    throw err;
  }
  return context;
}

export interface PopoverRegisterBag {
  buttonId: string;
  panelId: string;
  close: () => void;
}

export type PopoverGroupContextValues = {
  registerPopover: (registerBag: PopoverRegisterBag) => void;
  unregisterPopover: (registerBag: PopoverRegisterBag) => void;
  isFocusWithinPopoverGroup: () => boolean;
  closeOthers: (buttonId: string) => void;
};

export const PopoverGroupContext = React.createContext<PopoverGroupContextValues | null>(null);
PopoverGroupContext.displayName = 'PopoverGroupContext';

export function usePopoverGroupContext() {
  return React.useContext(PopoverGroupContext);
}

export const PopoverPanelContext = React.createContext<string | null>(null);
PopoverPanelContext.displayName = 'PopoverPanelContext';

export function usePopoverPanelContext() {
  return React.useContext(PopoverPanelContext);
}
