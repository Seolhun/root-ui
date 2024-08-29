import { ModalWidgetRoot } from '../widgets';
import { ModalBackdrop } from './Modal.Backdrop';
import { ModalBody } from './Modal.Body';
import { ModalFooter } from './Modal.Footer';
import { ModalHeader } from './Modal.Header';
import { ModalOverlay } from './Modal.Overlay';
import { ModalPanel } from './Modal.Panel';

export const Modal = Object.assign(ModalWidgetRoot, {
  Backdrop: ModalBackdrop,
  Body: ModalBody,
  Footer: ModalFooter,
  Header: ModalHeader,
  Overlay: ModalOverlay,
  Panel: ModalPanel,
});
