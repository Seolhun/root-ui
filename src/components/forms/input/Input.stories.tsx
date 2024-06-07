import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Input, InputProps } from './Input';

export default {
  component: Input,
  intent: {
    control: {
      type: 'select',
      options: storiesIntentOptions,
    },
  },
  scale: {
    control: {
      type: 'select',
      options: storiesScaleOptions,
    },
  },
  title: 'Form/Input',
};

const BaseTemplate = ({ children, ...others }: InputProps) => {
  return <Input {...others}>{children}</Input>;
};

const InputTemplate = ({ children, ...others }: InputProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others} />
        <BaseTemplate {...others} value={'is not empty'} />
        <BaseTemplate {...others} disabled />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others} />
        <BaseTemplate {...others} value={'is not empty'} />
        <BaseTemplate {...others} disabled />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Inputs: StoryFn<InputProps> = InputTemplate.bind({});
Inputs.args = {
  placeholder: 'placeholder',
};

const ScaleInputTemplate = ({ ...others }: InputProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleInputs: StoryFn<InputProps> = ScaleInputTemplate.bind({});
ScaleInputs.args = {
  disabled: false,
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

const IntentInputTemplate = ({ ...others }: InputProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Input {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Input {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentInputs: StoryFn<InputProps> = IntentInputTemplate.bind({});
IntentInputs.args = {
  disabled: false,
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
