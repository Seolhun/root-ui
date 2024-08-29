import { Meta, StoryFn, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '~/components/atomics';
import { StorybookContent } from '~/stories';

import { Opener } from './Opener';
import { OpenerProps } from './Opener.Root';

const BaseTemplate = ({ root, ...others }) => {
  return (
    <Opener {...others} root={root}>
      <Opener.Trigger>
        <Button>Opener Trigger</Button>
      </Opener.Trigger>

      <Opener.Content>Opener Content</Opener.Content>
    </Opener>
  );
};

const OpenersTemplate: StoryFn<OpenerProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Light>
      <StorybookContent.Dark>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Openers: StoryObj<OpenerProps> = {
  args: {},
  render: (args) => <OpenersTemplate {...args} />,
};

const meta: Meta<typeof Opener> = {
  title: 'Combination/Opener',
};

export default meta;
