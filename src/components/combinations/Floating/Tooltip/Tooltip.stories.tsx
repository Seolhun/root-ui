import * as React from 'react';

import { Button } from '~/components/atomics';
import { storiesScaleOptions, StorybookContent } from '~/stories';

import { Tooltip } from './Tooltip';

export default {
  title: 'Combination/Tooltip',
  component: Tooltip,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
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

const TooltipsTemplate = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Light>
      <StorybookContent.Dark>{({ root }) => <BaseTemplate {...others} root={root} />}</StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Tooltips = TooltipsTemplate.bind({});
Tooltips.args = {};

const ScaleTooltipTemplate = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        {({ root }) =>
          storiesScaleOptions.map((scale) => <BaseTemplate {...others} key={scale} scale={scale} root={root} />)
        }
      </StorybookContent.Light>
      <StorybookContent.Dark>
        {({ root }) =>
          storiesScaleOptions.map((scale) => <BaseTemplate {...others} key={scale} scale={scale} root={root} />)
        }
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleTooltips = ScaleTooltipTemplate.bind({});
ScaleTooltips.args = {};
