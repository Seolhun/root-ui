import { Meta, StoryFn, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button, Card } from '../../../../components/atomics';
import { useDisclosure } from '../../../../hooks';
import { storiesScaleOptions, StorybookContent } from '../../../../stories';
import { Modal } from './Modal';
import { ModalProps } from './Modal.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
type BaseTemplateProps = ElementProps &
  ModalProps & {
    Body: React.ReactNode;
    Footer: React.ReactNode;
    Header: React.ReactNode;
  };

const BaseTemplate = ({ Body, Footer, Header, root, ...others }: BaseTemplateProps) => {
  const { isShow, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Toggle modal</Button>

      <Modal className="relative z-50" onClose={onClose} root={root} show={isShow}>
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

export const Modals: StoryObj<BaseTemplateProps> = {
  render: ModalTemplate,
};

export const LongModals: StoryObj<BaseTemplateProps> = {
  args: {
    Body: Array.from(Array(1000), () => 'Body').join(' '),
    Footer: 'Footer',
    Header: Array.from(Array(1000), () => 'Header').join(' '),
  },
  render: ModalTemplate,
};

const InnerModalTemplate: StoryFn<ModalProps> = ({ ...others }) => {
  const { isShow, onClose, onShow } = useDisclosure();
  const { isShow: isShow2, onClose: onClose2, onShow: onShow2 } = useDisclosure();
  const { isShow: isShow3, onClose: onClose3, onShow: onShow3 } = useDisclosure();

  return (
    <section style={{ minHeight: '2000px' }}>
      <Button onClick={onShow}>Toggle modal</Button>

      <Card className="z-50 mt-8 p-8">The highest priority z-index 50 Card</Card>

      <Modal className="relative z-50" onClose={onClose} show={isShow}>
        <Modal.Backdrop />
        <Modal.Overlay>
          <Modal.Panel {...others}>
            <Modal.Header>Modal1</Modal.Header>
            <Modal.Body>Modal1</Modal.Body>
            <Modal.Footer>
              <Button onClick={onShow2}>Open Nested Modal</Button>
            </Modal.Footer>
          </Modal.Panel>

          <Modal className="relative z-50" onClose={onClose2} show={isShow2}>
            <Modal.Overlay>
              <Modal.Panel {...others}>
                <Modal.Header>Modal2</Modal.Header>
                <Modal.Body>Modal2</Modal.Body>
                <Modal.Footer>
                  <Button onClick={onShow3}>Open Nested Modal</Button>
                </Modal.Footer>
              </Modal.Panel>
            </Modal.Overlay>

            <Modal className="relative z-50" onClose={onClose3} show={isShow3}>
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

export const InnerModals: StoryObj<ModalProps> = {
  render: InnerModalTemplate,
};

const meta: Meta<typeof Modal> = {
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  title: 'Combination/Modal',
};

export default meta;
