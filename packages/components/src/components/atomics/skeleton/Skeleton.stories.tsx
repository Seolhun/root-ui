import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Skeleton } from './Skeleton';
import { SkeletonProps } from './Skeleton.types';

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
  component: Skeleton,
  title: 'Atomic/Skeleton',
};

const BaseTemplate = ({ ...others }: SkeletonProps) => {
  return (
    <Skeleton {...others}>
      <Skeleton.Loader />
    </Skeleton>
  );
};

const BaseSkeletonStories = ({ ...others }: SkeletonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others} />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Skeletons: StoryObj<SkeletonProps> = {
  render: BaseSkeletonStories,
};

const ComplexSkeletonTemplate = ({ ...others }: SkeletonProps) => {
  return (
    <Skeleton {...others}>
      <div className="flex flex-start">
        <Skeleton.Loader className="size-12 rounded-full" />
        <div className="flex flex-col space-y-4">
          <Skeleton.Loader className="h-6" />
          <Skeleton.Loader className="h-4" />
        </div>
      </div>
    </Skeleton>
  );
};

const ComplexSkeletonStories = ({ ...others }: SkeletonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <ComplexSkeletonTemplate {...others} />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <ComplexSkeletonTemplate {...others} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ComplexSkeletons: StoryObj<SkeletonProps> = {
  render: ComplexSkeletonStories,
};
