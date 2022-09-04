import React from 'react';

import { storiesScaleOptions } from '../../../stories';
import { useDisclosure } from '../../../hooks';
import { Button, Card } from '../../atomics';

import Modal from './Modal';

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

  return (
    <section style={{ height: '2000px' }}>
      <Button onClick={onToggle}>Toggle modal</Button>

      <Modal className="relative z-50" show={isShow} onClose={onClose}>
        <Modal.Overlay>
          <Modal.Backdrop />
          <Modal.Panel {...rests}>
            <Modal.Header>{Title}</Modal.Header>
            <Modal.Content>{Content}</Modal.Content>
            <Modal.Footer>{Action}</Modal.Footer>
          </Modal.Panel>
        </Modal.Overlay>
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

const InnerModals = ({ ...rests }) => {
  const { isShow, onClose, onShow } = useDisclosure();
  const { isShow: isShow2, onClose: onClose2, onShow: onShow2 } = useDisclosure();
  const { isShow: isShow3, onClose: onClose3, onShow: onShow3 } = useDisclosure();

  return (
    <section style={{ height: '2000px' }}>
      <Button onClick={onShow}>Toggle modal</Button>

      <Card className="z-50 mt-8 p-8">The highest priority z-index 50 Card</Card>

      <Modal className="relative z-50" show={isShow} onClose={onClose}>
        <Modal.Backdrop />
        <Modal.Overlay>
          <Modal.Panel {...rests}>
            <Modal.Header>Modal1</Modal.Header>
            <Modal.Content>Modal1</Modal.Content>
            <Modal.Footer>
              <Button onClick={onShow2}>Open Nested Modal</Button>
            </Modal.Footer>
          </Modal.Panel>

          <Modal className="relative z-50" show={isShow2} onClose={onClose2}>
            <Modal.Overlay>
              <Modal.Panel {...rests}>
                <Modal.Header>Modal2</Modal.Header>
                <Modal.Content>Modal2</Modal.Content>
                <Modal.Footer>
                  <Button onClick={onShow3}>Open Nested Modal</Button>
                </Modal.Footer>
              </Modal.Panel>
            </Modal.Overlay>

            <Modal className="relative z-50" show={isShow3} onClose={onClose3}>
              <Modal.Overlay>
                <Modal.Panel {...rests}>
                  <Modal.Header>Modal3</Modal.Header>
                  <Modal.Content>Modal3</Modal.Content>
                  <Modal.Footer>
                    <Button onClick={onShow3}>Open Nested Modal</Button>
                  </Modal.Footer>
                </Modal.Panel>
              </Modal.Overlay>
            </Modal>
          </Modal>
        </Modal.Overlay>
      </Modal>
    </section>
  );
};

export const InnerModalsStories = InnerModals.bind({});
InnerModalsStories.args = {};
