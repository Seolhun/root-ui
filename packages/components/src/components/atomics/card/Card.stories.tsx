import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Card, CardProps } from './Card';

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
  component: Card,
  title: 'Atomic/Card',
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
