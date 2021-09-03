import React from 'react';

import { OverlayLoader, OverlayLoaderProps } from './OverlayLoader';

export default {
  title: 'Atomic/OverlayLoader',
  component: OverlayLoader,
  argTypes: {},
};

const OverlayLoaders: React.FC<OverlayLoaderProps> = ({ ...rests }) => {
  return (
    <section>
      <OverlayLoader {...rests} />
    </section>
  );
};

export const OverlayLoadersStories = OverlayLoaders.bind({});
OverlayLoadersStories.args = {
  loading: true,
};
