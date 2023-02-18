import * as React from 'react';

import { Maybe } from '../../../utils/fx';
import { DropdownWidget, DropdownOption, DropdownOptionState } from './widgets';

interface ElementProps {
  className?: string;

  disabled?: boolean;
}

export interface DropdownProps<Option extends DropdownOption = DropdownOption> extends ElementProps {
  options: Option[];

  /**
   * Selected option
   */
  selectedOption: Maybe<Option>;

  /**
   * To Identify option uniqueness
   */
  identify: (option: Maybe<Option>) => string;

  /**
   * Change option handler
   */
  onChangeOption: (option: Maybe<Option>) => void;

  /**
   * To render option
   */
  renderOption?: (option: Maybe<Option>, state?: DropdownOptionState) => React.ReactNode;
}

export function Dropdown<Option extends DropdownOption = DropdownOption>({
  options,
  selectedOption,
  onChangeOption,
  renderOption,
  identify,
  disabled,
}: DropdownProps<Option>) {
  const SelectedOption = React.useMemo(() => {
    if (selectedOption && renderOption) {
      return renderOption(selectedOption);
    }
    return identify(selectedOption);
  }, [selectedOption, renderOption, identify]);

  const renderedOption = React.useCallback(
    (option: Maybe<Option>, state: DropdownOptionState) => {
      if (renderOption) {
        return renderOption(option, state);
      }
      return identify(option);
    },
    [identify, renderOption],
  );

  return (
    <DropdownWidget<Option> value={selectedOption} onChange={onChangeOption} disabled={disabled}>
      <DropdownWidget.Button>{SelectedOption}</DropdownWidget.Button>
      <DropdownWidget.Options>
        {options.map((option) => {
          const { disabled } = option;
          const key = identify(option);
          return (
            <DropdownWidget.Option key={key} value={option} disabled={disabled}>
              {(state: DropdownOptionState) => <>{renderedOption(option, state)}</>}
            </DropdownWidget.Option>
          );
        })}
      </DropdownWidget.Options>
    </DropdownWidget>
  );
}
