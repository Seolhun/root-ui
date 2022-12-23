import React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Card, CardProps } from './Card';

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

const ScaleCard = ({ children, ...rests }: CardProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Card {...rests} key={scale} scale={scale}>
          {children}
        </Card>
      ))}
    </StorybookContent>
  );
};

export const ScaleCardStories = ScaleCard.bind({});
ScaleCardStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
