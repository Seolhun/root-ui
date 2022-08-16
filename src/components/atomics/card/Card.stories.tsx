import classNames from 'classnames';
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
      <Card {...rests}>
        <div className={classNames('w-full h-full', 'px-4 pt-5 pb-4 sm:p-6 sm:pb-4')}>{children}</div>
      </Card>
    </section>
  );
};

export const CardsStories = Cards.bind({});
CardsStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
