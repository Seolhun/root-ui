import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';
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

const Inputs = ({ children, ...rests }: InputProps) => {
  return (
    <StorybookContent>
      <Input {...rests} />
      <Input {...rests} value={'is not empty'} />
      <Input {...rests} disabled />
    </StorybookContent>
  );
};

export const InputsStories = Inputs.bind({});
InputsStories.args = {
  placeholder: 'placeholder',
};

const ScaleInputs = ({ ...rests }: InputProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Input {...rests} key={scale} scale={scale} />
      ))}
    </StorybookContent>
  );
};

export const ScaleInputsStories = ScaleInputs.bind({});
ScaleInputsStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentInputs = ({ ...rests }: InputProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Input {...rests} key={intent} intent={intent} />
      ))}
    </StorybookContent>
  );
};

export const IntentInputsStories = IntentInputs.bind({});
IntentInputsStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
