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

const CardTemplates = ({ children, ...rests }: CardProps) => {
  return (
    <StorybookContent>
      <Card {...rests}>{children}</Card>
    </StorybookContent>
  );
};

export const DefaultCard = CardTemplates.bind({});
DefaultCard.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};

const ScaleCardTemplates = ({ children, ...rests }: CardProps) => {
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

export const ScaleCard = ScaleCardTemplates.bind({});
ScaleCard.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
