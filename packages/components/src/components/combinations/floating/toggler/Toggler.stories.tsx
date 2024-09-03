import { Meta, StoryFn, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '~/components/atomics';
import { StorybookContent } from '~/stories';

import { Toggler } from './Toggler';
import { TogglerProps } from './Toggler.Root';

const BaseTemplate = ({ root, ...others }) => {
  return (
    <Toggler {...others} root={root}>
      <Toggler.Trigger>
        <Button>Toggler Trigger</Button>
      </Toggler.Trigger>

      <Toggler.Content>Toggler Content</Toggler.Content>
    </Toggler>
  );
};

const TogglersTemplate: StoryFn<TogglerProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Light>
      <StorybookContent.Dark>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Togglers: StoryObj<TogglerProps> = {
  args: {},
  render: (args) => <TogglersTemplate {...args} />,
};

const meta: Meta<typeof Toggler> = {
  title: 'Combination/Toggler',
};

export default meta;
