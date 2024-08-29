import { Meta, StoryObj } from '@storybook/react/*';
import clsx from 'clsx';
import * as React from 'react';

import { StorybookContent } from '../../../stories';
import { Disclosure } from './Disclosure';
import { DisclosureProps } from './Disclosure.Root';

const BaseTemplate = ({ children, ...others }: DisclosureProps) => {
  return (
    <Disclosure {...others} className={clsx('w-full max-w-md')}>
      <Disclosure.Button className={clsx('w-full border-b pb-2 text-left')}>
        Is team pricing available?
      </Disclosure.Button>
      <div className={clsx('overflow-hidden py-2')}>
        <Disclosure.Panel
          className={clsx(
            'origin-top transition duration-200 ease-out',
            'data-[closed]:-translate-y-6 data-[closed]:opacity-0',
          )}
          transition
        >
          Yes! You can purchase a license that you can share with your entire team.
        </Disclosure.Panel>
      </div>
    </Disclosure>
  );
};

const DisclosureTemplate = ({ children, ...others }: DisclosureProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign>
        <BaseTemplate {...others}>{children}</BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Disclosures: StoryObj<DisclosureProps> = {
  args: {
    children: 'Disclosure',
  },
  render: DisclosureTemplate,
};

const meta: Meta<typeof Disclosure> = {
  title: 'Combination/Disclosure',
};

export default meta;
