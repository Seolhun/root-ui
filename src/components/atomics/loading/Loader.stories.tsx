import React from 'react';

import { storiesIntentOptions, storiesScaleOptions } from '@/stories';
import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Atomic/Loader',
  component: Loader,
  argTypes: {
    scale: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
    intent: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
};

const Loaders = ({ ...rests }: LoaderProps) => {
  return (
    <section>
      <Loader {...rests} />
    </section>
  );
};

export const LoadersStories = Loaders.bind({});
LoadersStories.args = {
  loading: true,
};
