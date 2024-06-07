import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Tag, TagProps } from './Tag';

export default {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  component: Tag,
  title: 'Atomic/Tag',
};

const BaseTemplate = ({ children, ...others }: TagProps) => {
  return <Tag {...others}>{children}</Tag>;
};

const ScaleTagsStories: React.FC<TagProps> = ({ children, ...others }) => {
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

export const ScaleTags = ScaleTagsStories.bind({});
ScaleTags.args = {
  children: 'Tag',
  disabled: false,
};

const IntentTagsStories: React.FC<TagProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentTags = IntentTagsStories.bind({});
IntentTags.args = {
  children: 'Tag',
};

const IntentOutlinedTagsStories: React.FC<TagProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} outlined>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} outlined>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentOutlinedTags = IntentOutlinedTagsStories.bind({});
IntentOutlinedTags.args = {
  children: 'Tag',
};

const DisabledTagsStories = ({ children, ...others }: TagProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              {children}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} outlined>
              {children}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              {children}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} outlined>
              {children}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const DisabledTags = DisabledTagsStories.bind({});
DisabledTags.args = {
  children: 'Tag',
  disabled: true,
};
