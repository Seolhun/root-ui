import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '../../../stories';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Atomic/Tag',
  component: Tag,
  argTypes: {
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
  },
};

const ScaleTags: React.FC<TagProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Tag {...rests} scale={scale}>
            {children}
          </Tag>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleTagsStories = ScaleTags.bind({});
ScaleTagsStories.args = {
  children: 'Tag',
  disabled: false,
};

const IntentTags: React.FC<TagProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Tag {...rests} intent={intent}>
            {children}
          </Tag>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentTagsStories = IntentTags.bind({});
IntentTagsStories.args = {
  children: 'Tag',
};
