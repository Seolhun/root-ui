import { Story } from '@storybook/react';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { H5 } from './H5';
import { H6 } from './H6';
import { HeadingProps } from './Heading';

export default {
  title: 'TypoGraphy/Heading',
};

const BaseTemplate = ({ children, ...others }) => {
  return (
    <>
      <H1 {...others}>{children}</H1>
      <H2 {...others}>{children}</H2>
      <H3 {...others}>{children}</H3>
      <H4 {...others}>{children}</H4>
      <H5 {...others}>{children}</H5>
      <H6 {...others}>{children}</H6>
    </>
  );
};

const Headings: Story<HeadingProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col space-y-2" noAlign noGap>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col space-y-2" noAlign noGap>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const HeadingsStories = Headings.bind({});
HeadingsStories.args = {
  children: 'Heading is for title',
};
