import { Transition } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Avatar } from '~/components/atomics';
import { StorybookContent } from '~/stories';

import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.Root';
import { DropdownOptionValue } from './Dropdown.types';

interface ProfileOption extends DropdownOptionValue<string> {}

const DEFAULT_OPTIONS = Array.from<number, ProfileOption>(Array(10), (_, i) => ({
  children: 'https://avatars.githubusercontent.com/u/16330024?v=4',
  value: i,
}));

const DropdownTemplate = () => {
  const [selectedOption, setSelectedOption] = React.useState<ProfileOption>(DEFAULT_OPTIONS[0]);

  const onChangeOption = React.useCallback((nextOption: ProfileOption) => {
    if (nextOption) {
      setSelectedOption(nextOption);
    }
  }, []);

  return (
    <Dropdown className="relative" onChange={onChangeOption} value={selectedOption}>
      <Dropdown.Button className="min-w-120">{selectedOption.children}</Dropdown.Button>
      <Dropdown.OptionList anchor="bottom" transition>
        <Transition as="div" leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          {DEFAULT_OPTIONS.map((option) => {
            return (
              <Dropdown.Option key={option.value} value={option}>
                {(state) => {
                  return (
                    <div className="flex items-center gap-x-2 truncate">
                      <Avatar src={option.children} />
                      <div className="truncate">{option.value}</div>
                    </div>
                  );
                }}
              </Dropdown.Option>
            );
          })}
        </Transition>
      </Dropdown.OptionList>
    </Dropdown>
  );
};

const Dropdowns = (props: DropdownProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light noAlign noGap>
        <DropdownTemplate {...props} />
      </StorybookContent.Light>
      <StorybookContent.Dark noAlign noGap>
        <DropdownTemplate {...props} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Tooltips: StoryObj<DropdownProps> = {
  args: {},
  render: (args) => <Dropdowns {...args} />,
};

const meta: Meta<typeof Dropdown> = {
  title: 'Combination/Dropdown',
};

export default meta;
