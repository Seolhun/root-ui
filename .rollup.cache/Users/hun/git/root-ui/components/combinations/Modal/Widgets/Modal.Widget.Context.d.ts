import * as React from 'react';
import { StateDefinition } from './Modal.Widget.reducer';
export type ModalOnCloseCallback = () => void;
export type ModalSetTitleCallback = (titleId: string | null) => void;
export type ModalContextValues = [
    {
        onClose: ModalOnCloseCallback;
        setModalTitleId: ModalSetTitleCallback;
        visible: boolean;
    },
    StateDefinition
];
export declare const ModalContext: React.Context<ModalContextValues>;
export declare function useModalContext(component: string): ModalContextValues;
export interface ModalContextProviderProps {
    children: React.ReactNode;
    onClose: ModalOnCloseCallback;
}
