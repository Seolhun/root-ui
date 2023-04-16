import { StoryFn } from '@storybook/react';
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

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
type BaseTemplateProps = ElementProps &
  ModalProps & {
    Header: React.ReactNode;
    Body: React.ReactNode;
    Footer: React.ReactNode;
  };

const BaseTemplate = ({ Header, Body, Footer, root, ...others }: BaseTemplateProps) => {
  const { isShow, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Toggle modal</Button>

      <Modal className="relative z-50" show={isShow} onClose={onClose} root={root}>
        <Modal.Overlay>
          <Modal.Backdrop />
          <Modal.Panel {...others} className="space-y-2">
            <Modal.Header>{Header}</Modal.Header>
            <Modal.Body>{Body}</Modal.Body>
            <Modal.Footer>{Footer}</Modal.Footer>
          </Modal.Panel>
        </Modal.Overlay>
      </Modal>
    </>
  );
};

const ModalTemplate: StoryFn<BaseTemplateProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {({ root }) => (
          <section style={{ minHeight: '2000px' }}>
            <BaseTemplate {...others} root={root} />
          </section>
        )}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {({ root }) => (
          <section style={{ minHeight: '2000px' }}>
            <BaseTemplate {...others} root={root} />
          </section>
        )}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Modals = ModalTemplate.bind({});
Modals.args = {
  Header: 'Header',
  Body: 'Body',
  Footer: 'Footer',
};

export const LongModals = ModalTemplate.bind({});
LongModals.args = {
  Header: Array.from(Array(1000), () => 'Header').join(' '),
  Body: Array.from(Array(1000), () => 'Body').join(' '),
  Footer: 'Footer',
};

const InnerModalTemplate: StoryFn<ModalProps> = ({ ...others }) => {
  const { isShow, onClose, onShow } = useDisclosure();
  const { isShow: isShow2, onClose: onClose2, onShow: onShow2 } = useDisclosure();
  const { isShow: isShow3, onClose: onClose3, onShow: onShow3 } = useDisclosure();

  return (
    <section style={{ minHeight: '2000px' }}>
      <Button onClick={onShow}>Toggle modal</Button>

      <Card className="z-50 mt-8 p-8">The highest priority z-index 50 Card</Card>

      <Modal className="relative z-50" show={isShow} onClose={onClose}>
        <Modal.Backdrop />
        <Modal.Overlay>
          <Modal.Panel {...others}>
            <Modal.Header>Modal1</Modal.Header>
            <Modal.Body>Modal1</Modal.Body>
            <Modal.Footer>
              <Button onClick={onShow2}>Open Nested Modal</Button>
            </Modal.Footer>
          </Modal.Panel>

          <Modal className="relative z-50" show={isShow2} onClose={onClose2}>
            <Modal.Overlay>
              <Modal.Panel {...others}>
                <Modal.Header>Modal2</Modal.Header>
                <Modal.Body>Modal2</Modal.Body>
                <Modal.Footer>
                  <Button onClick={onShow3}>Open Nested Modal</Button>
                </Modal.Footer>
              </Modal.Panel>
            </Modal.Overlay>

            <Modal className="relative z-50" show={isShow3} onClose={onClose3}>
              <Modal.Overlay>
                <Modal.Panel {...others}>
                  <Modal.Header>Modal3</Modal.Header>
                  <Modal.Body>Modal3</Modal.Body>
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
