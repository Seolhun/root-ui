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
    <Skeleton {...others} className="w-full">
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
    <Skeleton {...others} className="w-full">
      <div className="flex flex-start space-x-4 w-full">
        <Skeleton.Loader className="min-w-48 min-h-48 rounded-full" />
        <div className="flex flex-col space-y-4 w-full">
          <Skeleton.Loader className="h-12 w-full" />

          <div className="flex flex-col space-y-2">
            <Skeleton.Loader className="h-6 w-full" />
            <Skeleton.Loader className="h-6 w-full" />
            <Skeleton.Loader className="h-6 w-full" />
            <Skeleton.Loader className="h-6 w-full" />
          </div>
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
