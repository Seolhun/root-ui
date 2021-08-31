import React from 'react';

import { P, PProps } from './P';

export default {
  title: 'TypoGraphy/Paragraph',
};

const Paragraph: React.FC<PProps> = ({ children, ...rests }) => {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1">
        <P {...rests}>{children}</P>
        <P {...rests}>{children}</P>
      </div>
    </div>
  );
};

export const ParagraphStories = Paragraph.bind({});
ParagraphStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
