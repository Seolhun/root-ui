import React from 'react';

import { Button } from '../../../components/atomics';
import { H4 } from '../../../components/typography';
import { storiesScaleOptions } from '../../../stories';

import { Drawer } from './Drawer';
import { DrawerFooter } from './Drawer.Footer';
import { DrawerHeader } from './Drawer.Header';
import { DrawerBody } from './Drawer.Body';

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

const Drawers = ({ Header, Body, Footer, ...rests }) => {
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
    <section style={{ height: '2000px' }}>
      <Button onClick={onToggle}>Toggle Drawer</Button>

      <Drawer {...rests} show={isShow} onClose={onClose} onConfirm={onConfirm}>
        <DrawerHeader>{<H4>{Header}</H4>}</DrawerHeader>
        <DrawerBody>{Body}</DrawerBody>
        <DrawerFooter>{Footer}</DrawerFooter>
      </Drawer>
    </section>
  );
};

export const DrawersStories = Drawers.bind({});
DrawersStories.args = {
  Header: 'Header',
  Body: 'Body',
  Footer: 'Footer',
};

export const LongDrawersStories = Drawers.bind({});
LongDrawersStories.args = {
  Header: Array.from(Array(1000), () => 'Header').join(' '),
  Body: Array.from(Array(1000), () => 'Body').join(' '),
  Footer: 'Footer',
};
