import { Story } from '@storybook/react';
import * as React from 'react';

import { Avatar } from '~/components/atomics';
import { StorybookContent } from '~/stories';
import { Optional } from '~/utils/fx';

import { Dropdown } from './Dropdown';
import { DropdownRenderOptionFunction, DropdownIdentifyFunction } from './Dropdown.types';
import { useDropdownRenderer } from './useDropdownRenderer';
import { DropdownOption, DropdownOptionState, DropdownWidgetProps } from './widgets';

export default {
  title: 'Combination/Dropdown',
  component: Dropdown,
};

interface ProfileOption extends DropdownOption {
  avatar: string;
  value: string;
}

const DEFAULT_OPTIONS = Array.from<number, ProfileOption>(Array(10), (_, i) => ({
  avatar: 'https://avatars.githubusercontent.com/u/16330024?v=4',
  value: `value-${i}_${i}_${i}_${i}_${i}_${i}`,
}));

const DropdownTemplate = ({ ...others }: DropdownWidgetProps<ProfileOption, ProfileOption[]>) => {
  const [selectedOption, setSelectedOption] = React.useState<Optional<ProfileOption>>(DEFAULT_OPTIONS[0]);

  const identify = React.useCallback<DropdownIdentifyFunction<ProfileOption>>((option) => {
    return option?.value || '';
  }, []);

  const renderOption = React.useCallback<DropdownRenderOptionFunction<ProfileOption>>((option, _state) => {
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

  const { optionRenderer, selectedOptionRenderer } = useDropdownRenderer({
    identify,
    renderOption,
  });

  const onChangeOption = React.useCallback((nextOption: Optional<ProfileOption>) => {
    if (nextOption) {
      setSelectedOption(nextOption);
    }
  }, []);

  return (
    <Dropdown {...others} onChangeOption={onChangeOption} option={selectedOption} placement="right">
      <Dropdown.Button className="min-w-120">{selectedOptionRenderer(selectedOption)}</Dropdown.Button>
      <Dropdown.OptionList>
        {DEFAULT_OPTIONS.map((option) => {
          const { disabled } = option;
          const key = identify(option);
          return (
            <Dropdown.Option key={key} value={option} disabled={disabled}>
              {(state: DropdownOptionState) => <>{optionRenderer(option, state)}</>}
            </Dropdown.Option>
          );
        })}
      </Dropdown.OptionList>
    </Dropdown>
  );
};

const _Dropdowns = (props: DropdownWidgetProps<ProfileOption, ProfileOption[]>) => {
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

export const Dropdowns: Story<DropdownWidgetProps<ProfileOption, ProfileOption[]>> = _Dropdowns.bind({});
Dropdowns.args = {};

const MultiDropdownTemplate = ({ ...others }: DropdownWidgetProps<ProfileOption, ProfileOption[]>) => {
  const [selectedOption, setSelectedOption] = React.useState<ProfileOption[]>([]);

  const identify = React.useCallback<DropdownIdentifyFunction<ProfileOption, ProfileOption[]>>((options) => {
    if (Array.isArray(options)) {
      return options.reduce((acc, option) => `${acc}, ${option.value}`, '');
    }
    return options?.value || '';
  }, []);

  const renderOption = React.useCallback<DropdownRenderOptionFunction<ProfileOption, ProfileOption[]>>(
    (option, _state) => {
      if (!option) {
        return null;
      }

      /**
       * Multiple SelectedOptions
       */
      if (Array.isArray(option)) {
        return (
          <div className="flex flex-wrap gap-2">
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

  const onChangeOption = React.useCallback((nextOption: Optional<ProfileOption[]>) => {
    if (nextOption) {
      setSelectedOption(nextOption);
    }
  }, []);

  const { optionRenderer, selectedOptionRenderer } = useDropdownRenderer({
    identify,
    renderOption,
  });

  return (
    <Dropdown {...others} onChangeOption={onChangeOption} option={selectedOption}>
      <Dropdown.Button className="min-w-120">{selectedOptionRenderer(selectedOption)}</Dropdown.Button>
      <Dropdown.OptionList>
        {DEFAULT_OPTIONS.map((option) => {
          const { disabled } = option;
          const key = identify(option);
          return (
            <Dropdown.Option key={key} value={option} disabled={disabled}>
              {(state: DropdownOptionState) => <>{optionRenderer(option, state)}</>}
            </Dropdown.Option>
          );
        })}
      </Dropdown.OptionList>
    </Dropdown>
  );
};

const _MultiDropdowns = (props: DropdownWidgetProps<ProfileOption, ProfileOption[]>) => {
  return (
    <StorybookContent>
      <StorybookContent.Light noAlign noGap>
        <MultiDropdownTemplate {...props} />
      </StorybookContent.Light>
      <StorybookContent.Dark noAlign noGap>
        <MultiDropdownTemplate {...props} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const MultiDropdowns: Story<DropdownWidgetProps<ProfileOption, ProfileOption[]>> = _MultiDropdowns.bind({});
MultiDropdowns.args = {
  multiple: true,
};
