import * as React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';
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
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Tag {...rests} key={scale} scale={scale}>
          {children}
        </Tag>
      ))}
    </StorybookContent>
  );
};

export const ScaleTagsStories = ScaleTags.bind({});
ScaleTagsStories.args = {
  children: 'Tag',
  disabled: false,
};

const IntentTags: React.FC<TagProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Tag {...rests} key={intent} intent={intent}>
          {children}-{intent}
        </Tag>
      ))}
    </StorybookContent>
  );
};

export const IntentTagsStories = IntentTags.bind({});
IntentTagsStories.args = {
  children: 'Tag',
};
