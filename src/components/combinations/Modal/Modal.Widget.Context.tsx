import React from 'react';

import { ModalReducerState } from './Modal.Widget.reducer';
import { ModalOnCloseCallback, ModalSetTitleCallback } from './Modal.Widget.types';

export type ModalContextValues = [
  {
    onClose: ModalOnCloseCallback;
    setModalTitleId: ModalSetTitleCallback;
    visible: boolean;
  },
  ModalReducerState,
];

export const ModalContext = React.createContext<ModalContextValues>(null as any);
ModalContext.displayName = 'ModalContext';

export function useModalContext(component: string) {
  const context = React.useContext(ModalContext);
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <Modal /> component.`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, useModalContext);
    }
    throw err;
  }
  return context;
}

export interface ModalContextProviderProps {
  children: React.ReactNode;

  onClose: ModalOnCloseCallback;
}
