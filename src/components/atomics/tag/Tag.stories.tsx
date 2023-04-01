import * as React from 'react';

import { Tag, TagProps } from './Tag';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';

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

const ScaleTags: React.FC<TagProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Tag {...others} key={scale} scale={scale}>
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

const IntentTags: React.FC<TagProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Tag {...others} key={intent} intent={intent}>
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

const IntentOutlinedTags: React.FC<TagProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Tag {...others} key={intent} intent={intent} outlined>
          {children}-{intent}
        </Tag>
      ))}
    </StorybookContent>
  );
};

export const IntentOutlinedTagsStories = IntentOutlinedTags.bind({});
IntentOutlinedTagsStories.args = {
  children: 'Tag',
};

const DisabledTags = ({ children, ...others }: TagProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Tag {...others} key={intent} intent={intent}>
          {children}-{intent}
        </Tag>
      ))}
      {storiesIntentOptions.map((intent) => (
        <Tag {...others} key={intent} intent={intent} outlined>
          {children}-{intent}
        </Tag>
      ))}
    </StorybookContent>
  );
};

export const DisabledTagsStories = DisabledTags.bind({});
DisabledTagsStories.args = {
  children: 'Tag',
  disabled: true,
};
