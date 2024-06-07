import * as React from 'react';

import { Optional } from '../../../utils/fx';
import {
  DropdownIdentifyFunction,
  DropdownRenderOptionFunction,
  DropdownRenderSelectedOptionFunction,
} from './Dropdown.types';
import { DropdownOption, DropdownOptionState } from './widgets';

export interface UseDropdownRendererProps<Option extends DropdownOption, ActionOption = Option> {
  /**
   * To Identify option uniqueness
   */
  identify: DropdownIdentifyFunction<Option, ActionOption>;

  /**
   * To render option
   */
  renderOption?: DropdownRenderOptionFunction<Option, ActionOption>;

  /**
   * To render selected option
   * if this value is empty, used first renderOption. and then raw option
   */
  renderSelectedOption?: DropdownRenderSelectedOptionFunction<Option, ActionOption>;
}

export interface UseDropdownRendererReturns<Option extends DropdownOption, ActionOption = Option> {
  optionRenderer: (option: Optional<Option>, state: DropdownOptionState) => React.ReactNode;
  selectedOptionRenderer: (option: Optional<ActionOption>) => React.ReactNode;
}

export const useDropdownRenderer = <Option extends DropdownOption, ActionOption = Option>({
  identify,
  renderOption,
  renderSelectedOption,
}: UseDropdownRendererProps<Option, ActionOption>): UseDropdownRendererReturns<Option, ActionOption> => {
  const optionRenderer = React.useCallback(
    (option: Optional<Option>, state: DropdownOptionState) => {
      if (renderOption) {
        return renderOption(option, state);
      }
      return identify(option);
    },
    [identify, renderOption],
  );

  const selectedOptionRenderer = React.useCallback(
    (option: Optional<ActionOption>) => {
      if (option) {
        // DO_NOT_CHANGE_ORDER
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

  return {
    optionRenderer,
    selectedOptionRenderer,
  };
};
