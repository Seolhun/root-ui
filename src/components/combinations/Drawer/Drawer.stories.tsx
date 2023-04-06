import * as React from 'react';

import { Drawer } from './Drawer';

import { Button } from '../../../components/atomics';
import { H4 } from '../../../components/typography';
import { storiesScaleOptions, StorybookContent } from '../../../stories';

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

const BaseTemplate = ({ Header, Body, Footer, root, placement, ...rests }) => {
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
      <Drawer {...rests} show={isShow} onClose={onClose} onConfirm={onConfirm} root={root}>
        <Drawer.Header>{<H4>{Header}</H4>}</Drawer.Header>
        <Drawer.Body>{Body}</Drawer.Body>
        <Drawer.Footer>{Footer}</Drawer.Footer>
      </Drawer>
    </div>
  );
};

const Drawers = (props) => {
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
