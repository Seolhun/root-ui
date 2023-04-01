import * as React from 'react';

import { Textarea, TextareaProps } from './Textarea';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';

export default {
  title: 'Form/Textarea',
  component: Textarea,
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

const Textareas = ({ children, ...rests }: TextareaProps) => {
  return (
    <StorybookContent>
      <Textarea {...rests} />
      <Textarea {...rests} value={'is not empty'} />
      <Textarea {...rests} disabled />
    </StorybookContent>
  );
};

export const TextareasStories = Textareas.bind({});
TextareasStories.args = {
  placeholder: 'placeholder',
};

const ScaleTextareas = ({ ...rests }: TextareaProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Textarea {...rests} key={scale} scale={scale} />
      ))}
    </StorybookContent>
  );
};

export const ScaleTextareasStories = ScaleTextareas.bind({});
ScaleTextareasStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentTextareas = ({ ...rests }: TextareaProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Textarea {...rests} key={intent} intent={intent} />
      ))}
    </StorybookContent>
  );
};

export const IntentTextareasStories = IntentTextareas.bind({});
IntentTextareasStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
