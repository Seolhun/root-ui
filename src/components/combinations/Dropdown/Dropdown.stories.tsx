import * as React from 'react';

import { StorybookContent } from '../../../stories';
import { Maybe } from '../../../utils/fx';
import { Avatar } from '../../atomics';
import { Dropdown, DropdownProps } from './Dropdown';
import { DropdownOption, DropdownOptionState } from './widgets';

export default {
  title: 'Combination/Dropdown',
  component: Dropdown,
};

interface TestOption extends DropdownOption {
  value: string;
}

const DropdownTemplate = ({ ...rests }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = React.useState<Maybe<TestOption>>({ value: '0_0' });

  const options = React.useMemo(() => {
    return Array.from<number, TestOption>(Array(100), (_, i) => {
      return {
        value: `value-${i}_${i}_${i}_${i}_${i}_${i}`,
      };
    });
  }, []);

  const identify = React.useCallback((option: Maybe<TestOption>) => {
    return option?.value || '';
  }, []);

  const renderOption = React.useCallback((option: Maybe<TestOption>, _state?: DropdownOptionState) => {
    if (!option) {
      return null;
    }

    return (
      <div className="flex items-center gap-x-2 truncate w-100">
        <Avatar src="https://avatars.githubusercontent.com/u/16330024?v=4" />
        <div className="truncate">{option.value}</div>
      </div>
    );
  }, []);

  const onChangeOption = React.useCallback(
    (nextOption: Maybe<TestOption>) => {
      console.debug(nextOption);
      const foundOption = options.find((option) => option.value === nextOption?.value);
      if (foundOption) {
        setSelectedOption(foundOption);
      }
    },
    [options],
  );

  return (
    <StorybookContent>
      <Dropdown
        {...rests}
        options={options}
        identify={identify}
        selectedOption={selectedOption}
        renderOption={renderOption}
        onChangeOption={onChangeOption}
      />
    </StorybookContent>
  );
};

export const Dropdowns = DropdownTemplate.bind({});
Dropdowns.args = {};
