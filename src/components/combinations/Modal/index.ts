export * from './Modal.types';

export * from './Modal';
import BaseModal from './Modal';
export * from './Modal.Content';
import Content from './Modal.Content';
export * from './Modal.Footer';
import Footer from './Modal.Footer';

const Modal = {
  Base: BaseModal,
  Content,
  Footer,
};

export { Modal };
export default Modal;
