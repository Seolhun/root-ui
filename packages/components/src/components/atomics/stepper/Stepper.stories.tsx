import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { StorybookContent } from '../../../stories';
import { Stepper } from './Stepper';
import { StepperProps } from './Stepper.types';

export default {
  component: Stepper,
  title: 'Atomic/Stepper',
};

const BaseTemplate = ({ ...others }: StepperProps) => {
  return (
    <Stepper {...others} className="w-full">
      <Stepper.Item step={1} active name="Step - 1">
        Step 1 Description
      </Stepper.Item>
      <Stepper.Item step={2} name="Step - 2">
        Step 2 Description
      </Stepper.Item>
      <Stepper.Item step={3} name="Step - 3">
        Step 3 Description
      </Stepper.Item>
    </Stepper>
  );
};

const BaseStepperStories = ({ ...others }: StepperProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others} />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Steppers: StoryObj<StepperProps> = {
  render: BaseStepperStories,
};
