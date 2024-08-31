import { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.Root';
import { DropdownValue } from './Dropdown.types';

interface ProfileOption extends DropdownValue<number> {}

const DEFAULT_OPTIONS = Array.from<number, ProfileOption>(Array(10), (_, i) => ({
  children: `Option ${i}`,
  value: i,
}));

const BaseTemplate = () => {
  const [triggerRef, setTriggerRef] = React.useState<HTMLButtonElement | null>(null);
  const [selectedOption, setSelectedOption] = React.useState<ProfileOption>(DEFAULT_OPTIONS[0]);

  const onChangeOption = React.useCallback((nextOption: ProfileOption) => {
    if (nextOption) {
      setSelectedOption(nextOption);
    }
  }, []);

  return (
    <Dropdown onChangeOption={onChangeOption} option={selectedOption}>
      <div>
        <Dropdown.Trigger className="text-space-1 dark:text-cream-1" ref={(e) => setTriggerRef(e)}>
          {selectedOption.children}
        </Dropdown.Trigger>
        <Dropdown.Panel className="flex flex-col space-y-2" root={triggerRef}>
          {DEFAULT_OPTIONS.map((option) => {
            return (
              <Dropdown.Option key={option.value} option={option}>
                <div className={clsx('flex items-center gap-x-2 truncate', 'text-space-1 dark:text-cream-1')}>
                  <div>{option.children}</div>
                  <div className="truncate">{option.value}</div>
                </div>
              </Dropdown.Option>
            );
          })}
        </Dropdown.Panel>
      </div>
    </Dropdown>
  );
};

const DropdownTemplate = () => {
  return (
    <StorybookContent>
      <StorybookContent.Light noAlign noGap>
        <BaseTemplate />
      </StorybookContent.Light>
      <StorybookContent.Dark noAlign noGap>
        <BaseTemplate />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Dropdowns: StoryObj<DropdownProps<number>> = {
  args: {},
  render: (args) => <DropdownTemplate />,
};

const meta: Meta<typeof Dropdown> = {
  title: 'Combination/Dropdown',
};

export default meta;
