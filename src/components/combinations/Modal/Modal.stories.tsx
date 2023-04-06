import * as React from 'react';

import { Button, Card } from '~/components/atomics';
import { useDisclosure } from '~/hooks';
import { StorybookContent, storiesScaleOptions } from '~/stories';

import { Modal } from './Modal';
import { ModalProps } from './Widgets';

export default {
  title: 'Combination/Modal',
  component: Modal,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
};

interface BaseTemplateProps extends ModalProps {
  Title: React.ReactNode;
  Content: React.ReactNode;
  Action: React.ReactNode;
}

const BaseTemplate = ({ Title, Content, Action, ...others }: BaseTemplateProps) => {
  const { isShow, onClose, onToggle } = useDisclosure();

  return (
    <section style={{ height: '2000px' }}>
      <Button onClick={onToggle}>Toggle modal</Button>

      <Modal className="relative z-50" show={isShow} onClose={onClose}>
        <Modal.Overlay>
          <Modal.Backdrop />
          <Modal.Panel {...others}>
            <Modal.Header>{Title}</Modal.Header>
            <Modal.Content>{Content}</Modal.Content>
            <Modal.Footer>{Action}</Modal.Footer>
          </Modal.Panel>
        </Modal.Overlay>
      </Modal>
    </section>
  );
};

const ModalTemplate = ({ ...others }: BaseTemplateProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {({ root }) => <BaseTemplate {...others} root={root} />}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {({ root }) => <BaseTemplate {...others} root={root} />}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Modals = ModalTemplate.bind({});
Modals.args = {
  Title: 'Title',
  Content: 'Content',
  Action: 'Action',
};

export const LongModals = ModalTemplate.bind({});
LongModals.args = {
  Title: Array.from(Array(1000), () => 'Title').join(' '),
  Content: Array.from(Array(1000), () => 'Content').join(' '),
  Action: 'Action',
};

const InnerModalTemplate = ({ ...others }) => {
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
          <Modal.Panel {...others}>
            <Modal.Header>Modal1</Modal.Header>
            <Modal.Content>Modal1</Modal.Content>
            <Modal.Footer>
              <Button onClick={onShow2}>Open Nested Modal</Button>
            </Modal.Footer>
          </Modal.Panel>

          <Modal className="relative z-50" show={isShow2} onClose={onClose2}>
            <Modal.Overlay>
              <Modal.Panel {...others}>
                <Modal.Header>Modal2</Modal.Header>
                <Modal.Content>Modal2</Modal.Content>
                <Modal.Footer>
                  <Button onClick={onShow3}>Open Nested Modal</Button>
                </Modal.Footer>
              </Modal.Panel>
            </Modal.Overlay>

            <Modal className="relative z-50" show={isShow3} onClose={onClose3}>
              <Modal.Overlay>
                <Modal.Panel {...others}>
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

export const InnerModals = InnerModalTemplate.bind({});
InnerModals.args = {};
