import React from 'react';

import { H1, H1Props } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { H5 } from './H5';
import { H6 } from './H6';

export default {
  title: 'TypoGraphy/Heading',
};

const Headings: React.FC<H1Props> = ({ children, ...rests }) => {
  return (
    <section>
      <H1 {...rests}>{children}</H1>
      <H2 {...rests}>{children}</H2>
      <H3 {...rests}>{children}</H3>
      <H4 {...rests}>{children}</H4>
      <H5 {...rests}>{children}</H5>
      <H6 {...rests}>{children}</H6>
    </section>
  );
};

export const HeadingsStories = Headings.bind({});
HeadingsStories.args = {
  children: 'Heading is for title',
};
