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

const BaseTemplate = ({ children, ...others }: TagProps) => {
  return <Tag {...others}>{children}</Tag>;
};

const ScaleTags: React.FC<TagProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
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
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
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
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} outlined>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} outlined>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
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
      <StorybookContent.Light>
        <div className="flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent} outlined>
              {children}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent} outlined>
              {children}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const DisabledTagsStories = DisabledTags.bind({});
DisabledTagsStories.args = {
  children: 'Tag',
  disabled: true,
};
