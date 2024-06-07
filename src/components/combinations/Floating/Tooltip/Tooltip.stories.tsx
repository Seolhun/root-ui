import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { Button } from '../../../../components/atomics';
import { storiesScaleOptions, StorybookContent } from '../../../../stories';

import { Tooltip } from './Tooltip';
import { TooltipProps } from './Tooltip.Root';

export default {
  argTypes: {
    scale: {
      control: {
        options: storiesScaleOptions,
        type: 'select',
      },
    },
  },
  component: Tooltip,
  title: 'Combination/Tooltip',
};

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

export const Tooltips = TooltipsTemplate.bind({});
Tooltips.args = {};

const ScaleTooltipTemplate: StoryFn<TooltipProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col space-y-2">
        {({ root }) =>
          storiesScaleOptions.map((scale) => <BaseTemplate {...others} key={scale} root={root} scale={scale} />)
        }
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col space-y-2">
        {({ root }) =>
          storiesScaleOptions.map((scale) => <BaseTemplate {...others} key={scale} root={root} scale={scale} />)
        }
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleTooltips = ScaleTooltipTemplate.bind({});
ScaleTooltips.args = {};
