import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { storiesIntentOptions, StorybookContent } from '../../../stories';
import { BlockQuote, BlockQuoteProps } from './BlockQuote';

export default {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
  component: BlockQuote,
  title: 'TypoGraphy/BlockQuote',
};

const BaseTemplate = ({ children, ...others }) => {
  return <BlockQuote {...others}>{children}</BlockQuote>;
};

const BlockQuotes: StoryFn<BlockQuoteProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col space-y-4" noAlign noGap>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col space-y-4" noAlign noGap>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const BlockQuoteStories = BlockQuotes.bind({});
BlockQuoteStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};

const IntentBlockQuotes: StoryFn<BlockQuoteProps> = ({ children, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col space-y-4" noAlign noGap>
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col space-y-4" noAlign noGap>
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentBlockQuotesStories = IntentBlockQuotes.bind({});
IntentBlockQuotesStories.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus animi aliquid molestiae vitae similique asperiores illum, sit quisquam, veritatis rerum. Illum, quia ut? Nemo sunt explicabo in provident id?',
};
