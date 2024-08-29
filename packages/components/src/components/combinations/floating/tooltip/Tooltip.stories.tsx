import { Meta, StoryFn, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '~/components/atomics';
import { StorybookContent } from '~/stories';

import { Tooltip } from './Tooltip';
import { TooltipProps } from './Tooltip.Root';

const BaseTemplate = ({ root, ...others }) => {
  return (
    <Tooltip {...others} root={root}>
      <Tooltip.Trigger>
        <Button>Tooltip Trigger</Button>
      </Tooltip.Trigger>

      <Tooltip.Content>Tooltip Content</Tooltip.Content>
    </Tooltip>
  );
};

const TooltipsTemplate: StoryFn<TooltipProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Light>
      <StorybookContent.Dark>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Tooltips: StoryObj<TooltipProps> = {
  args: {},
  render: (args) => <TooltipsTemplate {...args} />,
};

const meta: Meta<typeof Tooltip> = {
  title: 'Combination/Opener',
};

export default meta;
