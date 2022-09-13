import React from 'react';

import { storiesIntentOptions } from '../../../stories';
import { H6 } from '../headings';
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

const BlockQuotes: React.FC<BlockQuoteProps> = ({ children, ...rests }) => {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1">
        <BlockQuote {...rests}>{children}</BlockQuote>
      </div>
    </div>
  );
};

export const BlockQuoteStories = BlockQuotes.bind({});
BlockQuoteStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};

const IntentBlockQuotes: React.FC<BlockQuoteProps> = ({ children, ...rests }) => {
  return (
    <div className="grid grid-cols-1">
      {storiesIntentOptions.map((intent) => (
        <div key={intent} className="col-span-1">
          <H6>{intent}</H6>
          <BlockQuote {...rests} intent={intent}>
            {children}
          </BlockQuote>
        </div>
      ))}
    </div>
  );
};

export const IntentBlockQuotesStories = IntentBlockQuotes.bind({});
IntentBlockQuotesStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
