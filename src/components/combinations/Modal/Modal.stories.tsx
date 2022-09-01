import React from 'react';

import { Button } from '@/components/atomics';
import { useDisclosure } from '@/hooks';
import { storiesScaleOptions } from '@/stories';

import { Modal } from './Modal';
import { ModalHeader } from './Modal.Header';
import { ModalContent } from './Modal.Content';
import { ModalFooter } from './Modal.Footer';

export default {
  title: 'Combination/Modal',
  component: Modal,
  argTypes: {
    scale: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
};

const Modals = ({ Title, Content, Action, ...rests }) => {
  const { isShow, onClose, onToggle } = useDisclosure();

  const onConfirm = React.useCallback(() => {
    console.info('onConfirm');
    return false;
  }, []);

  return (
    <section style={{ height: '2000px' }}>
      <Button onClick={onToggle}>Toggle modal</Button>

      <Modal {...rests} show={isShow} onClose={onClose} onConfirm={onConfirm}>
        <ModalHeader>{Title}</ModalHeader>
        <ModalContent>{Content}</ModalContent>
        <ModalFooter>{Action}</ModalFooter>
      </Modal>
    </section>
  );
};

export const ModalsStories = Modals.bind({});
ModalsStories.args = {
  Title: 'Title',
  Content: 'Content',
  Action: 'Action',
};

export const LongModalsStories = Modals.bind({});
LongModalsStories.args = {
  Title: Array.from(Array(1000), () => 'Title').join(' '),
  Content: Array.from(Array(1000), () => 'Content').join(' '),
  Action: 'Action',
};

const InnerModals = ({ Title, Content, Action, ...rests }) => {
  const { isShow, onClose, onToggle } = useDisclosure();
  const { isShow: isShowModal, onClose: onCloseModal, onToggle: onToggleModal } = useDisclosure();

  const onConfirm = React.useCallback(() => {
    console.info('onConfirm');
    return false;
  }, []);

  return (
    <section style={{ height: '2000px' }}>
      <Button onClick={onToggle}>Toggle modal</Button>

      <Modal {...rests} show={isShow} onClose={onClose} onConfirm={onConfirm}>
        <ModalHeader>{Title}</ModalHeader>
        <ModalContent>{Content}</ModalContent>
        <ModalFooter>
          <Button onClick={onToggleModal}>Toggle Modal 2</Button>
        </ModalFooter>
      </Modal>

      <Modal {...rests} show={isShowModal} onClose={onCloseModal} onConfirm={onConfirm}>
        <ModalHeader>{Title}</ModalHeader>
        <ModalContent>{Content}</ModalContent>
        <ModalFooter>{Action}</ModalFooter>
      </Modal>
    </section>
  );
};

export const InnerModalsStories = InnerModals.bind({});
InnerModalsStories.args = {
  Title: 'Title',
  Content: 'Content',
  Action: 'Action',
};
