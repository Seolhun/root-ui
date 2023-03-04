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

interface ProfileOption extends DropdownOption {
  avatar: string;

  value: string;
}

const DEFAULT_OPTIONS = Array.from<number, ProfileOption>(Array(10), (_, i) => {
  return {
    avatar: 'https://avatars.githubusercontent.com/u/16330024?v=4',
    value: `value-${i}_${i}_${i}_${i}_${i}_${i}`,
  };
});

const DropdownTemplate = ({ ...rests }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = React.useState<Maybe<ProfileOption>>(DEFAULT_OPTIONS[0]);

  const identify = React.useCallback((option: Maybe<ProfileOption>) => {
    return option?.value || '';
  }, []);

  const renderOption = React.useCallback((option: Maybe<ProfileOption>, _state?: DropdownOptionState) => {
    if (!option) {
      return null;
    }

    return (
      <div className="flex items-center gap-x-2 truncate">
        <Avatar src={option.avatar} />
        <div className="truncate">{option.value}</div>
      </div>
    );
  }, []);

  const onChangeOption = React.useCallback((nextOption: Maybe<ProfileOption>) => {
    console.debug(nextOption);
    if (nextOption) {
      setSelectedOption(nextOption);
    }
  }, []);

  return (
    <StorybookContent>
      <Dropdown
        {...rests}
        identify={identify}
        options={DEFAULT_OPTIONS}
        selectedOption={selectedOption}
        renderOption={renderOption}
        onChange={onChangeOption}
      />
    </StorybookContent>
  );
};

export const Dropdowns = DropdownTemplate.bind({});
Dropdowns.args = {};

const MultiDropdownTemplate = ({ ...rests }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = React.useState<ProfileOption[]>([]);

  const identify = React.useCallback((options: Maybe<ProfileOption | ProfileOption[]>) => {
    if (Array.isArray(options)) {
      return options.reduce((acc, option) => `${acc}, ${option.value}`, '');
    }
    return options?.value || '';
  }, []);

  const renderOption = React.useCallback(
    (option: Maybe<ProfileOption | ProfileOption[]>, _state?: DropdownOptionState) => {
      if (!option) {
        return null;
      }

      /**
       * Multiple SelectedOptions
       */
      if (Array.isArray(option)) {
        return (
          <div className="flex flex-wrap">
            {option.map((o) => (
              <div key={o.value} className="flex items-center gap-x-2 truncate mt-1 mr-2">
                <Avatar src={o.avatar} />
                <div className="truncate">{o.value}</div>
              </div>
            ))}
          </div>
        );
      }

      return (
        <div className="flex items-center gap-x-2 truncate">
          <Avatar src={option.avatar} />
          <div className="truncate">{option.value}</div>
        </div>
      );
    },
    [],
  );

  const onChangeOption = React.useCallback((nextOption: Maybe<ProfileOption[]>) => {
    if (nextOption) {
      setSelectedOption(nextOption);
    }
  }, []);

  return (
    <StorybookContent>
      <Dropdown<ProfileOption, ProfileOption[]>
        {...rests}
        identify={identify}
        options={DEFAULT_OPTIONS}
        onChange={onChangeOption}
        selectedOption={selectedOption}
        renderOption={renderOption}
        classes={{
          button: 'w-300',
        }}
        multiple
      />
    </StorybookContent>
  );
};

export const MultiDropdowns = MultiDropdownTemplate.bind({});
MultiDropdowns.args = {
  multiple: true,
};
