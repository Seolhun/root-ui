import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';

import { Textarea, TextareaProps } from './Textarea';

export default {
  component: Textarea,
  intent: {
    control: {
      options: storiesIntentOptions,
      type: 'select',
    },
  },
  scale: {
    control: {
      options: storiesScaleOptions,
      type: 'select',
    },
  },
  title: 'Form/Textarea',
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
  disabled: false,
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

const IntentTextareaTemplate = ({ ...others }: TextareaProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Textarea {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Textarea {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentTextareas = IntentTextareaTemplate.bind({});
IntentTextareas.args = {
  disabled: false,
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
