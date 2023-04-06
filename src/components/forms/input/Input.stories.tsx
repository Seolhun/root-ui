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

const InputTemplate = ({ children, ...rests }: InputProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...rests} />
        <BaseTemplate {...rests} value={'is not empty'} />
        <BaseTemplate {...rests} disabled />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...rests} />
        <BaseTemplate {...rests} value={'is not empty'} />
        <BaseTemplate {...rests} disabled />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Inputs = InputTemplate.bind({});
Inputs.args = {
  placeholder: 'placeholder',
};

const ScaleInputTemplate = ({ ...rests }: InputProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale} />
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

const IntentInputTemplate = ({ ...rests }: InputProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Input {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Input {...rests} key={intent} intent={intent} />
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
