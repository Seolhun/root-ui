import { ModalBackdrop } from './Modal.Backdrop';
import { ModalBody } from './Modal.Body';
import { ModalFooter } from './Modal.Footer';
import { ModalHeader } from './Modal.Header';
import { ModalOverlay } from './Modal.Overlay';
import { ModalPanel } from './Modal.Panel';
import {
  ModalWidgetBackdrop,
  ModalWidgetOverlay,
  ModalWidgetPanel,
  ModalWidgetRoot,
  ModalWidgetTitle,
} from './Widgets';

export const ModalWidget = Object.assign(ModalWidgetRoot, {
  Backdrop: ModalWidgetBackdrop,
  Overlay: ModalWidgetOverlay,
  Panel: ModalWidgetPanel,
  Title: ModalWidgetTitle,
});

export const Modal = Object.assign(ModalWidgetRoot, {
  Backdrop: ModalBackdrop,
  Body: ModalBody,
  Footer: ModalFooter,
  Header: ModalHeader,
  Overlay: ModalOverlay,
  Panel: ModalPanel,
});
