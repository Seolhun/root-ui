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
    <div className="grid grid-cols-1">
      <div className="col-span-1">
        <H1 {...rests}>{children}</H1>
      </div>
      <div className="col-span-1">
        <H2 {...rests}>{children}</H2>
      </div>
      <div className="col-span-1">
        <H3 {...rests}>{children}</H3>
      </div>
      <div className="col-span-1">
        <H4 {...rests}>{children}</H4>
      </div>
      <div className="col-span-1">
        <H5 {...rests}>{children}</H5>
      </div>
      <div className="col-span-1">
        <H6 {...rests}>{children}</H6>
      </div>
    </div>
  );
};

export const HeadingsStories = Headings.bind({});
HeadingsStories.args = {
  children: 'Heading is for title',
};
