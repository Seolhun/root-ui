import * as React from 'react';

import { storiesIntentOptions, StorybookContent } from '~/stories';

import { BlockQuote, BlockQuoteProps } from './BlockQuote';

export default {
  title: 'TypoGraphy/BlockQuote',
  component: BlockQuote,
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
};

const BlockQuotes: React.FC<BlockQuoteProps> = ({ children, ...others }) => {
  return (
    <StorybookContent noAlign noGap>
      <BlockQuote {...others}>{children}</BlockQuote>
    </StorybookContent>
  );
};

export const BlockQuoteStories = BlockQuotes.bind({});
BlockQuoteStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};

const IntentBlockQuotes: React.FC<BlockQuoteProps> = ({ children, ...others }) => {
  return (
    <StorybookContent noAlign noGap>
      {storiesIntentOptions.map((intent) => (
        <BlockQuote {...others} key={intent} intent={intent}>
          {children}
        </BlockQuote>
      ))}
    </StorybookContent>
  );
};

export const IntentBlockQuotesStories = IntentBlockQuotes.bind({});
IntentBlockQuotesStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
