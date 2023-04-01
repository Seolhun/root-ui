import { ModalBackdrop } from './Modal.Backdrop';
import { ModalContent } from './Modal.Content';
import { ModalFooter } from './Modal.Footer';
import { ModalHeader } from './Modal.Header';
import { ModalOverlay } from './Modal.Overlay';
import { ModalPanel } from './Modal.Panel';
import { ModalWidgetBackdrop } from './Modal.Widget.Backdrop';
import { ModalWidgetOverlay } from './Modal.Widget.Overlay';
import { ModalWidgetPanel } from './Modal.Widget.Panel';
import { ModalWidgetRoot } from './Modal.Widget.Root';
import { ModalWidgetTitle } from './Modal.Widget.Title';

export const Modal = Object.assign(ModalWidgetRoot, {
  Overlay: ModalOverlay,
  Backdrop: ModalBackdrop,
  Panel: ModalPanel,
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,

  Widgets: {
    Overlay: ModalWidgetOverlay,
    Backdrop: ModalWidgetBackdrop,
    Panel: ModalWidgetPanel,
    Title: ModalWidgetTitle,
  },
});
