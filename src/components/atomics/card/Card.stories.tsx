import * as React from 'react';

import { Card, CardProps } from './Card';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';

export default {
  title: 'Atomic/Card',
  component: Card,
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

const BaseTemplate = ({ children, ...others }: CardProps) => {
  return <Card {...others}>{children}</Card>;
};

const DefaultCardTemplate = ({ children, ...others }: CardProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const DefaultCard = DefaultCardTemplate.bind({});
DefaultCard.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};

const ScaleCardTemplate = ({ children, ...others }: CardProps) => {
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

export const ScaleCard = ScaleCardTemplate.bind({});
ScaleCard.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
