import * as React from 'react';

import { Button } from '../../../components/atomics';
import { H4 } from '../../../components/typography';
import { storiesScaleOptions, StorybookContent } from '../../../stories';

import { Drawer } from './Drawer';

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

/**
 * @todo Light mode is not working because of context value is overwrite by dark mode
 */
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
    <StorybookContent>
      {({ root }) => {
        return (
          <>
            <Button onClick={onToggle}>Toggle Drawer</Button>
            <Drawer {...rests} show={isShow} onClose={onClose} onConfirm={onConfirm} root={root}>
              <Drawer.Header>{<H4>{Header}</H4>}</Drawer.Header>
              <Drawer.Body>{Body}</Drawer.Body>
              <Drawer.Footer>{Footer}</Drawer.Footer>
            </Drawer>
          </>
        );
      }}
    </StorybookContent>
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
