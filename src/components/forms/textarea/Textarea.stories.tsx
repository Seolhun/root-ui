import * as React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '~/stories';

import { Textarea, TextareaProps } from './Textarea';

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

const BaseTemplate = ({ children, ...others }: TextareaProps) => {
  return <Textarea {...others}>{children}</Textarea>;
};

const TextareaTemplate = ({ children, ...others }: TextareaProps) => {
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

export const Textareas = TextareaTemplate.bind({});
Textareas.args = {
  placeholder: 'placeholder',
};

const ScaleTextareaTemplate = ({ ...others }: TextareaProps) => {
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

export const ScaleTextareas = ScaleTextareaTemplate.bind({});
ScaleTextareas.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentTextareaTemplate = ({ ...others }: TextareaProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Textarea {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Textarea {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentTextareas = IntentTextareaTemplate.bind({});
IntentTextareas.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
