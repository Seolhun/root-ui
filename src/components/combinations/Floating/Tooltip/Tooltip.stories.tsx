import * as React from 'react';

import { storiesScaleOptions, StorybookContent } from '../../../../stories';
import { Button } from '../../../atomics';

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

const TooltipsTemplate = ({ ...rests }) => {
  return (
    <StorybookContent>
      <Tooltip {...rests}>
        <Tooltip.Trigger>
          <Button>Tooltip Trigger</Button>
        </Tooltip.Trigger>

        <Tooltip.Content>Tooltip Content</Tooltip.Content>
      </Tooltip>
    </StorybookContent>
  );
};

export const Tooltips = TooltipsTemplate.bind({});
Tooltips.args = {};

const ScaleTooltipTemplate = ({ ...rests }) => {
  return (
    <StorybookContent>
      {({ ref }) => {
        return storiesScaleOptions.map((scale) => (
          <Tooltip {...rests} key={scale} scale={scale} root={ref.current}>
            <Tooltip.Trigger>
              <Button>Tooltip Trigger</Button>
            </Tooltip.Trigger>

            <Tooltip.Content>Tooltip Content</Tooltip.Content>
          </Tooltip>
        ));
      }}
    </StorybookContent>
  );
};

export const ScaleTooltips = ScaleTooltipTemplate.bind({});
ScaleTooltips.args = {};
