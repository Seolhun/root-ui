import { ModalBackdrop } from './Modal.Backdrop';
import { ModalContent } from './Modal.Content';
import { ModalFooter } from './Modal.Footer';
import { ModalHeader } from './Modal.Header';
import { ModalOverlay } from './Modal.Overlay';
import { ModalPanel } from './Modal.Panel';
import { ModalWidgetRoot } from './Widgets/Modal.Widget.Root';

export const Modal = Object.assign(ModalWidgetRoot, {
  Overlay: ModalOverlay,
  Backdrop: ModalBackdrop,
  Panel: ModalPanel,
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
});
