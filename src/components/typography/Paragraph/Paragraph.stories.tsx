import * as React from 'react';
import { StorybookContent } from '../../../stories';

import { P, PProps } from './P';

export default {
  title: 'TypoGraphy/Paragraph',
};

const Paragraph: React.FC<PProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      <P {...rests}>{children}</P>
      <P {...rests}>{children}</P>
      <P {...rests}>{children}</P>
      <P {...rests}>{children}</P>
      <P {...rests}>{children}</P>
      <P {...rests}>{children}</P>
    </StorybookContent>
  );
};

export const ParagraphStories = Paragraph.bind({});
ParagraphStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
