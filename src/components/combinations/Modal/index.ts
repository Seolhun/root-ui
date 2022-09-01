export * from './Modal.Widget.types';
export * from './Modal.Widget.Root';
export * from './Modal.Widget.Overlay';
export * from './Modal.Widget.Backdrop';
export * from './Modal.Widget.Panel';
export * from './Modal.Widget.Title';

export * from './Modal.Header';
export * from './Modal.Content';
export * from './Modal.Footer';

import BaseModal from './Modal';
import ModalHeader from './Modal.Header';
import ModalContent from './Modal.Content';
import ModalFooter from './Modal.Footer';
import { ModalWidget } from './Modal.Widget';

const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
});

export { Modal, ModalWidget };
export default ModalWidget;
