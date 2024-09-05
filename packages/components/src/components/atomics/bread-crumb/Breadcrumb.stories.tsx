import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { StorybookContent } from '../../../stories';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbProps } from './Breadcrumb.types';

export default {
  component: Breadcrumb,
  title: 'Atomic/Breadcrumb',
};

const BaseTemplate = ({ ...others }: BreadcrumbProps) => {
  return (
    <Breadcrumb {...others} className="w-full">
      <Breadcrumb.Item>Step 1 Description</Breadcrumb.Item>
      <Breadcrumb.Divider />
      <Breadcrumb.Item>Step 2 Description</Breadcrumb.Item>
      <Breadcrumb.Divider />
      <Breadcrumb.Item>Step 3 Description2</Breadcrumb.Item>
    </Breadcrumb>
  );
};

const BaseBreadcrumbStories = ({ ...others }: BreadcrumbProps) => {
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

export const Breadcrumbs: StoryObj<BreadcrumbProps> = {
  render: BaseBreadcrumbStories,
};
