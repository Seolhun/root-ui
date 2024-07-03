import { Meta, StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Accordion } from './Accordion';
import { AccordionProps } from './Accordion.Root';

const BaseTemplate = ({ children, ...others }: AccordionProps) => {
  return (
    <Accordion {...others}>
      <Accordion.Widgets.Button>Button</Accordion.Widgets.Button>
      <Accordion.Widgets.Panel>{children}</Accordion.Widgets.Panel>
    </Accordion>
  );
};

const ScaleAccordionsStories = ({ children, ...others }: AccordionProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleAccordions: StoryObj<AccordionProps> = {
  args: {
    children: 'Accordion',
  },
  render: ScaleAccordionsStories,
};

const meta: Meta<typeof Accordion> = {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  title: 'Combination/Accordion',
};

export default meta;
