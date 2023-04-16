import { StoryFn } from '@storybook/react';
import clsx from 'clsx';
import * as React from 'react';

import { Button } from '~/components/atomics';
import { H4 } from '~/components/typography';
import { storiesScaleOptions, StorybookContent } from '~/stories';

import { Drawer } from './Drawer';
import { DrawerProps } from './Drawer.Root';

export default {
  title: 'Combination/Drawer',
  component: Drawer,
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
  DrawerProps & {
    Header: React.ReactNode;
    Body: React.ReactNode;
    Footer: React.ReactNode;
  };

const BaseTemplate = ({ Header, Body, Footer, root, placement, className, ...others }: BaseTemplateProps) => {
  const [isShow, setShow] = React.useState(false);

  const onToggle = React.useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const onClose = React.useCallback(() => {
    setShow(false);
  }, []);

  const onConfirm = React.useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div>
      <Button onClick={onToggle}>Toggle Drawer</Button>
      <Drawer {...others} placement={placement} show={isShow} onClose={onClose} onConfirm={onConfirm} root={root}>
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

export const DrawersStories = Drawers.bind({});
DrawersStories.args = {
  Header: 'Header',
  Body: 'Body',
  Footer: 'Footer',
  placement: 'right',
};

export const LongDrawersStories = Drawers.bind({});
LongDrawersStories.args = {
  Header: Array.from(Array(1000), () => 'Header').join(' '),
  Body: Array.from(Array(1000), () => 'Body').join(' '),
  Footer: 'Footer',
  placement: 'right',
};
