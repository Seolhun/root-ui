import { Meta, StoryFn, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import * as React from 'react';

import { StorybookContent } from '../../../../stories';
import { Button } from '../../../atomics';
import { H4 } from '../../../typography';
import { Drawer } from './Drawer';
import { DrawerProps } from './Drawer.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
type BaseTemplateProps = ElementProps &
  DrawerProps & {
    Body: React.ReactNode;
    Footer: React.ReactNode;
    Header: React.ReactNode;
  };

const BaseTemplate = ({ className, Body, Footer, Header, placement, root, ...others }: BaseTemplateProps) => {
  const [isShow, setShow] = React.useState(false);

  const onToggle = React.useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const onClose = React.useCallback(() => {
    setShow(false);
  }, []);

  return (
    <div>
      <Button onClick={onToggle}>Toggle Drawer</Button>
      <Drawer {...others} onClose={onClose} placement={placement} root={root} show={isShow}>
        <Drawer.Overlay>
          <Drawer.Backdrop />
          <Drawer.Panel
            className={clsx({
              className,
              'h-4/6': placement === 'top' || placement === 'bottom',
              'w-9/12': placement === 'right' || placement === 'left',
            })}
          >
            <Drawer.Header>{<H4>{Header}</H4>}</Drawer.Header>
            <Drawer.Body>{Body}</Drawer.Body>
            <Drawer.Footer>{Footer}</Drawer.Footer>
          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
    </div>
  );
};

const Drawers: StoryFn<BaseTemplateProps> = (props) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>{({ root }) => <BaseTemplate {...props} root={root} />}</StorybookContent.Light>
      <StorybookContent.Dark>{({ root }) => <BaseTemplate {...props} root={root} />}</StorybookContent.Dark>
    </StorybookContent>
  );
};

export const DefaultDrawers: StoryObj<BaseTemplateProps> = {
  args: {
    Body: 'Body',
    Footer: 'Footer',
    Header: 'Header',
    placement: 'right',
  },
  render: (args) => <Drawers {...args} />,
};

export const LongDrawers: StoryObj<BaseTemplateProps> = {
  args: {
    Body: Array.from(Array(1000), () => 'Body').join(' '),
    Footer: 'Footer',
    Header: Array.from(Array(1000), () => 'Header').join(' '),
    placement: 'right',
  },
  render: (args) => <Drawers {...args} />,
};

const meta: Meta<typeof Drawer> = {
  title: 'Combination/Drawer',
};

export default meta;
