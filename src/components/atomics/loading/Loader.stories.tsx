import React from 'react';

import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Atomic/Loader',
  component: Loader,
  argTypes: {},
};

const Loaders: React.FC<LoaderProps> = ({ ...rests }) => {
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
