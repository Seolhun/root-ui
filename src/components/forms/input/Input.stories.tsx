import * as React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '~/stories';

import { Input, InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
  scale: {
    control: {
      type: 'select',
      options: storiesScaleOptions,
    },
  },
  intent: {
    control: {
      type: 'select',
      options: storiesIntentOptions,
    },
  },
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

export const Inputs = InputTemplate.bind({});
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

export const ScaleInputs = ScaleInputTemplate.bind({});
ScaleInputs.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentInputTemplate = ({ ...others }: InputProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Input {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Input {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentInputs = IntentInputTemplate.bind({});
IntentInputs.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
