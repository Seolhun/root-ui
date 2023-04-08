import { Story } from '@storybook/react';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { P, PProps } from './P';

export default {
  title: 'TypoGraphy/Paragraph',
};

const BaseTemplate = ({ children, ...others }) => {
  return (
    <>
      <P {...others}>{children}</P>
      <P {...others}>{children}</P>
      <P {...others}>{children}</P>
      <P {...others}>{children}</P>
      <P {...others}>{children}</P>
      <P {...others}>{children}</P>
    </>
  );
};

const Paragraph: Story<PProps> = ({ children, ...others }) => {
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

export const ParagraphStories = Paragraph.bind({});
ParagraphStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
