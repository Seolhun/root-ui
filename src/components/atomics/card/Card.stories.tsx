import React from 'react';

import { Card, CardProps } from './Card';

export default {
  title: 'Atomic/Card',
  component: Card,
  argTypes: {},
};

const Cards: React.FC<CardProps> = ({ children, ...rests }) => {
  return (
    <section>
      <Card {...rests}>{children}</Card>
    </section>
  );
};

export const CardsStories = Cards.bind({});
CardsStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
