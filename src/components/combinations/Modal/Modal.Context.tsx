import React from 'react';

import { ModalReducerState } from './Modal.reducer';
import { ModalOnHideCallback, ModalSetIdCallback } from './Modal.types';

export interface ModalContextValues {
  setModalId: ModalSetIdCallback;
  visible: boolean;
  state: ModalReducerState;
  onHide: ModalOnHideCallback;
}

export const ModalContext = React.createContext<ModalContextValues>(null as any);

export function useModalContext() {
  return React.useContext(ModalContext);
}

export interface ModalContextProviderProps {
  children: React.ReactNode;

  onHide: ModalOnHideCallback;
}
