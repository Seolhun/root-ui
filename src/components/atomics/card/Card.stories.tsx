import React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookDescriptor } from '../../../stories';
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
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Card {...rests} scale={scale}>
            {children}
          </Card>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleCardStories = ScaleCard.bind({});
ScaleCardStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
