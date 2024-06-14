import { Meta, StoryFn, StoryObj } from '@storybook/react';
import * as React from 'react';

import { StorybookContent } from '../../../stories';
import { P, PProps } from './P';

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

const ParagraphTemplate = ({ children, ...others }: PProps) => {
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

export const ParagraphStories: StoryObj<PProps> = {
  args: {
    className: 'text-space-1 dark:text-cream-1',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum.',
  },
  render: ParagraphTemplate,
};

const meta: Meta<PProps> = {
  component: P,
  parameters: {
    controls: { expanded: true },
  },
  title: 'TypoGraphy/Paragraph',
};

export default meta;
