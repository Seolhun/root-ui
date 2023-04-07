/// <reference types="react" />
export type ModalPosition = 'leaf' | 'parent';
export interface ModalRenderPropArg {
    visible: boolean;
}
export interface ModalProps {
    /**
     * Portal element
     */
    root?: HTMLElement | null;
    /**
     * To show modal
     */
    show: boolean;
    /**
     * To close modal (Escape Key)
     */
    onClose: () => void;
    /**
     * Keydown event handler
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * Init focus element
     */
    initialFocus?: React.MutableRefObject<HTMLElement | null>;
}
