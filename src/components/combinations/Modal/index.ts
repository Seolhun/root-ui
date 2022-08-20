export * from './Modal.types';
export * from './Modal.Context';

export * from './Modal';
import BaseModal from './Modal';
export * from './Modal.Content';
import Content from './Modal.Content';
export * from './Modal.Action';
import Action from './Modal.Action';

const Modal = {
  Base: BaseModal,
  Content,
  Action,
};

export { Modal };
export default Modal;
