import React from 'react';

import { Button } from '@/components/atomics';
import { H4 } from '@/components/typography';
import { storiesScaleOptions } from '../../../stories';
import { Modal } from './Modal';
import ModalAction from './Modal.Action';
import ModalContent from './Modal.Content';

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
  const [isShow, setShow] = React.useState(false);

  const onToggle = React.useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const onHide = React.useCallback(() => {
    setShow(false);
  }, []);

  const onConfirm = React.useCallback(() => {
    onHide();
  }, [onHide]);

  return (
    <section style={{ height: '2000px' }}>
      <Button onClick={onToggle}>Toggle modal</Button>

      <Modal {...rests} show={isShow} onHide={onHide} onConfirm={onConfirm}>
        <ModalContent Title={<H4>{Title}</H4>}>{Content}</ModalContent>
        <ModalAction>{Action}</ModalAction>
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
