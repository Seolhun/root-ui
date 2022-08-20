import React from 'react';

import { ModalOnHideCallback } from './Modal.types';

export type ModalContextValues = ModalOnHideCallback;

const ModalContext = React.createContext<ModalContextValues>(() => null);

export function useModalContext() {
  return React.useContext(ModalContext);
}

export interface ModalContextProviderProps {
  children: React.ReactNode;

  onHide: ModalOnHideCallback;
}

export function ModalContextProvider({ children, onHide }: ModalContextProviderProps) {
  const contextValue = React.useMemo(() => onHide, [onHide]);

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
}

export default ModalContextProvider;
