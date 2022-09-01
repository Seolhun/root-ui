import { ModalWidgetRoot } from './Modal.Widget.Root';
import { ModalWidgetOverlay } from './Modal.Widget.Overlay';
import { ModalWidgetBackdrop } from './Modal.Widget.Backdrop';
import { ModalWidgetPanel } from './Modal.Widget.Panel';
import { ModalWidgetTitle } from './Modal.Widget.Title';

import { ModalHeader } from './Modal.Header';
import { ModalContent } from './Modal.Content';
import { ModalFooter } from './Modal.Footer';
import { ModalPanel } from './Modal.Panel';
import { ModalOverlay } from './Modal.Overlay';
import { ModalBackdrop } from './Modal.Backdrop';

const Modal = Object.assign(ModalWidgetRoot, {
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

export { Modal };
export default Modal;
