import * as React from 'react';

import { StateDefinition } from './Modal.Widget.reducer';

export type ModalOnCloseCallback = () => void;

export type ModalSetTitleCallback = (titleId: null | string) => void;

export type ModalContextValues = [
  {
    onClose: ModalOnCloseCallback;
    setModalTitleId: ModalSetTitleCallback;
    visible: boolean;
  },
  StateDefinition,
];

export const ModalContext = React.createContext<ModalContextValues>(null as any);
ModalContext.displayName = 'ModalContext';

export function useModalContext(component: string) {
  const context = React.useContext(ModalContext);
  if (context === null) {
    throw new Error(`<${component} /> is missing a parent <Modal /> component.`);
  }
  return context;
}
