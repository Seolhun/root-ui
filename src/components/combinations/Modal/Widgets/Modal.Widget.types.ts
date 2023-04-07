// If there are multiple modals, then you can be the root, the leaf or one
// in between. We only care about whether you are the top most one or not.
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
