import { ModalBackdrop } from './Modal.Backdrop';
import { ModalBody } from './Modal.Body';
import { ModalFooter } from './Modal.Footer';
import { ModalHeader } from './Modal.Header';
import { ModalOverlay } from './Modal.Overlay';
import { ModalPanel } from './Modal.Panel';
import {
  ModalWidgetRoot,
  ModalWidgetBackdrop,
  ModalWidgetOverlay,
  ModalWidgetPanel,
  ModalWidgetTitle,
} from './Widgets';

export const Modal = Object.assign(ModalWidgetRoot, {
  Widgets: {
    Overlay: ModalWidgetOverlay,
    Backdrop: ModalWidgetBackdrop,
    Panel: ModalWidgetPanel,
    Title: ModalWidgetTitle,
  },
  Overlay: ModalOverlay,
  Backdrop: ModalBackdrop,
  Panel: ModalPanel,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
