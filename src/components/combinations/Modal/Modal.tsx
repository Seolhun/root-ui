import { ModalBackdrop } from './Modal.Backdrop';
import { ModalContent } from './Modal.Content';
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
  Content: ModalContent,
  Footer: ModalFooter,
});
