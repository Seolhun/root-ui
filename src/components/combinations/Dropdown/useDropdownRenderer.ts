import * as React from 'react';

import { Optional } from '~/utils/fx';

import { DropdownOption, DropdownOptionState } from './widgets';

export interface UseDropdownRendererProps<Option extends DropdownOption, ActionOption = Option> {
  /**
   * To Identify option uniqueness
   */
  identify: (option: Optional<Option | ActionOption>) => string;

  /**
   * To render option
   */
  renderOption?: (option: Optional<Option | ActionOption>, state?: DropdownOptionState) => React.ReactNode;

  /**
   * To render selected option
   * if this value is empty, used first renderOption. and then raw option
   */
  renderSelectedOption?: (option: Optional<ActionOption>) => React.ReactNode;
}

export type UseDropdownRenderer = ReturnType<typeof useDropdownRenderer>;

export function useDropdownRenderer<Option extends DropdownOption, ActionOption = Option>({
  identify,
  renderOption,
  renderSelectedOption,
}: UseDropdownRendererProps<Option, ActionOption>) {
  const selectedOptionRenderer = React.useCallback(
    (option: Optional<ActionOption>) => {
      if (option) {
        if (renderSelectedOption) {
          return renderSelectedOption(option);
        }
        if (renderOption) {
          return renderOption(option);
        }
      }
      return identify(option);
    },
    [identify, renderOption, renderSelectedOption],
  );

  const optionRenderer = React.useCallback(
    (option: Optional<Option>, state: DropdownOptionState) => {
      if (renderOption) {
        return renderOption(option, state);
      }
      return identify(option);
    },
    [identify, renderOption],
  );

  return {
    selectedOptionRenderer,
    optionRenderer,
  } as const;
}
