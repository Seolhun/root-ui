import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '../../../stories';
import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Form/Textarea',
  component: Textarea,
  scale: {
    defaultValue: 'md',
    control: {
      type: 'select',
      options: storiesScaleOptions,
    },
  },
  intent: {
    defaultValue: 'primary',
    control: {
      type: 'select',
      options: storiesIntentOptions,
    },
  },
};

const ScaleTextareas: React.FC<TextareaProps> = ({ ...rests }) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Textarea {...rests} scale={scale} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleTextareasStories = ScaleTextareas.bind({});
ScaleTextareasStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentTextareas: React.FC<TextareaProps> = ({ ...rests }) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Textarea {...rests} intent={intent} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentTextareasStories = IntentTextareas.bind({});
IntentTextareasStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
